let username: string = "Anna";
let age: number = 25;
let isAdmin: boolean = true;
let skills: string[] = ["React", "TypeScript", "CSS"];
let role: "admin" | "user" | "guest" = "admin";

function sum(a: number, b: number): number {
  return a + b;
}
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
interface User {
  id: number;
  name: string;
  email?: string;
}
const result = sum(10, 15);
const firstSkill = getFirstElement(skills);
const user: User = { id: 1, name: "Anna", email: "anna@example.com" };

console.log("Username:", username);
console.log("Age:", age);
console.log("Is Admin:", isAdmin);
console.log("Skills:", skills);
console.log("Role:", role);
console.log("Sum:", result);
console.log("First skill:", firstSkill);
console.log("User:", user);

// task 2

type PartialUser = Partial<User>;
const partialUser: PartialUser = { name: "Anna" };

async function fetchData<T>(url: string): Promise<T> {
  console.log(`Fetching from: ${url}`);
  const mockData = { message: "Hi" };

  return new Promise((res) => {
    setTimeout(() => {
      res(mockData as T);
    }, 1000);
  });
}
fetchData<User>("https://example.com").then((data) =>
  console.log("Fetched data:", data)
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
      const _exhaustiveCheck: never = msg;
      return _exhaustiveCheck;
  }
}
const messages: Message[] = [
  { type: "text", content: "Привіт!" },
  { type: "image", url: "https://example.com/photo.jpg" },
  { type: "video", url: "https://example.com/video.mp4", duration: 120 },
];

messages.forEach((msg) => console.log(renderMessage(msg)));

type ApiResponse<T> = {
    status: "success" | "error"
    data: T | null
    error?: string
}
type Product = {
    id: number;
    title: string;
    price: number;
}
const userRes: ApiResponse<User> = {
    status: "success",
    data: { id: 1, name: "Anna" },
}
const productRes: ApiResponse<Product> = {
    status: "error",
    data: null,
    error: "Product not found",
}
console.log("User:", userRes)
console.log("Product:", productRes)