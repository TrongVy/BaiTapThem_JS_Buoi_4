
ketQua.style.display = 'none';
 btn.onclick = function(){
     var soNguyen =document.getElementById('soNguyen').value;  
     var soHangDonVi =Number(soNguyen)%10;
     soNguyen /=10;    
     soHangChuc =soNguyen%10;
     soHangTram =soNguyen/10;
    if(Math.trunc(soHangChuc) == 0){
        show.innerHTML = Math.trunc(soHangTram)+" trăm lẻ "+soHangDonVi;
    } else{
        show.innerHTML = Math.trunc(soHangTram)+"  trăm "+Math.trunc(soHangChuc)+" mươi "+soHangDonVi;
    }  
     ketQua.style.display = 'block';
 }