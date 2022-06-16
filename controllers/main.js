const {BadRequestError} = require('../errors')
const login = async (request, response) => {
    const { username, password } = request.body

    if(!username || !password) {
        throw new BadRequestError('Please provide both email and password')
    }

    const id = new Date().getDate() // for demo onli

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    // console.log(username, password)
    response.status(200).json({ msg: 'user created', token})
}

const dashboard = async (request, response) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    response.status(200).json({ msg: `Hello, ${request.user.username}`, secret: `here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard,
}