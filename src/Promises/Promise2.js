//executor
//promise produce
const Pobj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5,6];
        resolve(roll_no);
        reject("error while communicating");
//resolveFunc(value)//call on fullfilled
//rejectFunc(reason)//call on rejected
    },2000);
})
/*The Method promise.then(),promise.catch(), and promise.finally() 
are used to associate further action with a promise that becomes setteled*/
//promise Consume


const getbiodata=(indexData)=>{
    return new Promise((resolve,reject)=>
    setTimeout((indexData)=>{
      let biodata={
             name:"prīya",
             age:"26"
      }
      resolve(`My roll no is ${indexData}.My name is ${biodata.name} and i am ${biodata.age} years old.`);
    },2000,indexData)
    )
}
Pobj1.then((rollno)=>{
    console.log(rollno);
   return getbiodata(rollno[1]);
    }).then((anything)=>{
    console.log(anything);
}).catch((error)=>{
    console.log(error);
})

export default Pobj1;