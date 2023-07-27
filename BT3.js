// Bài tập 10: làm việc với ghi chú(todoList) (C/R/U/D)
// tạo ghi chú mới (C)
// xem tất cả ghi chú (R)
// sửa một ghi chú nào đấy(U)
// xóa một ghi chú nào đấy(D)
// người dùng sẽ được liên tục C/R/U/D cho đến khi nhập 0 thì thoát chương trình

const todoList = ["rua rau", "giat do"] // Khai báo mảng ghi chú có sẵn

let hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") // nhập hành động muốn làm lần đầu

// vòng lặp kiểm tra xem muốn làm hành động nào, 
//sau khi làm xong hành động đó thì cho nhập để thực hiện hành động khác 
while (true) {
    // nếu là C thì thêm ghi chú
    if (hanhdong == "C") {
        let congViec = prompt("Nhap cong viec ban muon lam") // cho người dùng nhập ghi chú của họ
        todoList.push(congViec) // thêm ghi chú vào mảng
        console.log(todoList); // in ghi chú cho người dùng xem đã thêm được chưa
    } else if (hanhdong == "R") { // nếu là R thì in ra danh sách ghi chú
        console.log(todoList);
    } else if (hanhdong == "U") { // nếu là U thì sẽ cho sửa một ghi chú nào đó
        let vitri // biến lưu vị trí mà người dùng muốn sửa
        // vòng lặp để cho người dùng nhập vị trí cho đúng, sai là bắt nhập lại
        do {
            vitri = Number(prompt(`Nhap vi tri ban muon sua ( 0 - ${todoList.length - 1})`))
        } while (vitri < 0 || vitri >= todoList.length)
        // sau khi có vị trí thì cho người dùng nhập công việc mà họ muốn đổi
        let suaCongViec = prompt("Nhap cong viec ban muon sua thanh")
        todoList[vitri] = suaCongViec // sửa lại công việc trong mảng
        console.log(todoList); // in ra danh sách công việc
    } else if (hanhdong == "D") { // nếu là D thì sẽ xóa một ghi chú nào đấy
        let vitri // vị trí muốn xóa
        // vòng lặp để bắt nhập đúng vị trị cho phép
        do {
            vitri = Number(prompt(`Nhap vi tri ban muon xoa ( 0 - ${todoList.length - 1})`))
        } while (vitri < 0 || vitri >= todoList.length)
        todoList.splice(vitri, 1) // xóa công việc tại vị trí đã chọn
        console.log(todoList); // in lại danh sách ghi chú
    } else if (hanhdong == 0) { // thoát chương trình
        break;
    } else { } // khi người dùng nhập khác C/R/U/D/0 thì bắt nhập lại
    hanhdong = prompt("Nhap vao hanh dong ban C/R/U/D va 0 de ket thuc") // cho người dùng nhập lại hành động để thực hiện cho lần sau
}
