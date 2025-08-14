import http from "http";
import getInfo from "./info.js";

const server = http.createServer((req, res) => {
    try {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Вітаю! Це мій перший Node.js сервер.");
        }
        else if (req.url === "/about") {
            const { name, age } = getInfo();
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            res.end(`Мене звати ${name}. Мені ${age} років. Мені подобається програмування!`);
        }
        else if (req.url === "/skills") {
            const { skills } = getInfo();
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(`
                <h1>Мої навички</h1>
                <ul>
                    ${skills.map(skill => `<li>${skill}</li>`).join("")}
                </ul>
            `);
        }
        else if (req.url === "/error") {
            throw new Error("Це тестова помилка!");
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Сторінку не знайдено!");
        }
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(`Виникла помилка: ${err.message}`);
    }
});

server.listen(3000, () => {
    console.log("Сервер запущено на http://localhost:3000");
});