ketQua.style.display= "none";
btn.onclick = function(){
    var x1 = Number(document.getElementById('x1').value) ;
    var y1 =Number(document.getElementById('y1').value) ;
    console.log(x1,y1);
    var x2 = Number(document.getElementById('x2').value) ;
    var y2 =Number(document.getElementById('y2').value) ;
    console.log(x2,y2);
    var x3 = Number(document.getElementById('x3').value) ;
    var y3 =Number(document.getElementById('y3').value) ;
    console.log(x3,y3);
    var a = Number(document.getElementById('a').value) ;
    var b =Number(document.getElementById('b').value) ;
    console.log(x3,y3);
    
    var KhoangCachA =Math.sqrt( (x1-a)*(x1-a)+(y1-b)*(y1-b) );
    console.log( KhoangCachA);
   

    var KhoangCachB =Math.sqrt( (x2-a)*(x2-a)+(y2-b)*(y2-b) );
    console.log(KhoangCachB );

    var KhoangCachC =Math.sqrt( (x3-a)*(x3-a)+(y3-b)*(y3-b) );
    console.log(KhoangCachC);
    var max = KhoangCachA;
    if(KhoangCachB-KhoangCachC>0){
        if(KhoangCachB-max >0){
            max =KhoangCachB;
            console.log('B la max');
            show.innerHTML = "sinh viên B xa Trường Nhất";
        } else{
         console.log("A la max");
         show.innerHTML = "sinh viên A xa Trường Nhất";
        }
    } else{
        if(KhoangCachC-max >0){
            max =KhoangCachC;
            console.log('C la max');
            show.innerHTML = "sinh viên C xa Trường Nhất";
        } else{
         console.log("A la max");
         show.innerHTML = "sinh viên A xa Trường Nhất";  
        }
    }
    ketQua.style.display= "block";
}