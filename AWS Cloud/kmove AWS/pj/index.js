//2022/10/07
let user_name = "고길동\n";
let user_address = "천안시";
let user_info = user_name + user_address;
console.log(user_info);

let total_conut = 60;
let count = 10;
let result = 0;

//js에서는 몫을 구해야 할 때 parseInt형변환이 필요함, 안하면 실수형으로 출력됨.
console.log(parseInt(5/3));

//배열사용시에 let 배열명 = []; 으로 생성, 출력 시에는 배열명[인덱스]로 출력
//배열명.splice(0,2); //0번째 요소부터 2개를 삭제
//배열명.pop(); //배열 마지막요소 삭제
//배열명.shift(); //배열 첫번째요소 삭제
//delete 배열명[인덱스];로도 값을 지울 수 있지만 자동으로 인덱스가 당겨지는 splice와 다르다.
//delete는 해당 인덱스만 지워지는 특징이 있다. 그래서 자주 사용 안한다.

let arr =["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];
//arr.splice(4,1); //4번째 배열부터 1개를 지움. 즉, 인덱스4값이 지워짐
console.log(arr);

let year = 2022;//현재년도
if(year < 2022) {
    console.log("숫자를 조금 더 올려보세요");
} else if (year > 2022) {
    console.log("숫자를 조금 내려보세요");
} else {
    console.log("맞췄습니다!\n");   
}

let first = 2;

for(let i=2; i<=9; i++){
    for (let j=1; j<=9; j++){
        console.log(i + "X" + j + "=" + i * j);
    }
    
}


//let star = "";

// for(var i=0; i<5; i++) {//5번 반복
//     for(var j=0; j<5; j++){
//         star += "*";
//     }
//     console.log(star);
//     star = "";
// }

// //별 응용 혼자 해보기

// for(var i=0; i<5; i++){
//     for(var j=0; j<=i; j++){
//         star+="*";
//     }
// }


