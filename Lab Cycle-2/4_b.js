let a=new Array(0,1,2,3,4,5,6,7,8,9);

function disArr(){
    document.getElementById("arrayoutput").innerHTML="<br>Elements in the array are:<br>["+a+"]";
}

function binSearch(a,e){
    let low=0;
    let high=a.length-1;
    let mid;
    while(low<=high){
        mid=Math.floor((low+high)/2);
        if(e==a[mid]){
            return mid;
        }else if(e<a[mid]){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return 0;
}

function numSearch(){
    let e=parseInt(document.getElementById("num").value);
    let i=binSearch(a,e);
    if(i==0){
        document.getElementById("binsearchoutput").innerHTML="Number not found in the array";
    }
    else{
        document.getElementById("binsearchoutput").innerHTML="Number is found at the index:"+i;
    }
}