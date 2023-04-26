function nsum(n){
    let num=n;
    let s=0;
    s=parseInt(s);
    let r=0;
    r=parseInt(r);
    while(n){
        r=n%10;
        s=s+r;
        n=Math.floor(n/10);
    }
    document.write("Sum of the digits of "+num+" is "+s);
}

let n=parseInt(window.prompt("Enter a number:"));
nsum(n);