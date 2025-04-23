class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    removeUser(name) {
      this.users = this.users.filter(u => u !== name);
    }
  
    listUsers() {
      return this.users;
    }
  }
  
  const manager = new UserManager();
  
  function addUser() {
    const name = document.getElementById("userName").value.trim();
    if (name) {
      manager.addUser(name);
      document.getElementById("userName").value = '';
      listUsers();
    }
  }
  
  function removeUser() {
    const name = document.getElementById("userName").value.trim();
    if (name) {
      manager.removeUser(name);
      document.getElementById("userName").value = '';
      listUsers();
    }
  }
  
  function listUsers() {
    const output = manager.listUsers().join("\n");
    document.getElementById("userOutput").textContent = output || "Список порожній.";
  }
  
  
  
  function replaceText() {
    const text = document.getElementById("textInput").value;
    const search = document.getElementById("searchWords").value.split(",").map(s => s.trim().toLowerCase());
    const replace = document.getElementById("replaceWords").value.split(",").map(r => r.trim());
  
    const result = text.split(/\b/).map(word => {
      const index = search.indexOf(word.toLowerCase());
      if (index !== -1) {
        let newWord = replace[index] || word;
        // Зберігаємо регістр
        if (word[0] === word[0].toUpperCase()) {
          newWord = newWord[0].toUpperCase() + newWord.slice(1);
        }
        return newWord;
      }
      return word;
    }).join('');
  
    document.getElementById("replaceOutput").textContent = result;
  }
  
  
  
  function parseArray(input) {
    return input.split(",").map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  }
  
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function processArrays() {
    const a1 = parseArray(document.getElementById("arr1").value);
    const a2 = parseArray(document.getElementById("arr2").value);
    const a3 = parseArray(document.getElementById("arr3").value);
    const a4 = parseArray(document.getElementById("arr4").value);
  
    const combined = [...a1, ...a2, ...a3, ...a4].sort((a, b) => b - a);
    const unique = [...new Set(combined)];
    const common = a1.filter(x => a2.includes(x) && a3.includes(x) && a4.includes(x));
    const primes = unique.filter(isPrime);
  
    const output = `
  Об'єднано (спаданням): ${combined.join(", ")}
  Унікальні: ${unique.join(", ")}
  Спільні: ${common.join(", ")}
  Прості числа: ${primes.join(", ")}
    `;
    document.getElementById("arrayOutput").textContent = output.trim();
  }
  