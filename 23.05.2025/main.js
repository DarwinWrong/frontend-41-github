class MessageFactory {
    create(type, author, text) {
        if (type === 'admin') {
            return `Адмін ${author}: ${text}`
        } else if (type === 'system') {
            return `Система: ${text}`
        } else {
            return `${author}: ${text}`
        }
    }
}

class Chat {
    constructor() {
        this.subscribers = []
    }

    subscribe(user) {
        this.subscribers.push(user)
    }

    send(fromUser, message) {
        this.subscribers.forEach(user => user.notify(message, fromUser))
    }
}

class User {
    constructor(name, chat, factory) {
        this.name = name
        this.chat = chat
        this.factory = factory

        this.createUI()
        this.chat.subscribe(this)
    }

    createUI() {
        const container = document.createElement("div")
  
        const title = document.createElement("h3")
        title.textContent = `${this.name}`
        container.appendChild(title)

        this.chatLog = document.createElement("ul")
        container.appendChild(this.chatLog)

        this.input = document.createElement("input")
        this.input.placeholder = "Повідомлення"
        container.appendChild(this.input)

        const button = document.createElement("button")
        button.textContent = "Надіслати"
        button.addEventListener("click", () => this.sendMessage())
        container.appendChild(button)

        document.getElementById("chat").appendChild(container)
    }

    sendMessage() {
        const text = this.input.value.trim()
        if (!text) return

        const msg = this.factory.create("user", this.name, text)
        this.chat.send(this, msg)
        this.input.value = ""
    }

    notify(message, fromUser) {
        const li = document.createElement("li")
        if (fromUser === this) {
            li.textContent = `Ви: ${message.split(": ").slice(1).join(": ")}`
        } else {
            li.textContent = message
        }
        this.chatLog.appendChild(li)
    }
}

const factory = new MessageFactory()
const chat = new Chat()

new User("Bob", chat, factory)
new User("Admin", chat, factory)
