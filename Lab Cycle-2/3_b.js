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
    let n=parseInt(prompt("Enter a number:"));
    function myfibo(n){
        if(n==0){
            return 0;
        }
        if(n==1 || n==2){
            return 1;   
        }
        return (myfibo(n-1)+myfibo(n-2));
    }
    document.write(n+" Fibonacci number is: "+myfibo(n));
}

function POW()
{
    let b=parseInt(window.prompt("Enter a base:"));
    let p=parseInt(window.prompt("Enter a power:"));
    function mypow(b,p){
        if(p==0){
            return 1;
        }
        else{
            return (b*mypow(b,p-1));
        }
    }
    document.write(b+" power "+p+" is: "+mypow(b,p));
}