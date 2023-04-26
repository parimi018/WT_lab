function myrev(n){
    let num=n;
    let r=0;
    r=parseInt(r);
    let s;
    while(n){
        r=n%10;
        var a=r.toString();
        s=s+a;
        n=Math.float(n/10);
    }
    document.write("The reverse of number "+num+" is "+s);
}
let n=parseInt(window.prompt("Enter a number:"));
myrev(n);