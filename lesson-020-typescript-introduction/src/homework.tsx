// HOMEWORK PROBLEM 1.1:

let language: string = "TypeScript"
let version: number = 5.4
let isStableRelease: boolean = false

// HOMEWORK PROBLEM 1.2:

let data: any = "text"
data = 42
data = true
data = { key: "value" }

// HOMEWORK PROBLEM 1.3:

let userName: string | null = "Alice"
userName = null

/*====================================================================================================================*/

// HOMEWORK PROBLEM 2.1:

type BookType = {
    title: string
    author: string
    pages: number
    isPublished: boolean
}

const book: BookType = {
    title: "Clean Code",
    author: "Robert Martin",
    pages: 464,
    isPublished: true,
}

// HOMEWORK PROBLEM 2.2:

type CourseType = {
    title: string
    instructor: {
        name: string
        rating: number
    }
    duration: number
    isAvailable: boolean
}

const course: CourseType = {
    title: "JS for beginners",
    instructor: {
        name: "Ivan Ivanov",
        rating: 4.9,
    },
    duration: 52,
    isAvailable: true,
}

/*====================================================================================================================*/

// HOMEWORK PROBLEM 3.1:

const durations: Array<number> = [120, 240, 360]

// HOMEWORK PROBLEM 3.2:

type CarType = {
    brand: string
    model: string
    year: number
    price: number
}

const cars: Array<CarType> = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        price: 25000,
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2023,
        price: 60000,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2024,
        price: 45000,
    },
]

// HOMEWORK PROBLEM 3.3:

type PurchaseType = {
    productName: string
    quantity: number
    store: {
        name: string
        city: string
    }
    totalPrice: number
}

const purchases: Array<PurchaseType> = [
    {
        productName: "Laptop",
        quantity: 1,
        store: {
            name: "TechShop",
            city: "Moscow",
        },
        totalPrice: 75000,
    },
    {
        productName: "Mouse",
        quantity: 2,
        store: {
            name: "ElectroWorld",
            city: "Saint Petersburg",
        },
        totalPrice: 3000,
    },
    {
        productName: "Keyboard",
        quantity: 1,
        store: {
            name: "TechShop",
            city: "Moscow",
        },
        totalPrice: 5000,
    },
]

/*====================================================================================================================*/

// HOMEWORK PROBLEM 4.1:

function calculateArea(width: number, height: number): number {
    return width * height
}

// HOMEWORK PROBLEM 4.2:

function greetUser(name: string): void {
    console.log(`Hello, ${name}!`)
}

// HOMEWORK PROBLEM 4.3:

const getModeMessage = (isStrict: boolean): string => {
    return isStrict ? 'Strict mode on' : 'Strict mode off'
}

// HOMEWORK PROBLEM 4.4:

type User = {
    id: number
    name: string
    email: string
}

function findUserById(userId: number, users: Array<User>): User | undefined {
    return users.find((user) => user.id === userId)
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
]

const result = findUserById(1, users)

/*====================================================================================================================*/

// HOMEWORK PROBLEM 5.1:

type ProductCardProps = {
    title: string
    price: number
    isAvailable: boolean
    description: string
}

// function ProductCard({ title, price, isAvailable, description }: ProductCardProps) {
//     return (
//         <div>
//             <h2>{title}</h2>
//         <p>Price: ${price}</p>
//     <p>Status: {isAvailable ? "In Stock" : "Out of Stock"}</p>
//     <p>{description}</p>
//     </div>
// )
// }

// HOMEWORK PROBLEM 5.2:

type TaskButtonProps = {
    text: string
    isCompleted: boolean
    priority: string
    onStatusChange: (newStatus: boolean) => void
}

// function TaskButton({ text, isCompleted, priority, onStatusChange }: TaskButtonProps) {
//     return (
//         <div>
//             <button onClick={() => onStatusChange(!isCompleted)}>
//                 {isCompleted ? "✓" : "○"} {text}
//             </button>
//             <span>Priority: {priority}</span>
//         </div>
//     )
// }

// HOMEWORK PROBLEM 5.2:

type UserCardProps = {
    name: string
    email: string
    isActive: boolean
    onEdit: (email: string) => void
    onDelete: (email: string) => void
}

// function UserCard({ name, email, isActive, onEdit, onDelete }: UserCardProps) {
//     return (
//         <div>
//             <h3>{name}</h3>
//             <p>Email: {email}</p>
//             <p>Status: {isActive ? "Active" : "Inactive"}</p>
//             <button onClick={() => onEdit(email)}>Edit</button>
//             <button onClick={() => onDelete(email)}>Delete</button>
//         </div>
//     )
// }