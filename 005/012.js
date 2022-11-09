// default가 없을 때!
// import sum from './011.js'
// console.log(sum(10,20))  / /Erro


// default가 없을 경우 위처럼하면 error가 나옴


// 아래와 같이 {}를 넣어줘야 실행 가능
import {sum} from './011.js'

console.log(sum(10,20)) // 30