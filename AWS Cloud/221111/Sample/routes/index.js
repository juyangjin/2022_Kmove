var express = require('express');
var router = express.Router();

const fs = require('fs').promises;

/* localhost:3000 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 전체 경로 localhost:3000/users/join
router.get('/users/join', function(req, res) {
  // 회원가입 페이지를 보여준다.
  console.log("이쪽으로 안들어오니");
  res.render('join.ejs');
});

router.get('/users/list', async (req,res) =>{
  let user_list = JSON.parse( await fs.readFile('user_list.txt'));
  res.json(user_list);
});

router.get('/users/leave', async (req, res) => {
res.render('leave.ejs');
});

router.get('/users/login', async (req, res) =>{
res.render('login.ejs');  
});

router.post('/users/join', async (req, res) => {

  res.render('join-fail', {message:"아이디가 중복됩니다."}); //아이디 중복 여부 검사
  return;

  console.log(req.body);

  const input_id = req.body.id;
  const input_password = req.body.password;

  let user_info = { id : input_id , password : input_password };

  try {
    // 유저 리스트 txt 파일이 있을때는 기존에 기록된 유저 정보를 읽어온다.
    let data = await fs.readFile('user_list.txt');
    // 유저 리스트 txt 파일을 배열로 변환
    let text_user_list = JSON.parse(data);
    let overlap_id = false;

    /**
     * 이곳에서 회원가입 중복 체크
     * 아이디가 중복 된다면 overlap_id 값을 true로 변경
     */

    if (overlap_id) {
      return [false, "아이디가 중복됩니다."];
    }

    text_user_list.push(user_info);
    fs.writeFile('user_list.txt', JSON.stringify(text_user_list, null, 2));

  } catch (e) {

    console.log(e);
    // 유저 리스트 텍스트 파일이 없어서 읽을수 없을경우 catch 로 들어옴
    // 빈 유저 리스트 배열 생성
    var user_list = [];
    // 유저 정보 추가
    user_list.push(user_info);
    // user_list 배열을 텍스트 형태로 변환해서 user_list.txt 파일에 저장
    fs.writeFile('user_list.txt', JSON.stringify(user_list, null, 2));
  }

  res.render('index.ejs', { title: 'Express'});
});


module.exports = router;
