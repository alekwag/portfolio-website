
export interface Project {
  slug: string
  number: string
  title: string
  category: string
  technologies: string[]
  image: string
  overview: string
  contribution: string[]
  challenges: string[]
  github?: string
}

export const projects: Project[] = [
  {
    slug: "horror-game",
    number: "01",
    title: "3D FPS Horror Game",
    category: "GAME DEVELOPMENT",
    technologies: ["Unity", "C#", "ShaderLab", "Git"],
    image: "/images/horror-game.png",
    overview:
      "An independently developed first-person horror game built in Unity, exploring real-time 3D development, custom shaders and visual effects.",
    contribution: [
      "Developing the game independently in Unity.",
      "Implementing custom shaders and visual effects.",
      "Managing development tasks and workflows using Agile principles.",
      "Using GitHub for version control."
    ],
    challenges: [
      "Developing custom visual effects and shader behaviour.",
      "Managing the development workflow and project structure.",
      "Iterating on the game's visual presentation."
    ]
  },
  {
    slug: "recipe-website",
    number: "02",
    title: "Recipe Website",
    category: "WEB DEVELOPMENT",
    technologies: ["Python", "Flask", "SQLite", "Jinja2", "HTML", "CSS"],
    image: "/images/recipe-website.png",
    overview:
      "A full-stack recipe platform supporting over 10,000 recipes, with search, reviews, favourites and database functionality.",
    contribution: [
      "Worked on backend routing and application functionality.",
      "Used Flask and SQLite to support the application's backend.",
      "Implemented database functionality using an ORM.",
      "Collaborated with team members through testing, debugging and Agile workflows."
    ],
    challenges: [
      "Connecting frontend functionality with backend routes.",
      "Managing recipe data and database interactions.",
      "Testing and debugging application functionality."
    ]
  },
  {
    slug: "topdown-game",
    number: "03",
    title: "2D Top-Down Game",
    category: "GAME DEVELOPMENT",
    technologies: ["Python", "Game Development", "GitHub"],
    image: "/images/topdown-game.png",
    overview:
      "A 2D top-down game developed as part of a collection of game development projects.",
    contribution: [
      "Contributed to the development of a 2D top-down game.",
      "Worked with Python to implement game functionality.",
      "Used collaborative development and version control workflows."
    ],
    challenges: [
      "Implementing and testing gameplay functionality.",
      "Working within a collaborative development workflow."
    ]
  },
  {
    slug: "platformer",
    number: "04",
    title: "2D Platformer",
    category: "GAME DEVELOPMENT",
    technologies: ["Python", "GLSL", "GitHub", "Agile"],
    image: "/images/platformer.png",
    overview:
      "A 2D platformer project involving gameplay development and graphical shader work.",
    contribution: [
      "Contributed to the development of a 2D platformer.",
      "Worked with Python and GLSL.",
      "Collaborated through Agile workflows and version control."
    ],
    challenges: [
      "Developing gameplay systems.",
      "Working with GLSL shaders.",
      "Collaborating on development tasks."
    ]
  },
  {
    slug: "saifi-swimwear",
    number: "05",
    title: "SAIFI Swimwear",
    category: "CAPSTONE PROJECT",
    technologies: ["Python", "Flask", "SQLAlchemy", "SQLite", "Stripe"],
    image: "/images/saifi-swimwear.png",
    overview:
      "A team-developed e-commerce platform for SAIFI Swimwear, built using Flask. The project involved backend architecture, database management and payment integration.",
    contribution: [
      "Worked on backend development using Python and Flask.",
      "Used modular Flask blueprints to organise application functionality.",
      "Worked with SQLAlchemy ORM and the repository layer.",
      "Integrated Stripe Checkout for payment processing."
    ],
    challenges: [
      "Structuring backend functionality across modular components.",
      "Connecting application routes with database operations.",
      "Integrating the Stripe Checkout payment workflow."
    ]
  }
]
