let Img = new Array(9);

Img[0]="image1.jpeg";
Img[1]="image2.jpeg";
Img[2]="image3.jpeg";
Img[3]="image4.jpeg";
Img[4]="image5.jpeg";
Img[5]="image6.jpeg";
Img[6]="image7.jpeg";
Img[7]="image8.jpeg";
 
Img[8]="image9.jpeg";

function imgGen(){
    let number=Math.floor(Math.random()*(Img.length-1));
    document.getElementById("output").innerHTML='<img src="'+Img[number]+'" alt="Error">'; 
}   
function numGen(){
    let number=Math.floor(Math.random()*10);
    document.getElementById("output1").innerHTML=number;
}