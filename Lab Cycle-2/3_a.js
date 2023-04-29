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
    let n=parseInt(window.prompt("Enter a number:"));
    let num=n;
    let r=0;
    while(n!=0){
        r=r*10+(n%10);
        n=Math.floor(n/10);
    }
    document.write("The reverse of number "+num+" is "+r);
}

function RAN()
{
     let n=Math.floor(Math.random()*10);
     document.write("The random number is: "+n);
}