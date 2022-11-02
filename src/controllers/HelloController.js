class HelloController{
    async index(req, res) {
    return res.json({hello: 'Hello Rian'})
}
}

export default new HelloController()