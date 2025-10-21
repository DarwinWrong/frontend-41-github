//!1.1
let userName: string = 'Kolia';
let age:number = 20
let isAdmin:boolean = true
let skills:string[] = ["TypeScript","React","Node.js"]
let role: 'admin' | "user" | "guest" = "admin"
//!1.2
function sum(a:number,b:number): number{
    return a+b
}
//!1.3
function getFirstElement<T>(arr: T[]): T{
    return arr[0]
}
//!1.4
interface User{
    id: number
    name: string
    email?: string
}
//!2.1
type PartiaLUser = Partial<User>
//!2.2
async function fetchData<T>(url:string): Promise<T> {
    const user={
        mesage: 'HI'
    }
    return await new Promise((res)=>{
        setTimeout(()=>{
            res(user as T)
        },1000)
    })
}
//!2.3
type Message =
  | { type: "text"; content: string }
  | { type: "image"; url: string }
  | { type: "video"; url: string; duration: number };

function renderMessage(msg: Message): string{
    switch(msg.type){
        case "text":
            return `text ${msg.content}`;
        case "image":
            return `img ${msg.url}`;
        case "video":
            return `video ${msg.url} (${msg.duration})`
    }
}
//!2.4
type ApiResponse<T> = {
  status: "success" | "error";
  data: T | null;
  error?: string;
}

type Product = {
    id: number
    title: string
    price: number
}

const userRes: ApiResponse<User> = {
    status: 'success',
    data: {id:1, name: 'Kolia'}
}
const productRes: ApiResponse<Product> = {
    status:'error',
    data:null,
    error: "not found"
}