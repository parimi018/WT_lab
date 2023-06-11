let arr=new Array(8,4,1,34,23,45,12,6);

function disArr(){
    document.getElementById("arrayoutput").innerHTML="<br>Elements before sorting are:<br>["+arr+"]";
}

function sortArr(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    document.getElementById("sortedarrayoutput").innerHTML="<br>Array Elements after sorting are:<br>["+arr+"]";
}