import a from './015.js'

a();  // d
// a함수 실행시켰는데 d가 나옴!!
// 이유 : default가 d에만 있어서 d가 우선적으로 확인됨


// a를 나오게 하고 싶으면 아래와 같이 {}로 씌어줘야함
// 왜냐? a b c는 default가 없기 때문에!
import {a, b, c} from './015.js'

a() // a