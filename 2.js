ketQua.style.display = 'none';
btn.onclick= function(){
    // var ngay = document.getElementById('ngay').value;
    var thang = document.getElementById('thang').value;
    var nam = document.getElementById('nam').value;
    switch(thang){
        case '1' :   case '3' :   case '5' :  case '7' :  case '8' :  case '10' :  case '12' : 
        show.innerHTML = 'tháng ' + thang + " có 31 ngày ";
        break;
        case '2' : 
        if(((nam % 4 == 0) && (nam % 100 != 0)) || (nam % 400 == 0)){
            show.innerHTML = 'tháng ' + 2 + " có 29 ngày ";
        } else{
            show.innerHTML = 'tháng ' + 2 + " có 28 ngày ";
        }
        break;
        case '4' :   case '6' :   case '9' :  case '11':
            show.innerHTML = 'tháng ' + thang + " có 30 ngày ";
            break;
        default: 
        show.innerHTML = 'nhap sai';
    }
    ketQua.style.display = 'block';
}