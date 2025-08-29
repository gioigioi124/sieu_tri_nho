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

// function f(a) {
//   if (a <= 2) {
//     return 1;
//   } else {
//     return f(a - 1) + f(a - 2);
//   }
// }
// let kq = f(10);
// console.log(kq);

// let fabonaci = (a) => {
//   if (a <= 2) {
//     return 1;
//   } else {
//     let tong = 0;
//     for (let i = 1; i <= a; i++) {}
//   }
// };

// let fibo = (n) => {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     let sum = 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 2; i <= n; i++) {
//       sum = a + b;
//       a = b;
//       b = sum;
//     }
//     return sum;
//   }
// };
// let kq = fibo(1000);
// console.log(kq);

// let message = prompt("nhập dãy ký tự:");
// console.log(message.length);
// console.log(message[4]);

// let s4 = `0123456789`;
// console.log(s4.slice(2, 5));

// let str = "lÊ VĂn gIỚi";
// // console.log(str.toLocaleLowerCase);
// console.log(`%s và %s`, str.charAt(4), str.toUpperCase());
// let student = "Hoa,Lan,Huệ";
// let arr = student.split(",");
// console.log(arr);

// let str = prompt("Nhập bất kỳ:");
// let countNumber = 0;
// let countBlank = 0;
// let countUpperCase = 0;
// let countLowerCase = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     countBlank++;
//   } else if (!isNaN(str[i])) {
//     countNumber++;
//   } else if (str[i] === str[i].toUpperCase()) {
//     countUpperCase++;
//   } else {
//     countLowerCase++;
//   }
// }
// console.log(
//   `Số ký tự là số: %s
//   Số ký tự là khoảng trắng: %s
//   Số ký tự viết hoa: %s
//   số ký tự viết thường: %s
//   `,
//   countNumber,
//   countBlank,
//   countUpperCase,
//   countLowerCase
// );

// let str = prompt("Nhập bất kỳ:");
// let countNumber = 0;
// let countBlank = 0;
// let countUpperCase = 0;
// let countLowerCase = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= "a" && str[i] <= "z") {
//     countLowerCase++;
//   } else if (str[i] >= "A" && str[i] <= "Z") {
//     countUpperCase++;
//   } else if (str[i] >= 0 && str[i] <= 9) {
//     countNumber++;
//   } else if (str[i] === " ") {
//     countBlank++;
//   }
// }
// console.log(
//   `Số ký tự là số: %s
//   Số ký tự là khoảng trắng: %s
//   Số ký tự viết hoa: %s
//   số ký tự viết thường: %s
//   `,
//   countNumber,
//   countBlank,
//   countUpperCase,
//   countLowerCase
// );

// let upper = false;
// let lower = false;
// let number = false;
// while (true) {
//   var pass = prompt("Nhập mật khẩu:");
//   if (typeof pass === "string" && pass.length >= 6) {
//     for (let i = 0; i < pass.length; i++) {
//       if (pass[i] >= "a" && pass[i] <= "z") {
//         lower = true;
//       } else if (pass[i] >= "A" && pass[i] <= "Z") {
//         upper = true;
//       } else if (pass[i] >= "0" && pass[i] <= "9") {
//         number = true;
//       }
//       if (lower && upper && number) {
//         break;
//       }
//     }
//     if (lower && upper && number) {
//       alert("Đặt mật khẩu thành công");
//       break;
//     } else {
//       console.log("Mật khẩu không hợp lệ");
//     }
//   } else {
//     alert(`Mật khẩu không hợp lệ
//       Phải có 6 ký tự
//       Phải có số
//       Phải có chữ hoa
//       Phải có chữ thường`);
//   }
// }
// let inputPass = 0;
// while (true) {
//   let confirmPass = prompt("Mời nhập mật khẩu:");
//   if (pass === confirmPass) {
//     alert("Đăng nhập thành công");
//     break;
//   } else {
//     inputPass++;
//     if (inputPass < 5) {
//       alert(`Bạn đã nhập ${inputPass}/5 lần`);
//     } else {
//       alert(`Bạn đã nhập ${inputPass}/5 lần
//         Khóa!!!`);
//       break;
//     }
//   }
// }

// // chuỗi gốc
// const a = "abcdefghijklmnopqrstuvwxyz";
// // chuỗi mã hóa
// const b = "zxcvbnmasdfghjklqwertyuiop";
// let message = prompt(`Nhập mật mã vào đây`);
// let messageConvert = "";
// for (let i = 0; i < message.length; i++) {
//   // kiểm tra ký tự i ở chuỗi xem nó ở vị trí thứ mấy trong chuỗi gốc
//   let k = a.indexOf(message[i].toLowerCase());
//   // Convert sang chuỗi mã hóa

//   messageConvert += k >= 0 ? b[k] : message[i];
// }
// alert(`Chuỗi đã được mã hóa từ "${message}" là: "${messageConvert}"`);

// let str = "tôi là tôi là tôi";
// let str1 = str;
// let dem = 0;
// // dùng includes để xem kết quả là gì
// while (str1.includes("tôi")) {
//   dem++;
//   str1 = str1.replace("tôi", "");
// }
// console.log(dem);

// let str = prompt("mời nhập các ký tự bất kỳ");
// let str_num = "";
// let str_str = "";
// let str_dif = "";
// for (let i = 0; i < str.length; i++) {
//   if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
//     // kiểm tra xem ký tự là chữ
//     str_str += str[i];
//   } else if (str[i] >= "0" && str[i] <= "9") {
//     // kiểm tra xem ký tự là số
//     str_num += str[i];
//   } else {
//     // các ký tự khác
//     str_dif += str[i];
//   }
// }
// alert(`Chuỗi chữ là: ${str_str}
//   Chuỗi số là: ${str_num}
//   Chuỗi khác là: ${str_dif} `);

// kiểm tra password có hợp lệ hay không, return True nếu đạt điều kiện, false nếu ko đạt
// function passWordValid(password) {
//   if (
//     password === null ||
//     password.length < 6 ||
//     typeof password !== "string"
//   ) {
//     alert(`Mật khẩu không hợp lệ `);
//     return false;
//   }
//   let upperCase = false;
//   let lowerCase = false;
//   let num = false;
//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];
//     if (char >= "a" && char <= "z") {
//       lowerCase = true;
//     } else if (char >= "A" && char <= "Z") {
//       upperCase = true;
//     } else if (char >= "0" && char <= "9") {
//       num = true;
//     }
//   }
//   return upperCase && lowerCase && num;
// }
// // tạo mật khẩu, tạo thành công nếu passWordValid() trả về True
// function setPassWord() {
//   let password = prompt("Tạo mật khẩu:");
//   if (passWordValid(password)) {
//     alert(`Tạo mật khẩu thành công, mật khẩu là: ${password} `);
//     return password;
//   } else {
//     alert(`Mật khẩu phải có 6 ký tự
//       Phải có ít nhất 1 chữ hoa
//       Phải có ít nhất một chữ thường
//       Phải có ít nhất một số `);
//     setPassWord();
//   }
// }
// // lưu mật khẩu vào biến passwordOK để sử dụng
// let passwordOK = setPassWord();
// let countInput = 0;

// function checkPassWord() {
//   let passCheck = prompt("mời nhập mật khẩu");

//   if (passwordOK === passCheck) {
//     alert(`Đăng nhập thành công`);
//     return passwordOK;
//   } else {
//     if (countInput < 5) {
//       countInput++;
//       alert(`Bạn đã nhập sai ${countInput}/5 lần`);
//       checkPassWord();
//     } else {
//       return alert(`Bạn nhập sai quá 5 lần, tài khoản bị khóa `);
//     }
//   }
// }
// checkPassWord();

// // chuỗi gốc
// const a = "abcdefghijklmnopqrstuvwxyz";
// // chuỗi mã hóa
// const b = "zxcvbnmasdfghjklqwertyuiop";

// // alert(`Chuỗi đã được mã hóa từ "${message}" là: "${messageConvert}"`);

// function maHoa(message) {
//   let messageConvert = "";
//   for (let i = 0; i < message.length; i++) {
//     // kiểm tra ký tự i ở chuỗi xem nó ở vị trí thứ mấy trong chuỗi gốc
//     let k = a.indexOf(message[i].toLowerCase());
//     // Convert sang chuỗi mã hóa
//     messageConvert += k >= 0 ? b[k] : message[i];
//   }
//   return messageConvert;
// }
// let message = prompt("Nhập mật mã vào đây");
// alert(`Chuỗi đã được mã hóa từ "${message}" là: "${maHoa(message)}"`);

// let currentDate = new Date();
// console.log(currentDate);

const myDate1 = new Date(2025, 7, 29);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());
