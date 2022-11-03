class ApiController {
  async index(req, res) {
    res.json({ message: "Welcome to my API!" });
  }
}

export default new ApiController()