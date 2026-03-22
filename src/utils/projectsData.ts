import { ProjectCard } from "../models/projectCard";

export const projects = [
    new ProjectCard(
        "My Mini Travel Guide",
        "A frontend web application integrating three APIs to provide travel insights for any selected country. Users can explore country info (flag, capital, population, language, currency), real-time weather, local time, and activity suggestions. Destination images are dynamically loaded via the Unsplash API, and users can save favorite destinations. The project demonstrates working with asynchronous API calls, combining multiple data sources, and building a dynamic, user-driven interface." 
        + "<br><br>" +
        "- Multiple API integrations including Unsplash for images" +
        "<br><br>" +
        "- Real-time weather, local time, and activity recommendations" +
        "<br><br>" +
        "- Searchable countries with favorites functionality" +
        "<br><br>" +
        "Figma design: " +
        "<a href='https://www.figma.com/community/file/1617580666619115724/mini-travel-guide' target='_blank'>View design</a>",
        ["TypeScript", "API integration", "REST APIs", "Frontend development", "DOM manipulation", "Dynamic UI", "Data merging", "Favourites system", "Figma", "Webdesign", "SCSS", "HTML"],
        "https://mini-travel-guide.netlify.app/",
        "https://github.com/marcuswesterblom/mini-travel-guide.git"
    ),
    new ProjectCard(
        "Webshop",
        "A group project from a Frontend Development course. I was responsible for the full cart and checkout functionality, including state management with localStorage, adding/removing products, and implementing the checkout flow. The project demonstrates building dynamic user interfaces and handling application state using HTML, SCSS, and TypeScript. Visual design was provided as part of the assignment." 
        + "<br><br>" +
        "- Full cart and checkout functionality" +
        "<br><br>" +
        "- State management with localStorage" +
        "<br><br>" +
        "- Dynamic user interface with TypeScript",
        ["TypeScript", "SCSS", "Vite", "HTML", "Agile Project Management", "School project"],
        "https://marcurwesterblom-webshop.netlify.app/",
        "https://github.com/marcuswesterblom/webshop_fed25"
    ),
    new ProjectCard(
        "Portfolio",
        "This project is my personal portfolio website, created to showcase my projects, skills, and experience as a front-end developer. The goal of the project was to design and build a clean, modern, and user-friendly portfolio that clearly presents my work. The design process started in Figma, where I created the layout and visual structure before developing the site. I focused on creating a minimal and clean design, with clear sections and a strong visual hierarchy to make the content easy to navigate." + "<br><br>" + " During development I implemented smooth animations and transitions to create a more engaging and dynamic user experience without overwhelming the interface." + "<br><br>" + "To show the design process and progress, I also included an early design draft alongside the final version. This demonstrates how the project evolved from the initial concept to the finished product." 
        + "<br><br>" 
        + "- Clean and minimal UI design" 
        + "<br><br>" 
        + "- Smooth animations and transitions" 
        + "<br><br>" 
        + "- Responsive layout for different screen sizes" 
        + "<br><br>"
        + "- Clear structure and navigation" 
        + "<br><br>" 
        + "Figma design: " + "<a href='https://www.figma.com/design/pMJHWiCPnVu2Dz5avst3ab/Portfolio?node-id=0-1&p=f&t=gSTWSn9K4eqlMj3F-0' target='_blank'>View design</a>" + "<br>" + "First draft: " + "<a href='https://www.figma.com/design/iKSCcJUScSuyjZlcOYrhcF/Marcus_Westerblom_Portfolio?t=gSTWSn9K4eqlMj3F-0' target='_blank'>View first draft</a>",
        ["Figma", "TypeScript", "SCSS", "Vite", "HTML", "Git/GitHub"],
        "https://marcuswesterblom.netlify.app/",
        "https://github.com/marcuswesterblom/marcus-westerblom-portfolio"
    ),
    new ProjectCard(
        "Todo-list",
        "A frontend application built during the Frontend Developer program. It allows users to manage tasks by adding, completing, and removing todos, with a focus on JavaScript fundamentals and dynamic UI updates." 
        + "<br><br>" +
        "- Add, complete, and remove tasks" +
        "<br><br>" +
        "- Dynamic UI updates" +
        "<br><br>" +
        "- Focus on JavaScript fundamentals",
        ["JavaScript", "SCSS", "Vite", "HTML", "Tailwind", "School project"],
        "https://marcuswesterblom-todolist.netlify.app/",
        "https://github.com/marcuswesterblom/todo_list_fed25"
    )
];