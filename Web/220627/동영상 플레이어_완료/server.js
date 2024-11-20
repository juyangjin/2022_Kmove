const express = require('express');
const fs = require('fs');
const app = express();

app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/video', (req, res) => {
    fs.readFile(__dirname +"/data/video.json", 'utf8', (err, data) => {
        let videoList = JSON.parse(data);

        
        let page = req.query['page'];        
        let startIdx = (page - 1) *4;
        let endIdx = (page)*4;
        partVideoList = videoList.slice(startIdx, endIdx);

        res.render('video', {"videoList":partVideoList});
    });
    
});


app.get('/ejsTest', (req, res) => {
    let name = 'Hello EJS';
    res.render('test', {"name": name});
})
app.get('/getVideo', (req, res) => {
    fs.readFile(__dirname +"/data/video.json", 'utf8', (err, data) => {
        res.json(JSON.parse(data));
    });
});

app.listen(8080, ()=> console.log('Server running'));
