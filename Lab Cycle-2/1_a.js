function isleapyear(y)
{
    if(y%4==0 && y%100!=0 || y%400==0){
        return true;
    }
    else{
        return false;
    }
}

function getYear(){
    let y=document.getElementById("y").value;
    if(y>0){
        if(isleapyear(y)){
            document.getElementById("output").innerHTML= y+" is a Leap Year.";
        }
        else{
            document.getElementById("output").innerHTML= y+" is not a Leap Year.";
        }
    }
    else{
        document.getElementById("output").innerHTML="Not a Valid Year";
    }
}