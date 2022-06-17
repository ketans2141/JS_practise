// console.log("Hello World")

// let a=50;
// let b=70;
// console.log(a+b);

// let num=2;
// console.log(2**2);

// identify num is positive or negative


// let num=50;
// if(num>0){
//     console.log("Positive")
// }
// else{
//     console.log("Negative");
// }

// cube of a number

// let num=3;
// cube=num**3;
// console.log(cube);



// Find the average


// let a=parseInt(process.argv[2]);
// let b=parseInt(process.argv[3]);
// let c=parseInt(process.argv[4]);

// console.log(a+b);
// console.log(b);
// console.log(c);



// print the natural numbers 

let a=parseInt(process.argv[2]);
for(let i=1;i<=a;i++){
    console.log(i);
}

// print the even numbers 
let b=parseInt(process.argv[3]);
for(let i=1; i<=20;i++){
    if(i%2==0){
    console.log(i);
    }
}

// Print number in reverse order 
let c=parseInt(process.argv[4]);
for(let i=10;i>=1;i--){
    console.log(i);
}

// print natural numbers 

let d=parseInt(process.argv[5]);
while(d<=10){
    console.log(d);
    d++;
}

// print the even numbers 

let e=parseInt(process.argv[6]);
while(e<=20){
    if(e%2==0){
        console.log(e);
    }
}

// Print number in reverse order 

let f=parseInt(process.argv[7]);
while(f>=1){
    console.log(f);
    f--;
}