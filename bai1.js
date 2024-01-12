let a = prompt("Nhap vao so a: ");
let b = prompt("Nhap vao so b: ");

if (a % b === 0) {
    console.log("a chia het cho b");
}else if (b % a === 0) {
    console.log("b chia het cho a");
}else {
    console.log("Khong co so nao chia het cho so con lai.");
}