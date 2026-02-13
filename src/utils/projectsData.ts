import { ProjectCard } from "../models/projectCard";

export const projects = [
    new ProjectCard(
        "My Mini Travel Guide",
        "A frontend web application that integrates data from three different APIs to provide travel insights for a selected country. Users can search for a country to view general information (flag, capital, population, language, currency), real-time weather and local time, as well as activity recommendations based on current conditions. Country images are fetched dynamically, and users can save destinations to a favorites list. The project demonstrates working with asynchronous API calls, combining multiple data sources, and building dynamic, user-driven interfaces. Designed in Figma: " +
"<a href='https://www.figma.com/design/n7uY9FVuk8MsvMnHYGGpEp/Mini-travel-guide?node-id=0-1&t=C0j9iUOmdmBVZpHc-1' target='_blank'>View design</a>",
        ["TypeScript", "API integration", "REST APIs", "Frontend development", "DOM manipulation", "Dynamic UI", "Data merging", "Favourites system", "Figma", "Webdesign", "SCSS", "HTML"],
        "",
        "https://github.com/marcuswesterblom/mini-travel-guide.git"
    ),
    new ProjectCard(
        "Recipe API",
        "A fullstack web application built with TypeScript, Node.js, Express, and MongoDB. Users can create, view, update, and delete recipes, including ingredients, categories, cooking time, and servings. The dynamic frontend allows easy recipe submission, demonstrating frontend-backend integration and CRUD functionality. This project highlights skills in REST API development, data modeling with MongoDB, and building interactive, user-friendly interfaces.",
        ["TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "REST API", "CRUD", "Frontend-Backend Integration"],
        "",
        "https://github.com/marcuswesterblom/recipe-api.git"
    ),
    new ProjectCard(
        "Webshop",
        "A group project built as part of a Frontend Development course. I was responsible for the entire cart and checkout functionality, including state management with localStorage, adding and removing products, and implementing the checkout flow using HTML, SCSS, and TypeScript. The visual design was provided as part of the assignment.",
        ["TypeScript", "SCSS", "Vite", "HTML", "Agile Project Management", "School project"],
        "https://marcurwesterblom-webshop.netlify.app/",
        "https://github.com/marcuswesterblom/webshop_fed25"
    ),
    new ProjectCard(
        "Todo-list",
        "A frontend application built during the Frontend Developer program. It allows users to manage tasks by adding, completing, and removing todos, with a focus on JavaScript fundamentals and dynamic UI updates.",
        ["JavaScript", "SCSS", "Vite", "HTML", "Tailwind", "School project"],
        "https://marcuswesterblom-todolist.netlify.app/",
        "https://github.com/marcuswesterblom/todo_list_fed25"
    )
];