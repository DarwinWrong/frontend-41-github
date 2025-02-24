const theater = {
  names: ["John", "Alice", "Bob", "Charlie", "David"],
  roles: ["King", "Queen", "Knight", "Bishop", "Rook"],

  assignRole: function (callback) {
    this.names.forEach((name, index) => {
      const role = this.roles[index];
      callback.call(this, name, role);
    });
  },

  showRole: function (nameActor, role) {
    console.log(`Актор ${nameActor} грає роль: ${role}`);
  },
};

theater.assignRole(theater.showRole);
