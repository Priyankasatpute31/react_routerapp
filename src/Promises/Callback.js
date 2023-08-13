/*  Pending
Resolve
Reject 
A function to be executed by the constructor ,during the process of constructing the promiceObj.
the executor is custom code that ties an outcome to a promise you the programmer write the executor.
*/

const GetRollNo=()=>{
    setTimeout(()=>{
        console.log("API getting roll no");
        let roll_no=[1,2,3,4,5,6];
        console.log(roll_no);

        setTimeout((rollno)=>{
            const biodata={
                name:"priya",
                age:"26"
            }
            console.log(`My roll no is ${rollno}.My name is ${biodata.name} and i am ${biodata.age} years old`);

            setTimeout((name)=>{biodata.gender='Female'
        console.log(`My roll no is ${rollno}.My name is ${biodata.name} and i am ${biodata.age} years old. I am an alpha ${biodata.gender}`);
    },2000,biodata.name);
        },2000,roll_no[1]);
 
    },2000)
}

GetRollNo();


export default GetRollNo;