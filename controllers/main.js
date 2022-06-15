const login = async (request, response) => {
    response.send('Fake Login/Register/Signup Route')
}

const dashboard = async(request, response) => {
    const luckyNumber = Math.floor(Math.randon() * 100)
    response.status(200).json({ 
        msg: `Hello, John Doe`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
    })
}

module.exports = {
    login,
    dashboard
}