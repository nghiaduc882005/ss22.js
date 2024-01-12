// Trong JavaScript, "truthy" và "falsy" là các khái niệm được sử dụng để đánh giá giá trị của một biểu thức khi được chuyển đổi sang kiểu boolean.

// Truthy: Mọi giá trị trong JavaScript đều có thể được chuyển đổi thành boolean. Một giá trị được coi là "truthy" nếu nó chuyển đổi thành true khi đánh giá. Ví dụ, các giá trị như số khác không, chuỗi khác rỗng, mảng, đối tượng, và thậm chí cả chuỗi "false" đều được coi là "truthy".

// Falsy: Ngược lại, một giá trị được coi là "falsy" nếu nó chuyển đổi thành false khi đánh giá. Các giá trị "falsy" bao gồm false, null, undefined, số 0, chuỗi rỗng, NaN.

let value = 20;

if (value) {
  console.log("Giá trị là truthy");
} else {
  console.log("Giá trị là falsy");
}

// Trong ví dụ trên, nếu value không phải là một giá trị "falsy", thông điệp "Giá trị là truthy" sẽ được in ra.


