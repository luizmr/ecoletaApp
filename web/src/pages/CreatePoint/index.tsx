import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import { Map, TileLayer, Marker } from 'react-leaflet'
import api from '../../services/api'
import axios from 'axios' //api ibge

import Dropzone from '../../components/Dropzone'

import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

import { LeafletMouseEvent } from 'leaflet' // evento para o onclick do map e handlemapclick

interface Item {
    id: number
    title: string
    image_url: string
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string
}

const CreatePoint = () => {
    const [items, setItems] = useState<Item[]>([])
    const [ufs, setUfs] = useState<string[]>([]) //vetor de strings

    const [selectedUf, setSelectedUf] = useState('0') // armazena qual uf o usuario selecionou

    const [cities, setCities] = useState<string[]>([])

    const [selectedCity, setSelectedCity] = useState('0')

    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]) //posiçao lat e long array

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]) //posição atual do usuario no mapa

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    }) // vai salvar os dados do form input dos usuarios

    const [selectedItems, setSelectedItems] = useState<number[]>([]) //vai guardar o id dos items selecionados

    const history = useHistory() // com este comando importado, permite que os sites naveguem entre paginas sem precisar solicitar/apaertar algo

    const [selectedFile, setSelectedFile] = useState<File>()

    useEffect(() => {
        //da a posição atual do usuario
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords

            setInitialPosition([latitude, longitude])
        })
    }, [])

    useEffect(() => {
        api.get('items').then((response) => {
            setItems(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
            const ufInitials = response.data.map((uf) => uf.sigla)

            setUfs(ufInitials)
        })
    }, [])

    useEffect(() => {
        // carregar as cidades sempre que a UF mudar

        if (selectedUf === '0') {
            return
        }
        axios
            .get<IBGECityResponse[]>(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
            )
            .then((response) => {
                const cityNames = response.data.map((city) => city.nome)

                setCities(cityNames)
            })
    }, [selectedUf]) //segundo array avisa quando a useeffect tem que executar

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value

        setSelectedUf(uf) //altera o valor do estado
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value

        setSelectedCity(city) //altera o valor do estado
    }

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPosition([event.latlng.lat, event.latlng.lng])
    } //armazena a posição que o usuario clicou no mapa na app

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        // salva os dados que ja tem através do spread operator e altera os valores obtidos de name e value pelo event.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex((item) => item === id) //pega os items que tem index igual id

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter((item) => item !== id)
            // desseleciona os items que diferente do id
            setSelectedItems(filteredItems)
        } else {
            setSelectedItems([...selectedItems, id]) //mantem os selecionados e seleciona tbm novos items
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault() //por default o html quando submita ou da enter em qualquer opção, ele recarrega a page -> isso evita que recarregue

        const { name, email, whatsapp } = formData
        const uf = selectedUf
        const city = selectedCity
        const [latitude, longitude] = selectedPosition
        const items = selectedItems

        const data = new FormData()

        data.append('name', name)
        data.append('email', email)
        data.append('whatsapp', whatsapp)
        data.append('uf', uf)
        data.append('city', city)
        data.append('latitude', String(latitude))
        data.append('longitude', String(longitude))
        data.append('items', items.join(','))

        if (selectedFile) {
            data.append('image', selectedFile)
        }

        // const data = {
        //     name,
        //     email,
        //     whatsapp,
        //     uf,
        //     city,
        //     latitude,
        //     longitude,
        //     items,
        // }
        await api.post('points', data) //faz o registro do ponto de coleta criado na api

        alert('Ponto de coleta criado!')

        history.push('/') // volta pra home depois do alerta
    }

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para Home
                </Link>
            </header>
            {/* qual ação deve ser disparada quando der submit no form */}
            <form onSubmit={handleSubmit}>
                <h1>
                    Cadastro do
                    <br /> ponto de coleta
                </h1>

                <Dropzone onFileUploaded={setSelectedFile} />

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input type="text" name="name" id="name" onChange={handleInputChange} />
                    </div>

                    <div className="fieldgroup">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" onChange={handleInputChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input
                                placeholder="xx xxxx xxxx"
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPosition} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" onChange={handleSelectUf} value={selectedUf}>
                                <option value="0">Selecione uma UF</option>
                                {ufs.map((uf) => (
                                    <option key={uf} value={uf}>
                                        {uf}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                                <option value="0">Selecione uma Cidade</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2>
                        <span>Selecione um ou mais ítens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map((item: Item) => (
                            <li
                                key={item.id}
                                onClick={() => handleSelectItem(item.id)}
                                className={selectedItems.includes(item.id) ? 'selected' : ''}
                            >
                                <img src={item.image_url} alt={item.title} />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>

                <button type="submit">Cadastrar ponto de coleta</button>
            </form>
        </div>
    )
}

export default CreatePoint
