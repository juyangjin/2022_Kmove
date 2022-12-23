//


// let user_info = {
//     name:"길동",
//     gender:"남",
//     age:19,
//     game_score: { //중첩 객체 생성
//         win_count:10,
//         loserr_count:10
//     },

//     showlog(){} //그러나 이 안에 메소드를 넣게되면 복사할 때 함수 부분은 복사되지 않음.
// }; // 객체 리더럴 방식으로 생성

// let user_kim = JSON.parse(JSON.stringify(user_info)); //대표 객체는 깊은 복사, 하위 객체도 깊은 복사
// user_kim.name = "김";
// user_kim.gender = "남";
// user_kim.age = 20;
// user_kim.game_score.loserr_count = 20;
// user_kim.game_score.win_count = 20;

// //객체를 문자열로 변환(이 때 객체의 keydhk value값이 모두 문자열변환되어 깊은복사)했다가 다시 json 오브젝트 형태로 변환(가장느림) 
// let user_hong = JSON.parse(JSON.stringify(user_info)); //대표 객체는 깊은 복사, 하위 객체도 깊은 복사
// user_hong.name = "홍";
// user_hong.gender = "여";
// user_hong.age = 30;
// user_hong.game_score.loserr_count = 30;
// user_hong.game_score.win_count = 30;

// console.log(user_info); 
// console.log(user_kim);
// console.log(user_hong);

// let user_info_text = '{"name":"길동","gender":"남","age":19,"game_score":{"win_count":10,"losee_count":10}}';
// let user_info_object = JSON.parse(user_info_text); //obj를 json 형태의 string 값으로 변경,

// console.log(typeof user_info_text); //string
// console.log(user_info_text); // '{"name":"길동","gender":"남","age":19,"game_score":{"win_count":10,"losee_count":10}}'

// user_info_object.name = "길순"; //name 프로퍼티에 접근가능하도록 문자열 > 객체형으로 값을 길순으로 변경
// user_info_object.gender = "여"; //위와 같음

// console.log(typeof user_info_object); //obj
// console.log(user_info_object); //'{"name":"길순","gender":"여","age":19,"game_score":{"win_count":10,"losee_count":10}}

//------------
// //나잇값 추가하기
// let user_info_text = '{"name":"홍길동","brith_year":"1950"}';

// let year = 2022;

// let user_info_object  = JSON.parse(user_info_text);

// user_info_object.brith_year = year - user_info_object.brith_year + 1;

// console.log(user_info_object); 

//-------------

// //js일 때, 배열이 문자열일 때 인덱스값 증가하는 방법
// DaysDraw();

// function DaysDraw() {
//     let diary = { date: "날씨", title: "제목", body: "내용", day: "요일"};
//     let days = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];
//     let diarys = [];
//     let index = 5;

//     for (var i = 0; i < 365; i++){
//         diarys[i] = JSON.parse(JSON.stringify(diary));
//         diarys[i].date = (i + 1) + "일";

//         // if(index > 6){ //비교적 평범한 반복방법
//         //     index = 0;
//         // }
//         // diarys[i].day = days[index];
//         // index++; 

//         diarys[i].day = days[( i + 5 ) % 7]; //조금 더 간단한 풀이방법, 수학 공부를 할 필요가 있음.
//         console.log(diarys[i]);
//     }

//     console.log(diarys[100-1]);
//     console.log(diarys[365-1]);
// };

// //------------
// //콜백함수

// //함수에 인수 값으로 함수를 넣게 되면 인자 값으로 받은 함수를 실행시킬 수 있음.

// function Massage(callback,massage){
//     //인자 값으로 받은 callback을 실행, 여기선 test 함수
//      callback(massage);
// }

// function Test(massage){
//     //인자값으로 받은 massage 변수 
//     console.log(massage);
// }

// Massage (function(massage) {
//     console.log(massage);
// } , "반갑습니다.");

// //람다식, 무기명 함수, 위와 같은 결과값이 나오게 된다.
// Massage((massage) => {
//     console.log(massage);
// }, "반갑습니다.");

//------------
// //콜백함수가 3초의 시간을 보장하지만, 그것이 정확히 3초 후에 실행되는 것이 아니다.
// //무기명 함수를 사용하면 비교적 짧은 코드로 콜백함수를 쓸 수 있기 때문에 자주 쓰인다.
// setTimeout(() => { 
//     console.log('todo: First work!');
// },3000); //3초 뒤 실행으로 설정 

// setTimeout(() => {
//     console.log('todo: Second work!');
// },4000); //4초 뒤 실행으로 설정


// //-------------
// //같은 코드이지만 조금 더 비효율적인, 자주 안 쓰이는 코드 예시
// function TimeOutrun1(messa1, messa2){
//     console.log('todo:First work!');
// }

// function TimeOutrun2(messa1, messa2){
//     console.log('todo:Second work!');
// }

//  setTimeout(TimeOutrun1,3000); //3초 후 실행
//  setTimeout(TimeOutrun2,2000); //2초 후 실행
// //--------------

//현재 초와 
// setTimeout(() => { //콜백 큐에 등록 3초 후 실행 등록
//     setTimeout(() => { //콜백 큐에서 해당 함수가 시작되면서 다시 5초 후 실행.
//         console.log('todo:Second work! 초 = ' + new Date().getSeconds());
//     },5000);
//     console.log('todo:First work! 초 = ' + new Date().getSeconds());

// },3000);
// console.log("현재초" + new Date().getSeconds());


//-----------
//txt 파일 생성하기
const fs = require('fs');

fs.writeFileSync('./toy.txt',"진주양");
//동기식 파일생성의 예제인데, 이렇게 생성하면 시간이 5~10초 딜레이 되면서 
//다른 유저가 서버를 이용할 수 없게 되기 때문에 실무에서는 절대 사용하지 말아야 한다.
//Sync를 걸어버리면 그 시간동안 서버를 쓸 수 없다.
//-----------
const fs = require('fs');

let data = fs.readFileSync('.toy.txt');
console.log('첫번째 문서', data.toString());
data = fs.readFileSync('./toy.txt');
console.log('두번째 문서', data.toString());
data = fs.readFileSync('./toy.txt');
console.log('세번째 문서', data.toString());
