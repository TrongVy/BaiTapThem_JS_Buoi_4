ketQua.style.display ='none';
btn.onclick = function() {
    tongSoNgayTrongThang = 0;
    var ngay =document.getElementById('ngay').value;
    var thang =document.getElementById('thang').value;   
    var nam =document.getElementById('nam').value;
console.log("ngày hiện tại là:" + ngay+ '-'+thang+'-'+nam )
    switch(thang){
        case '1' :
            if(ngay==1 ){
                ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+12+'-'+(Number(nam)-1));
                ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ 2+ '-'+thang+'-'+nam)
            } else if(ngay==31){
                ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+1+'-'+nam);
                ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ 1+ '-'+(Number(thang) +1)+'-'+nam)
            } else if(ngay>1 && ngay<31) {
                ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
            } else{
                ngayTruocDo.innerHTML="nhập sai ngày";
                break
            }
            break;
         case '3' : case '5' : case '7' : case '8' : case '10' :
        // tongSoNgayTrongThang = 31;      
             if(ngay == 31) {          
            ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+thang+'-'+nam);
            ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ 1+ '-'+(Number(thang) +1)+'-'+nam);     
        } else if(ngay == 1){
                if(thang ==3){
                    ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 28+ '-'+2+'-'+nam);
                    ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ (Number(ngay)+1)+ '-'+thang+'-'+nam);    
                }
                else{
                    ngayTruocDo.innerHTML =('ngày truước đó là ngày: '+ 30+ '-'+(Number(thang) -1)+'-'+nam);
                    ngayTiepTheo.innerHTML=('ngày tiếp theo là ngày: '+ (Number(ngay)+1)+ '-'+thang+'-'+nam);  
                }
        } else if(ngay>1 && ngay<31){
            ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
            ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
        } else{
            ngayTruocDo.innerHTML="nhập sai ngày tháng "+thang +" chỉ có 31 ngày";
            break
        }
        
        
        break;
        case '4' : case '6' :case '9':case '11':
            // tongSoNgayTrongThang =30;
            if(ngay==30){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + 29+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 1+'-'+(Number(thang)+1)+'-'+nam );
            } else if(ngay==1){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + 31+'-'+(Number(thang)-1)+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 2+'-'+thang+'-'+nam );
            } else if(ngay >1 && ngay<30){
                ngayTruocDo.innerHTML =('ngày trước đó là:' + (Number(ngay)-1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay)+1)+'-'+thang+'-'+nam );
            } else{
                ngayTruocDo.innerHTML="nhập sai ngày tháng"+ thang + " chỉ có 30 ngày";
            }
            break;
        case '2':
            //  tongSoNgayTrongThang =28;
            if(ngay==28){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +27+'-'+2+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 1 +'-'+3+'-'+nam );
            } else if(ngay==1){
                console.log('ngay trước đó là ngày:' + 31+'-'+ 1 + '-'+ nam)
            }
        break;
        case '12': 
            if(ngay==31){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +30+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + 1 +'-'+ 1 +'-'+(Number(nam)+1) );
            } else if(ngay >1 && ngay <31){
                ngayTruocDo.innerHTML =('ngày trước đó là:' +(Number(ngay) -1)+'-'+thang+'-'+nam );
                ngayTiepTheo.innerHTML=('ngày tiếp theo là:' + (Number(ngay) +1) +'-'+thang+'-'+nam );
            } else{
                ngayTruocDo.innerHTML="nhập sai ngày";
                break;
            }
      default: ngayTruocDo.innerHTML="nhập sai";
    }
    ketQua.style.display ='block';
   
}