function kiemTraSoChinhPhuong(number) {
    if (number < 0) {
      console.log("Số nhập vào không phải là số chính phương");
      return;
    }
                // Can bac 2
    const squareRoot = Math.sqrt(number);
    if (squareRoot === Math.floor(squareRoot)) {
      console.log("Số nhập vào là số chính phương");
    } else {
      console.log("Số nhập vào không phải là số chính phương");
    }
  }
  
  const inputNumber = prompt("Nhập vào một số: ");
  kiemTraSoChinhPhuong(parseInt(inputNumber));
           //chuyen 1 chuoi thanh 1 so nguyen 
  
  
