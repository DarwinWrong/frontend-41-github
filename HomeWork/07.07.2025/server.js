const http = require("http");
const getInfo = require("./info");

const server = http.createServer((req, res) => {
  const url = req.url;
  const info = getInfo();

  try {
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end("Вітаю! Це мій перший Node.js сервер.");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h2>Про мене</h2>
        <p>Ім’я: ${info.name}</p>
        <p>Вік: ${info.age}</p>
        <p>Інтереси: Веб-розробка, програмування</p>`);
    } else if (url === "/skills") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const skillsList = info.skills
        .map((skill) => `<li>${skill}</li>`)
        .join("");
      res.end(`<h2>Мої навички</h2><ul>${skillsList}</ul>`);
    } else if (url === "/error") {
      throw new Error("Помилка!");
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h3>404: Сторінку не знайдено</h3>");
    }
  } catch (err) {
    if (!res.writableEnded) {
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h3>Сталася помилка на сервері:</h3><p>${err.message}</p>`);
    } else {
      console.error("Помилка після відправки відповіді:", err);
    }
  }
});

server.listen(3000, () => {
  console.log("✅ Сервер запущено на http://localhost:3000");
});
