//1. 서버 사용을 위해 http 모듈을 http 변수에 담기
var http = require('http');


//2. http 모듈로 서버를 생성
var server = http.createServer(function (req, res) {

    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('Node.js');
    res.end('안녕하세요:) Luna입니다');
});

//3.listen 함수로 8080 포트를 가진 서버를 실행, 서버 실행 시 콘솔창에서 Server is running...'로그 출력
server.listen(8080,function(){
    console.log('Server is running...');
});

