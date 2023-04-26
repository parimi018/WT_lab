function myop(a,b,o){
    switch(o){
        case '+':
            document.write(a+"+"+b+"="+(a+b));
            break;
        case '-':
            document.write(a+"-"+b+"="+(a-b));
            break;
        case '*':
            document.write(a+"*"+b+"="+(a*b));
            break;
        case '/':
            document.write(a+"/"+b+"="+(a/b));
            break;
        case '%':
            document.write(a+"%"+b+"="+(a%b));
            break;
    }
}
let a=parseInt(window.prompt("Enter 1st Number:"));
let o=window.prompt("Enter the operator:");
let b=parseInt(window.prompt("Enter 2nd Number:"));
myop(a,b,o);