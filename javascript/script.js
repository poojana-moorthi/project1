var a="10";
var b=10;
console.log(a==b);
 console.log(a===b);
 console.log(a!=b);
 console.log(a!==b);
console.log(a+b)
console.log(typeof a);
console.log(typeof b);
a=true
console.log(typeof a );
var c =null;
console.log(typeof c);
var num=2;
var result=(num%2===0)? "even":"odd"
console.log(result);
var mark=50;
var Result=(mark>=80)? "o":(mark>=65? "A+":(mark>=35)? "p" :"F")
console.log(Result);
if(mark>=90)
{
    console.log("O");
}
else if(mark>=65 && mark>90)
{
    console.log("A");
}
else if(mark>=35 && mark<65)
{
    console.log("P");
}
else
{
    console.log("F");
}
 var i=1;
for(;i<=10;i)
{
    console.log(i);
    i++
}
while(i<=20)
{
    console.log(i);
    i++;
}
do
{
    console.log(i);
}
while(i<=20)
    //spread
let arr =[10,20,30,40,50];
let arr2=[...arr,60,70,80,90];
console.log(arr);
console.log(arr2);
function sum(a,b)
{
    console.log(a+b);
}
sum(10,20)
var sum=()=>
{
    a=10;
    b=20;
    console.log(a+b);
}
sum()
var sums=(a,b)=>
{
    console.log(a+b);
}
sum(10,20)
//destructure
var student_marks=[99,89,88,87,97]
var [m1,m2,m3,m4,m5]=student_marks
console.log(student_marks);
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);