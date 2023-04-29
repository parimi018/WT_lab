function FACT()
{
    let n=parseInt(window.prompt("Enter a number to find it's factorial:"));
    let num=n;
    function myfact(n){
        if(n==0){
            return 1;
        }
        else if(n==1){
            return 1;
        }
        else{
            return n*myfact(n-1);
        }
    }
    document.write("Factorial of "+num+" is "+myfact(n));
}

function FIBO()
{
    let n=parseInt("Enter a number:");
    let a=0,b=0,c=1,s=0;
    document.write("The Fibonacci Series")
}