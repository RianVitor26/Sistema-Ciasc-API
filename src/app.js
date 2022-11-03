import express from 'express'
import cors from 'cors'
import routes from './routes'
import './database'
import path from 'path'
import bodyParser from 'body-parser'

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
        this.server.set('view engine', 'ejs')
        this.server.set('views', path.join(__dirname, 'views'))
        this.server.use(express.static(path.join(__dirname, 'public')))
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(bodyParser.json())
    }

    routes() {
        this.server.use(routes)
    }
} 

export default new App().server