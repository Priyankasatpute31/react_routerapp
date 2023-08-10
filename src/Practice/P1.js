function P1(){
let ob={1:"hj",2:"jghj",3:"vjn",4:"kjk"};
let ob1={1:"hj",2:"jghj",3:"vjn",4:"kjk"};
let ob3={...ob,...ob1};
let ob4=Object.assign(ob1);
console.log(ob3);
console.log(ob4);
}

export default P1;