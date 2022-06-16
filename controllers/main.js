const login = async (request, response) => {
    response.send('fake logn register signup route')
}

const dashboard = async (requet, response) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    response.status(200).json({ msg: `Hello, john doe`, secret: `here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard,
}