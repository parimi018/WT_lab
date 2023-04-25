function isleapyear(y)
{
    if(y%4==0 && y%100!=0 || y%400==0){
        return true;
    }
    else{
        return false;
    }
}
let y=parseInt(window.prompt("Enter a year:"));
if(isleapyear(y)){
    document.writeln( y+" is a Leap Year");
}
else{
    document.writeln( y+" is not a leap year");
}