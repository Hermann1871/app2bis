import { User } from "./User";

export const users: User[] = [
    {
        name: "John",
        surname: "Doe",
        imageUrl: "https://picsum.photos/seed/1/600",
        openToWork: true,
        currentWork: "Software Engineer"
    },
    {
        name: "Alice",
        surname: "Smith",
        imageUrl: "https://picsum.photos/seed/2/600",
        openToWork: false,
        currentWork: "Data Analyst"
    },
    {
        name: "Bob",
        surname: "Johnson",
        imageUrl: "https://picsum.photos/seed/3/600",
        openToWork: true,
        currentWork: "Project Manager"
    },
    {
        name: "Emily",
        surname: "Brown",
        imageUrl: "https://example.com/emilybrown.jpg",
        openToWork: true,
        currentWork: "Marketing Specialist"
    },
    {
        name: "Michael",
        surname: "Davis",
        imageUrl: "https://example.com/michaeldavis.jpg",
        openToWork: false,
        currentWork: "Accountant"
    },
    {
        name: "Emma",
        surname: "Wilson",
        imageUrl: "https://example.com/emmawilson.jpg",
        openToWork: true,
        currentWork: "Graphic Designer"
    },
    {
        name: "David",
        surname: "Martinez",
        imageUrl: "https://example.com/davidmartinez.jpg",
        openToWork: true,
        currentWork: "Software Developer"
    },
    {
        name: "Sophia",
        surname: "Garcia",
        imageUrl: "https://example.com/sophiagarcia.jpg",
        openToWork: false,
        currentWork: "Human Resources Manager"
    },
    {
        name: "James",
        surname: "Taylor",
        imageUrl: "https://example.com/jamestaylor.jpg",
        openToWork: true,
        currentWork: "Financial Analyst"
    },
    {
        name: "Olivia",
        surname: "Anderson",
        imageUrl: "https://example.com/oliviaanderson.jpg",
        openToWork: true,
        currentWork: "Web Developer"
    }
];

users.map((v, i) => {
    v.imageUrl = `https://picsum.photos/seed/${i + 1}/600`
    return v
})




