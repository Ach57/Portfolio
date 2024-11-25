import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')

// Route to render an EJS file
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/about', (req, res)=>{
    res.render('about');

})

app.get('/projects', (req, res)=>{
    res.render('project');
})

app.get('/skill', (req, res)=>{
    res.render('skills');
})

app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.get('/api/news', async(req,res)=>{

    try{

        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
        const data = await response.json();
        res.json(data.articles); // Send only the articles to the frontend

    }catch (error){
        console.error(error);
        res.status(500).send('Error fetching news');
    }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});