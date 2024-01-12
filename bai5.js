let a = prompt("Nhap vao so a: ");
let b = prompt("Nhap vao so b: ");
let c = prompt("Nhap vao so c: ");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if( a === 0){
    if( b === 0){
        console.log("Phuong trinh vo so nghiem");
    }else{
        console.log("Phuong trinh vo nghiem ");
    }
} else {
    let x = -b/a;
    console.log("Phuong trinh co nghiem la : x = ", + x);
}