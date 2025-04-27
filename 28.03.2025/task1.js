class UserManager {
    constructor() {
        this.user = [];
    }
    addUser(user) {
        this.user.push(user);
    }
    removeUser(name) {
        this.user = this.user.filter(user => user.name !== name)
    }
    listUsers() {
        return this.user;
    }
}
const user = { name: "John Doe", role: "user" };
const admin = { name: "Admin Smith", role: "admin" };

const manager = new UserManager();

manager.addUser(user);
manager.addUser(admin);

console.log(manager.listUsers());

manager.removeUser("John Doe");

console.log(manager.listUsers()); 
