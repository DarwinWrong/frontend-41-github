
let username: string = "Andrii";
let age: number = 22;
let isAdmin: boolean = false;
let skills: string[] = ["TypeScript", "React", "Node.js"];
let role: "admin" | "user" | "guest" = "user";

console.log("User Info:", { username, age, isAdmin, skills, role });

function sum(a: number, b: number): number {
  return a + b;
}

console.log("Sum(3, 5) =", sum(3, 5));

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstSkill = getFirstElement(skills);
console.log("First skill:", firstSkill);

interface User {
  id: number;
  name: string;
  email?: string; 
}

const user1: User = { id: 1, name: "Oksana", email: "oksana@example.com" };
const user2: User = { id: 2, name: "Taras" };
console.log("Users:", user1, user2);

type PartialUser = Partial<User>;

const partialUser: PartialUser = { name: "Partial Example" };
console.log("Partial User:", partialUser);

async function fetchData<T>(url: string): Promise<T> {
  console.log(`Fetching data from ${url}...`);
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve({} as T);
    }, 1000);
  });
}

fetchData<User>("https://api.example.com/user").then((data) =>
  console.log("Fetched data (User):", data)
);

type Message =
  | { type: "text"; content: string }
  | { type: "image"; url: string }
  | { type: "video"; url: string; duration: number };

function renderMessage(msg: Message): string {
  switch (msg.type) {
    case "text":
      return `Text: ${msg.content}`;
    case "image":
      return `Image: ${msg.url}`;
    case "video":
      return `Video: ${msg.url} (${msg.duration}s)`;
    default:
      return "Unknown message";
  }
}

const messages: Message[] = [
  { type: "text", content: "Привіт!" },
  { type: "image", url: "image.png" },
  { type: "video", url: "video.mp4", duration: 42 },
];

messages.forEach((m) => console.log(renderMessage(m)));


type ApiResponse<T> = {
  status: "success" | "error";
  data: T | null;
  error?: string;
};

const userResponse: ApiResponse<User> = {
  status: "success",
  data: { id: 1, name: "Oksana", email: "oksana@example.com" },
};

interface Product {
  id: number;
  title: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  status: "error",
  data: null,
  error: "Product not found",
};

console.log("User API Response:", userResponse);
console.log("Product API Response:", productResponse);
