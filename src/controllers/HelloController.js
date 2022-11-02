class HelloController{
    async index(req, res) {
    return res.json({hello: 'Hello Caio'})
}
}

export default new HelloController()