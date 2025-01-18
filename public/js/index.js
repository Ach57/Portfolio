const porjects = [
    {
        title: "Financial-Market-Simulation",
        description: "Financial Market Simulation using Monte Carlo, Markov Chain and Genetec Algorithm",
        imgSrc: "images/Simulations.jpg",
        url: "https://github.com/Ach57/Financial-Market-Simulation"
    },
    {
        title: "Validator-For-SharePoint",
        description: "A GUI displaying folder structures using algorithms to solve real-world problems.",
        imgSrc:"images/sharepoint.jpeg",
        url: "https://github.com/Ach57/Validator-For-SharePoint"
    },
    {
        title: "ABCCv4-DesktopApplication",
        description: "A desktop app automating spreadsheet updates and generating charts.",
        imgSrc:"images/warehouse.jpeg",
        url: "https://github.com/Ach57/ABCCv4-DesktopApplication"
    },

    {
        title: "Task-Management-System",
        description: "A role-based task management platform with real-time updates.",
        imgSrc: "images/warehouse.jpeg",
        url: "https://github.com/Ach57/Warehouse-Management-System"
    },

    {
        title: "Pet-Adoption-Website",
        description: "A user-friendly pet adoption platform for seamless interactions.",
        imgSrc:  "images/petadoption.png",
        url: 'https://github.com/Ach57/Pet-Adoption-Website/tree/main'
    },

    {
        title: "JsonDataManagement",
        description: "Analyzes cellular network coverage from JSON data.",
        imgSrc: "images/cellcover.png",
        url: "https://github.com/Ach57/JsonDataManagement"
    },

    {
        title: "Data-Structure-and-Algorithms",
        description : "Solved Problems showcasting understanding in Data Strcutrue and algorithms",
        imgSrc: "images/dataStr.jpeg",
        url: "https://github.com/Ach57/Data-Structure-and-Algorithms"
    },
    {
        title :"Text-Interpreter-App",
        description: "Reads and sorts words from a file based on specific criteria.",
        imgSrc:  "images/C.png",
        url: "https://github.com/Ach57/Text-Interpreter-App"
    }

    
]

const projectsContainer = document.getElementById("projects-container");

porjects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "col-md-4 mb-4";
  projectCard.innerHTML = `
    <div class="card">
      <img src="${project.imgSrc}" class="card-img-top" alt="${project.title}">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <a href="${project.url}" class="btn btn-custom" target = _blank>View Project</a>
      </div>
    </div>
  `;
  projectsContainer.appendChild(projectCard);
});


let lastScrollTop = 0

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide navbar (you can adjust this value based on navbar height)
      } else {
        navbar.style.top = "0"; // Show navbar
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;




});

