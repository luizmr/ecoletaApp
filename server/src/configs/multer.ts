import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex') //gerar 6 bytes e converte para uma string hexadecimal

            const fileName = `${hash}-${file.originalname}` //nome do arquivo que vai ser enviado pelo user

            callback(null, fileName) //erro nulo e passa o fileName
        },
    }),
}
