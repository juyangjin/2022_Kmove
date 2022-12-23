// const fs = require('fs').promises;
// //node.js 모듈시스템은 순환참조를 허용
// async function ReadFile() {
//     let data = await fs.readFile('.toy.txt')
//     console.log('1번',data.toString());
//     data = await fs.writeFile('.toy.txt')
//     console.log('2번',data.toString());
//     data = await fs.writeFile('.toy .txt')
//     console.log('3번',data.toString());
// }


// ReadFile();

// class userInfo{ //클래스 선언
//     name "hi";
//     age = 22;
//     game_money = 0;
//     constructor(name, age) { //클래스가 생성될 때 호출되는 함수 인자 값이 없어도 됨
//         this.name = name;//name
//         this.age = age;
//         this.game_money = 0;
//     };

//     DrawName() {
//         console.log()
//     }
// }

//현재 경로에서 node_modules 폴더에 있는 module.js 모듈을 가져온다
// const test_module = require('./node_modules/modules');

// test_module.BasicFuncation("기본함수");
// test_module.NoNamedFuncation("무기명 함수");
// test_module.NoNamedRamda("무기명 람다식 함수");
// test_module.NoNamedFuncation("무기명 람다식 함수2");

//index.js
const calculator = require('./node_modules/calculator');

let result = calculator.Calcululator("-", 6,3);

console.log(result)
// let result = calculator.Calculator("-", 6,3);
// console.log(result);
// calculator.Calcululator("+",1,2);

// let result_add = calculator.Calculator("+", 1, 2);
// console.log(result_add); //결과 3
// let result_sub = calculator.Calculator("-'", 6, 2);
// console.log(result_sub); //결과 5