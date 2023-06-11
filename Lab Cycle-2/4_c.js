let a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let b=[
    [9,8,7],
    [6,5,4],
    [3,2,1]
];

function disMatri(a){
    m=a.length;
    n=a[1].length;
    for(i=0;i<m;i++){
        for(j=0;j<n;j++){
            document.getElementById(i+"matrix"+j).innerHTML=a[i][j]+"&nbsp";
        }
    }
}

function DIS(a,b){
    document.getElementById("1matrix").innerHTML="1st Matrix is:";
    disMatri(a);
    document.getElementById("2matrix").innerHTML="2nd Matrix is:";    
    disMatri(b);
}
