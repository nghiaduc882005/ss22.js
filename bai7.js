       //loi nhac
let a = prompt("Nhap vao gia tri so a: ");
let b = prompt("Nhap vao gia tri so b: ");
let c = prompt("Nhap vao gia tri so c: ");

 //phan tich cu phap
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let delta = b * b - 4 * a * c;

if (delta > 0) {
                  //can bac 2
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có hai nghiệm phân biệt:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép:");
    console.log("x = " + x);
  } else {
    console.log("Phương trình vô nghiệm");
  }