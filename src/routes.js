import { Router } from 'express'
import ApiController from "./controllers/ApiController";

const routes = new Router()

routes.get('/', (req, res) => {
    res.render("Home")
})
routes.get("/api", ApiController.index);

export default routes