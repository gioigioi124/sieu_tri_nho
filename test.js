// let tong = Number(prompt("Tong 2 so"));
// let hieu = Number(prompt("Hieu 2 so"));
// console.log(`gia tri cua x la:%s`, (tong + hieu) / 2);
// console.log(`gia tri cua y la:%s`, (tong - hieu) / 2);
// let namNhuan = Number(prompt("Nhap nam de kiem tra co phai nam nhuan:"));
// if ((namNhuan % 4 == 0 && namNhuan % 100 != 0) || namNhuan % 400 == 0) {
//   console.log("Đây là năm nhuận");
// } else {
//   console.log(namNhuan + " không phải năm nhuận");
// }

// let thang = parseInt(prompt("Nhap thang"));
// if (!isNaN(thang) && thang >= 1 && thang <= 12) {
//   if (thang === 2) {
//     let nam = parseInt(prompt("Nhap nam"));
//     if ((nam % 4 === 0 && nam % 1000 !== 0) || nam % 400 === 0) {
//       console.log(`Tháng %s năm %s có 29 ngày`, thang, nam);
//     } else {
//       console.log(`Tháng %s năm %s có 28 ngày`, thang, nam);
//     }
//   } else if ((thang === 4, thang === 6, thang === 9, thang === 11)) {
//     console.log("Tháng %s có 30 ngày", thang);
//   } else {
//     console.log("Tháng %s có 31 ngày", thang);
//   }
// } else {
//   console.log("Nhập lại tháng từ 1-12");
// }

// let n = +prompt("Nhập năm");
// if (!isNaN(n)) {
//   console.log(typeof n);
//   console.log(
//     `Năm %s %s`,
//     n,
//     (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0
//       ? "là năm nhuận"
//       : "không phải năm nhuận"
//   );
// } else {
//   console.log("Vui lòng nhập lại đúng năm");
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let tong = 0;
// let text = "";
// for (i = 0; i <= 10; i += 2) {
//   tong += i;
//   text = text + "+" + i;
// }
// console.log(tong);
// console.log(text);

// let n = 0;
// while (n < 100) {
//   n++;
//   if (n === 4) {
//     break;
//   }
//   console.log(n);
// }

// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
let k = parseInt(prompt("nhập số"));
let tich = 1;
for (let i = 1; i <= k; i++) {
  tich = tich * i;
}
console.log(tich);
