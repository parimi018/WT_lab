function mygreater(a,b,c)
{
    if(a>b && b>c)
    {
        document.write(a+">"+b+">"+c);
    }
    else if(a>b && b<c)
    {
        if(a>c)
        {
            document.write(a+">"+c+">"+b);
        }
        else{
            document.write(c+">"+a+">"+b);
        }
    }
    else if(a<b && b>c){
        if(a>c){
            document.write(b+">"+a+">"+c);
        }
        else{
            document.write(b+">"+c+">"+a);
        }
    }
    else if(a<b && b<c){
        document.write(c+">"+b+">"+a);
    }
    else{
        document.write(a+"="+b+"="+c);
    }
}

let a=parseInt(window.prompt("Enter 1st number:"));
let b=parseInt(window.prompt("Enter 2nd number:"));
let c=parseInt(window.prompt("Enter 3rd number:"));
mygreater(a,b,c)
