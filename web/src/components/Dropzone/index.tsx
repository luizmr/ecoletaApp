import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './styles.css'
import { FiUpload } from 'react-icons/fi'

interface Props {
    onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState('')

    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0] //só vai aceitar um arq, entao sempre vai estar na pos. 0

            const fileUrl = URL.createObjectURL(file)

            setSelectedFileUrl(fileUrl)
            onFileUploaded(file)
        },
        [onFileUploaded]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' })

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            {/* caso exista esta variavel */}
            {selectedFileUrl ? (
                <img src={selectedFileUrl} alt="Point thumbnail" />
            ) : (
                <p>
                    <FiUpload />
                    Upload da Imagem do Estabelecimento
                </p>
            )}
        </div>
    )
}

export default Dropzone
