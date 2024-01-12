let soThuNhat = prompt("Nhap so thu nhat: ");
let soThuHai = prompt("Nhap so thu hai: ");
let phepTinh = prompt("Nhap phep tinh:");

        //phan tich cu phap
soThuNhat = parseFloat(soThuNhat);
soThuHai = parseFloat(soThuHai);

//Khong phai la 1 so 
if (!isNaN(soThuNhat) && !isNaN(soThuHai)) {
    let ketQua;
    if (phepTinh === "+") {
      ketQua = soThuNhat + soThuHai;
    } else if (phepTinh === "-") {
      ketQua = soThuNhat - soThuHai;
    } else if (phepTinh === "*") {
      ketQua = soThuNhat * soThuHai;
    } else if (phepTinh === "/") {
      ketQua = soThuNhat / soThuHai;
    } else {
      console.log("Phep tinh khong hop le!");
    }
               //Khong xac dinh
    if (ketQua !== undefined) {
      console.log("Ket qua: " + ketQua);
    }
  } else {
    console.log("Du lieu nhap vao khong hop le!");
  }