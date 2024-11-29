# Portfolio

This is a simple Node.js and Express.js web application with an EJS templating engine for rendering dynamic pages and a RESTful API to fetch and display top news headlines using the News API.

---

## Features

- **Dynamic Routing**: 
  - Renders different pages using EJS templates: `index`, `about`, `projects`, `skills`, and `contact`.
- **Static Files**: 
  - Serves static files from the `public` directory for CSS, JavaScript, or image assets.
- **News API Integration**: 
  - Fetches top US news headlines using the [News API](https://newsapi.org/) and provides them via the `/api/news` route.
- **Environment Configuration**: 
  - Uses `dotenv` to manage environment variables securely.

---

## Requirements

- **Node.js**: v14 or later
- **npm**: v6 or later
- A [News API Key](https://newsapi.org/) for fetching top headlines.

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies:
    ```bash
    npm install
3. **Set up environment variables:
    ```bash
    NEWS_API_KEY=your_api_key_here

## Directory Structure
.
├── public/
│   ├── css/         # Static CSS files
│   ├── js/          # Static JavaScript files
│   ├── images/      # Static image assets
├── views/
│   ├── index.ejs    # Homepage
│   ├── about.ejs    # About page
│   ├── projects.ejs # Projects page
│   ├── skills.ejs   # Skills page
│   ├── contact.ejs  # Contact page
├── .env             # Environment variables
├── package.json     # Dependencies and scripts
├── server.js        # Main server script

## Updates:
  Enhanced Page Styling 28th November 2024

   
