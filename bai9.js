let thang = prompt("Nhap vao thang: ");
let nam = prompt("Nhap vao nam: ");

if (thang < 1 || thang > 12) {
    console.log("Thang khong hop le");
  } else {
    let soNgayTrongThang = new Date(nam, thang, 0).getDate();
    console.log(`So ngay trong thang ${thang} nam ${nam} la: ${soNgayTrongThang}`);
  }

