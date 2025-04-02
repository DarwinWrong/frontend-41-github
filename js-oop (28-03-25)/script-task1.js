class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(name) {
    this.users = this.users.filter((user) => user.name !== name);
  }

  listUsers() {
    return this.users;
  }
}

const user = { name: 'John Doe', role: 'User' };
const admin = { name: 'Jane Smith', role: 'Admin' };

const manager = new UserManager();
manager.addUser(user);
manager.addUser(admin);

console.log('All users:', manager.listUsers());

manager.removeUser('John Doe');

console.log('Updated users:', manager.listUsers());
