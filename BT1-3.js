let chuoiBanDau = prompt("Hãy nhập 1 chuỗi:");
let HOA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let THUONG = "abcdefghijklmnopqrstuvwxyz"
let ketQua = []

for (let i = 0; i < chuoiBanDau.length; i++) {
    if (chuoiBanDau[i] == " ") {
        ketQua.push(" ")
        continue;
    }
    // chuoiBanDau[i] so sanh voi bang chu cai
    for (let j = 0; j < HOA.length; j++) {
        if (chuoiBanDau[i] == HOA[j]) {
            ketQua.push(THUONG[j])
        } else if (chuoiBanDau[i] == THUONG[j]) {
            ketQua.push(HOA[j])
        }
    }
}
console.log(ketQua.join(""));