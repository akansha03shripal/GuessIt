const max=prompt("enter the value of max");
let random=Math.floor(Math.random()*max)+1;
console.log("random value=",random);
let guess=prompt("guess the random value");
while(true){
    if(guess=="quit"){
        console.log("quit", random);
        break;
    }
    if(guess==random){
        console.log("congrates!! you guess right ", random);
        break;
    }
    if(guess>random){
        guess=prompt("enter lesser value");
    }
    else{
        guess=prompt("enter greater value");
    }
}




// const obj={car:{
//     name:"jguar",
//     model:3246,
//     color:"black"

// }}
// obj.car;
// obj.car.name;


// function returnSum(n){
//     let sum=0;
//     for(let i=n;i>=1;i--){
//        sum=sum+i;
  
//      }
//         return sum;
// }

// console.log(returnSum(10));



// let arr=["akansha","aastha","vaishnavi","Aswariya"];
// function concate(arr){
//     let contc='';
//     for(let i=0;i<arr.length;i++){
// contc+=arr[i];
//     }
//     return contc;
// }
//  console.log(concate(arr));


// function printTable(n){
    
//     for(let i=1;i<=10;i++){
//  console.log(n,"*",i,"=",n*i);
//     }
// }
// printTable(8);



// const sum=function(a,b){return a+b}
//  console.log(sum(2,8));
// const multi=(a,b)=>(a*b);

// function oddEven(request){
//     if(request=="odd"){
//         let odd=function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(request=="even"){
//         let even=function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("wrong input");
//     }
//     let request="odd";
// }

// const calculator={
//     add:function(a,b){
//         a+b
//     },
//     sub: function(a,b){
//         a-b
//     },
//     multi: function(a,b){
//         a*b;
//     }
// }

// console.log("Hi there!");

// setTimeOut( ()=>{
//     console.log("IITG ");
// },8000)
// console.log("welcome to");


// setInterval(()=>{})