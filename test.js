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
// let k = parseInt(prompt("nhập số"));
// let tich = 1;
// for (let i = 1; i <= k; i++) {
//   tich = tich * i;
// }
// console.log(tich);

// let k = parseInt(prompt("nhập số"));
// while (Number.isInteger(k)) {
//   let tich = 1;
//   let i = 1;
//   while (i <= k) {
//     tich = tich * i;
//     i++;
//   }
//   console.log(tich);
// }

// let k = Number(prompt("Nhập số"));
// while (!Number.isInteger(k) || k < 0) {
//   k = Number(prompt("vui lòng nhập lại"));
// }
// let tich = 1,
//   i = 1;
// while (i <= k) {
//   tich *= i;
//   i++;
// }
// console.log(tich);

// let k = Number(prompt("Nhập số dương"));
// let tong = 0;
// while (!Number.isInteger(k) || k <= 0) {
//   k = Number(prompt("Nhập lại số:"));
// }
// if (k % 2 == 0) {
//   for (let i = 2; i <= k; i += 2) {
//     tong += i;
//   }
// } else {
//   alert("Tôi ko tính số lẻ");
// }
// console.log(tong);

// let k = Number(prompt("Nhập số dương lẻ:"));
// while (!Number.isInteger(k)) {
//   k = Number(prompt("Nhập lại:"));
// }
// if (k % 2 == 1) {
//   var sum = 0;
//   for (let i = 1; i <= k; i += 2) {
//     if (i === 3) {
//       continue;
//     } else {
//       sum += i;
//     }
//   }
// } else {
//   alert("Đây không phải số lẻ");
// }
// console.log(sum);

// let k = Number(prompt("Nhập số dương lẻ:"));
// while (!Number.isInteger(k)) {
//   k = Number(prompt("Nhập lại:"));
// }
// if (k % 2 == 1) {
//   var sum = 0;
//   var i = 1;
//   while (i <= k) {
//     if (i === 3) {
//       i += 2;
//       continue;
//     } else {
//       sum += i;
//       i += 2;
//     }
//   }
// } else {
//   alert("Đây không phải số lẻ");
// }
// console.log(sum);

// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// let i = 10;
// let count = 0;
// while (i <= 50) {
//   if (i % 3 === 0) {
//     console.log(i);
//     i++;
//     count++;
//   }
//   i++;
// }
// console.log(count);

// let tong = 0;
// let tongGt = 1;
// for (let i = 1; i <= 10; i++) {
//   let j = i;
//   tong += tongGt *= j;
// }
// console.log(`Tổng giai thừa từ 1 đến 10 là`, tong);

// for (let i = 1; i <= 1000; i++) {
//   let tong = 0;
//   for (let j = 1; j <= parseInt(i / 2); j++) {
//     if (i % j === 0) {
//       tong += j;
//     }
//   }
//   if (tong === i) {
//     console.log(`%s là số hoàn hảo`, i);
//   }
// }

// let k = Number(prompt("Nhập số nguyên dương:"));
// let count = 0;
// let text = "";
// for (let k = 2; k <= 100; k++) {
//   for (var i = 2; i <= parseInt(k / 2); i++) {
//     if (k % i === 0) {
//       // console.log(`${k} không phải số nguyên tố`);
//       break;
//     }
//   }
//   if (i > parseInt(k / 2)) {
//     if (text == "") {
//       text = k;
//       count = 1;
//     } else {
//       text = text + ", " + k;
//       count++;
//     }
//   }
// }
// console.log(text);
// console.log(count);

// let a = Number(prompt("nhập số a:"));
// let giaiThua = function (a) {
//   let gt = 1;
//   for (let i = 1; i <= a; i++) {
//     gt *= i;
//   }
//   return gt;
// };
// console.log(giaiThua(a));

// let giaiThuaWhile = function (a) {
//   let gt = 1;
//   let i = 1;
//   while (i <= a) {
//     gt *= i;
//     i++;
//   }
//   return gt;
// };
// console.log(giaiThuaWhile(a));

// function ptb2_1(a, b, c) {
//   let delta = b ** 2 - 4 * a * c;
//   if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`PT có 2 nghiệm là %s và %s`, x1, x2);
//   } else if (delta === 0) {
//     let x1 = -b / (2 * a);
//     console.log(`PT có nghiệm kép là %s`, x1);
//   } else {
//     console.log(`PT vô nghiệm`);
//   }
// }
// ptb2_1(1, 2, -3);
