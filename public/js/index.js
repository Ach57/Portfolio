/*const images = [
    'images/codingback.webp',
    'images/codingback.gif',
    'images/codingBackground.webp',
    'images/backcoding.gif'
]*/
const images = [
    'images/christmasSpecial/christmas5.webp',
]

let player;
let lastPlayedIndex = -1;
const songIdList = [
    'QpbQ4I3Eidg', 
    'riP6j7SZ04s',
    'FoTcOhBgV0Q',
    'TdFp3n8KXhw',
    'xcCrguO4le8',
    'Y1PtTAKdixE',
    'x4m5OZl46Ro',
    'rLG8yReHs7k',
    'Qbe3oSfUG00',
    'N6tv11_KMiM',
    '6Rnfycj5ZKc',
    'TTOPBQhrvtQ',
    'nvH8Ary1TS0',
    'jaGb1lVHTcA'
]


const projects = [
    {
        name: "Tree-Structured-Validator",
        language: 'Python',
        description: "A GUI displaying folder structures using algorithms to solve real-world problems.",
        url: 'https://github.com/Ach57/Validator-For-SharePoint'
    },
    {
        name: "ABCCv4-DesktopApplication",
        language: 'Python',
        description: "A desktop app automating spreadsheet updates and generating charts.",
        url: 'https://github.com/Ach57/ABCCv4-DesktopApplication'
    },
    {
        name: "Pet-Adoption-Website",
        language: 'JavaScript, Node.js',
        description: "A user-friendly pet adoption platform for seamless interactions.",
        url: 'https://github.com/Ach57/Pet-Adoption-Website/tree/main'
    },
    {
        name: "JsonDataManagement",
        language: 'Python',
        description: "Analyzes cellular network coverage from JSON data.",
        url: "https://github.com/Ach57/JsonDataManagement"
    },
    {
        name: "Text-Interpreter-App",
        language: 'C',
        description: "Reads and sorts words from a file based on specific criteria.",
        url: "https://github.com/Ach57/Text-Interpreter-App"
    },
    {
        name: "Vocabulary-Control-Center",
        language: 'Java',
        description: "Manages topics and associated vocabulary efficiently.",
        url: "https://github.com/Ach57/Vocabulary-Control-Center"
    },
    {
        name: 'Data-Structure-and-Algorithms',
        language: 'Python',
        description: "Solved Problems showcasting understanding in Data Strcutrue and algorithms",
        url:"https://github.com/Ach57/Data-Structure-and-Algorithms"
    },

    {
        name: 'Mr.-Filmbuff-File-Java',
        language:'Java',
        description:'This Java project highlights skills in File I/O, inheritance, and robust exception handling, including data serialization and deserialization for organized data management.',
        url:'https://github.com/Ach57/Mr.-Filmbuff-File-Java-'

    },
    {
        name:'FunReadings-Library',
        language: 'Java',
        description:'This Java project implements a library system showcasing Object-Oriented Programming principles like polymorphism, inheritance, and encapsulation, with a focus on error handling and user input validation.',
        url: 'https://github.com/Ach57/FunReadings-Library---Library-System-Java-'
    }
];


function loadRandomVideo(){
    do {
        randomIndex = Math.floor(Math.random() * songIdList.length);
    } while (randomIndex === lastPlayedIndex);

    lastPlayedIndex = randomIndex; // Update the last played index

    if (!player) {
        // Create player if it doesn't exist yet
        player = new YT.Player('player', {
            videoId: songIdList[randomIndex],
            playerVars: {
                autoplay: 1,
                mute: 1 // Start muted to allow autoplay
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    } else {
        // Load a new video in the existing player
        player.loadVideoById({
            videoId: songIdList[randomIndex],
            startSeconds: 0
        });
    }
}

function onYouTubeIframeAPIReady() {
    loadRandomVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        loadRandomVideo(); // Load a new random video when the current one finishes
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}
function toggleMute() {
    const volumeIcon = document.getElementById('volumeIcon');
    if (player.isMuted()) {
        player.unMute();
        volumeIcon.innerText = '🔊'; // Volume on icon
    } else {
        player.mute();
        volumeIcon.innerText = '🔇'; // Volume off icon
    }
}



function setRandomBackground() {
    const nav_bar = document.getElementById('nav-bar');
    const randomIndex = Math.floor(Math.random() * images.length);
    
    nav_bar.style.backgroundImage = `url(${images[randomIndex]})`;
    nav_bar.style.backgroundSize = 'cover';
    nav_bar.style.backgroundPosition = 'center'; 
    nav_bar.style.backgroundRepeat = 'repeat'; 
    nav_bar.style.height = '100vh'; 
}


async function  fetchNews() {
    const response = await fetch('/api/news'); // This fetches from your Node backend
    const articles = await response.json();
    displayNews(articles);
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    articles.slice(0, 8).forEach(article => { 
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || ''}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}



function displayRepositories(projects) {
    projects.forEach(project => {
        const projectContainer = document.createElement('div')
        projectContainer.className = 'project-card';
        projectContainer.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>Language:</strong> ${project.language}</p>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank">View on GitHub</a>
        `
        document.getElementById('projects').appendChild(projectContainer);

    });
}



document.addEventListener('DOMContentLoaded',fetchNews);

document.addEventListener('DOMContentLoaded', () => {
    displayRepositories(projects);
});
window.addEventListener('load', () =>{
    setRandomBackground();
    console.log('Window has finished loading'); 
    loadRandomVideo();
});
