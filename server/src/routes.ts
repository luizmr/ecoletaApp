import express from 'express'
import multer from 'multer'
import multerConfig from './configs/multer'
import { celebrate, Joi } from 'celebrate'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

const upload = multer(multerConfig)

routes.get('/items', itemsController.index)

// rota de criaçao de ponto
routes.post(
    '/points',
    upload.single('image'),
    celebrate(
        {
            body: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required(),
                latitude: Joi.number().required(),
                longitude: Joi.number().required(),
                city: Joi.string().required(),
                uf: Joi.string().required().max(2),
                items: Joi.string().required(),
            }),
        },
        {
            abortEarly: false,
        }
    ),
    pointsController.create
)

routes.get('/points', pointsController.index)

routes.get('/points/:id', pointsController.show)

// precisa exportar as rotas, para o server ter acesso
export default routes
