function GCD(){
    let n1=window.prompt("Enter 1st number:");
    let n2=window.prompt("Enter 2nd number:");
    let max=0,d=0,b=0,s=0;
    if(n1>n2){
        b=n1;
        s=n2;
    }
    else{
        b=n2;
        s=n1;
    }
    for(i=1;i<=b;i++){
        if((b%i==0) && (s%i==0)){
            d=i;
            if(max<d){
                max=d;
            }
        }
    }
    document.write("The GCD of "+n1+" and "+n2+" is "+max);
}

function REV(){
    let 
}