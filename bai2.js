function kiemTraTamGiac(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Ba cạnh nhập vào tạo thành một tam giác hợp lệ.");
    } else {
        console.log("Ba cạnh nhập vào không tạo thành một tam giác hợp lệ.");
    }
}

let canh1 = (prompt("Nhập độ dài cạnh thứ nhất:"));
let canh2 = (prompt("Nhập độ dài cạnh thứ hai:"));
let canh3 = (prompt("Nhập độ dài cạnh thứ ba:"));
    //phan tich cu phap
canh1 = parseFloat(canh1);
canh2 = parseFloat(canh2);
canh3 = parseFloat(canh3);

kiemTraTamGiac(canh1, canh2, canh3);