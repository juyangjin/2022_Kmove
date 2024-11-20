const express = require('express'); // Express 모듈
const fs = require('fs');
const app = express();              // Express 객체

app.use(express.json());
app.use(express.urlencoded({extends:true}));

app.use(express.static('public'));  // Public 폴더는 정적 파일

app.get('/getData', function(req, res) {   // 127.0.0.1:8080/ 접속 요청 처리
    let filePath = __dirname + '/./data/article.json';
    fs.readFile(filePath, 'utf8', function(err, data) {
        res.send(data);
    });
});
app.get('/updateData', function(req, res) {   // 127.0.0.1:8080/about
    res.send('<h1>updateData</h1>');      // ABOUT 출력
});
app.post('/updateData', function(req, res){
    // POST 방식으로 /updateData로 전달된 입력 처리
    let filePath = __dirname + '/./data/article.json';
    fs.readFile(filePath, 'utf8', function(err, data) {
        let articleList = JSON.parse(data);
        if (req.body.method=='add') {
            articleList.push(req.body.data)
        }
        /* else if(req.body.method=='modify') {
            for (i in articleList) {
                if (articleList[i].id == req.body.data.id) {
                    articleList[i] = req.body.data;
                    break;
                }
            }
        }*/
        fs.writeFileSync(filePath, JSON.stringify(articleList), 'utf8');
        res.send({"result":"success"});
    });    
    console.log(req.body);
    
});
app.listen(8080, function(){
    console.log('Server Runnning');
});

