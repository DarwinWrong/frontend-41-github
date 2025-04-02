class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(user) {
        this.users.push(user);
    }
    
    removeUser(name) {
        this.users = this.users.filter(user => user.name !== name);
    }
    
    listUsers() {
        return this.users;
    }
}
