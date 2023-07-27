// viết một chương trình nhận 1 số nhập vào và chèn dau (-) giữa 2 số chẵn
// Ví dụ nhập vào 245468 thì kết quả của chương trình là 2-454-6-8.

// B1 cho người dùng nhập vào 1 chuỗi số
// B2 chuyển đổi chuỗi thành mảng theo điều kiện nào đó [2,454,6,8]
// B3 dùng join để nối dấu "-"

// chuỗi trong js cũng là một mảng, bởi vì chuỗi là 1 tập hợp kí tự

// let string = "245468";
// let arr = [];
// for (let i = 0; i < string.length; i++) {
//     // console.log(string.charAt(i) % 2 == 0);
//     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0) {
//         arr.push(string.charAt(i));
//     } else {
//         let temp = "";
//         for (let j = i; j < string.length - 1; j++) {
//             temp += string.charAt(i);
//             if (string.charAt(j) % 2 == 0 && string.charAt(j + 1) % 2 == 0) {
//                 i = j;
//                 break;
//             }
//         }
//         arr.push(temp)
//     }
// }
// console.log(arr.join("-"));

// cách 2:
let string = prompt("Nhập 1 số");
let arr = [];
for (let i = 0; i < string.length; i++) {
    arr.push(string.charAt(i))
    if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0 && i != string.length - 1) {
        arr.push("-");
    }
}
console.log(arr.join(""));