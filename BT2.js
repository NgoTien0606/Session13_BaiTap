// B1: tạo 2 mảng
// B2: tìm kiếm từ tiếng anh ở mảng 1, nếu thấy hiển thị từ tiếng việt ở mảng 2
// B3: Nếu ko tìm thấy trong mảng thông báo không tìm thấy
let tk = prompt("Nhập từ cần tìm kiếm trong mảng");
let numberTA = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let numberTV = ["một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín", "mười"];
flag = false;
for (i = 0; i < numberTA.length; i++) {
    if (tk == numberTA[i]) {
        flag = true;
        console.log(numberTV[i]);
    }
}
if (flag == false) {
    console.log("Không tìm thấy");
}