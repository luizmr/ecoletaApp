import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    // busca por cidade/estado/item - listar pontos filtrados
    async index(request: Request, response: Response) {
        // query params - usado para busca por filtros
        const { city, uf, items } = request.query

        // transformar array
        const parsedItems = String(items)
            .split(',')
            .map((item) => Number(item.trim()))

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        // distinct - so retorna pontos de coleta distintos

        const serializedPoints = points.map((point) => {
            return {
                ...point,
                image_url: `http://192.168.0.108:3333/uploads/${point.image}`,
            }
        })

        return response.json(serializedPoints)
    }

    // mostrar o ponto de coleta
    async show(request: Request, response: Response) {
        const { id } = request.params

        // seleciona o primeiro ponto do points, que é o id
        const point = await knex('points').where('id', id).first()

        if (!point) {
            // erro
            return response.status(400).json({ message: 'Point not found.' })
        }

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.0.108:3333/uploads/${point.image}`,
        }

        // select * from items
        // join point_items on items.id * point_items.item_id
        // where point_items.point_id = {id}
        // retorna todos os items que estao relacionados com o ponto que foi buscado
        // e só seleciona o title do item, que vai precisar ser motrado pro usuario
        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')

        return response.json({ point: serializedPoint, items })
    }

    // criar o ponto de coleta
    async create(request: Request, response: Response) {
        // desestruturação -> name = request.body.name
        const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body

        const trx = await knex.transaction()

        const point = {
            image: request.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        }

        // short syntax -> name: name -> consegue omitir
        const insertedIds = await trx('points').insert(point)

        const point_id = insertedIds[0]

        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
                return {
                    item_id,
                    point_id,
                }
            })

        // se a primeira query falhar, esta segunda nao vai ser executada
        await trx('point_items').insert(pointItems)

        // vai fazer o insert na base de dados
        await trx.commit()

        return response.json({
            id: point_id,
            ...point,
        })
    }
}

export default PointsController
