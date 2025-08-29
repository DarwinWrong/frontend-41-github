const http = require('http')
const { getUserInfo } = require('./info')

const server = http.createServer((req, res) => {
    try {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end("Вітаю! Це мій перший Node.js сервер.")
        } else if (req.url === "/about") {
            const user = getUserInfo()
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
            res.end(`Ім'я: ${user.name}\nВік: ${user.age}\nІнтереси: ${user.skills.join(", ")}`)
        } else if (req.url === "/skills") {
            const user = getUserInfo()
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            const skillsHtml = user.skills.map(skill => `<li>${skill}</li>`).join("")
            res.end(`<h2>Мої навички</h2><ul>${skillsHtml}</ul>`)
        } else if (req.url === "/error") {
            throw new Error("Це спеціально викликана помилка для тесту!")
        } else {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
            res.end("Сторінка не знайдена")
        }
    }
    catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
        res.end("Виникла помилка: " + err.message)
        console.error(err)
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`)
})