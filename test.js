function isPositiveInteger(value) {
  // Kiểm tra: là số, là số nguyên, lớn hơn 0
  return typeof value === "number" && Number.isInteger(value) && value > 0;
}
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

// const myDate1 = new Date(2025, 7, 29);
// console.log(myDate1);
// console.log(myDate1.toLocaleDateString());

// let currentDate = new Date();
// function birthYearValid(birthYear) {
//   let year = Number(prompt(`Mời nhập năm sinh:`));
//   if (year <= 0 || !Number.isInteger(year)) {
//     alert(`Tuổi phải lớn hơn 0
//     Tuổi phải là số nguyên dương`);
//     return birthYearValid();
//   } else {
//     birthYear = currentDate.getFullYear() - year;
//     return birthYear;
//   }
// }
// alert(birthYearValid());

// function countDown(minutes) {
//   alert(`Thời gian làm bài của bạn là ${minutes} phút`);
//   let seconds = minutes * 60;
//   let countDownInterval = setInterval(function () {
//     // thân hàm
//     // làm tròn xuống số phút
//     let minutesLeft = Math.floor(seconds / 60);
//     let secondsLeft = seconds % 60;
//     console.log(`${minutesLeft}:${secondsLeft}`);
//     if (seconds <= 0) {
//       clearInterval(countDownInterval);
//       alert(`Hết thời gian`);
//     } else {
//       seconds--;
//     }
//   }, 1000);
// }
// let timeInput = Number(prompt(`Mời nhập thời gian làm bài:`));
// countDown(timeInput);

// function timeSince(timestamp) {
//   let now = new Date().getTime();
//   // const offlineTime = 1756630276413;
//   let timeDif = now - timestamp;
//   let seconds = Math.floor(timeDif / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   let days = Math.floor(hours / 24);
//   let months = Math.floor(days / 30);
//   let years = Math.floor(months / 12);
//   if (years > 0) {
//     return `Online ${years} năm trước`;
//   } else if (months > 0) {
//     return `Online ${months} tháng trước`;
//   } else if (days > 0) {
//     return `Online ${days} ngày trước`;
//   } else if (hours > 0) {
//     return `Online ${hours} giờ trước`;
//   } else if (minutes > 0) {
//     return `Online ${minutes} phút trước`;
//   } else {
//     return `Online ${seconds} giây trước`;
//   }
// }
// let timestamp = prompt("Nhập timeStamp");
// console.log(timeSince(timestamp));

// let M1 = ["a", "b", "c"];
// console.log(M1[0].charCodeAt());
// for (let i of M1) {
//   console.log(`${i} có số thứ tự là ${i.charCodeAt()}`);
// }

// let number = [1, 2, 3, 4, 5];
// let evenNumber = number.filter((value, index, array) => value % 2 === 0);
// console.log(evenNumber);

// function arrNumberValid(number) {
//   number = prompt("Mời nhập số phần tử của mảng");
//   if (!isNaN(number) || number > 0 || Number.isInteger(number)) {
//     return number;
//   } else {
//     alert(`Mời nhập lại`);
//     return arrNumberValid();
//   }
// }
// let newArr = [];
// let number = arrNumberValid();
// for (let i = 0; i < number; i++) {
//   let element = prompt(`Nhập phần tử thứ ${i + 1} vào mảng`);
//   newArr.push(element);
// }
// console.log(newArr);

// function arrNumberValid(number) {
//   number = prompt("Mời nhập số phần tử của mảng");
//   if (!isNaN(number) || number > 0 || Number.isInteger(number)) {
//     return number;
//   } else {
//     alert(`Mời nhập lại`);
//     return arrNumberValid();
//   }
// }
// let newArr = [];
// let number = arrNumberValid();
// for (let i = 0; i < number; i++) {
//   newArr.push(Math.floor(Math.random() * 101) + 1);
// }

// console.log(newArr);
// console.log(`Xuất từng giá trị trong mảng`);
// for (let i = 0; i < newArr.length; i++) {
//   console.log(newArr[i]);
// }
// console.log(`Đảo ngược và xuất từng giá trị trong mảng`);
// let reverseArr = [...newArr].reverse();
// for (let i = 0; i < reverseArr.length; i++) {
//   console.log(reverseArr[i]);
// }
// console.log(`Sắp xếp mảng tăng dần:`);
// let sortAtoZ = [...newArr].sort((a, b) => a - b);
// console.log(sortAtoZ);
// console.log(newArr);

// console.log(`Tính tổng các phần tử trong mảng`);
// let sum = newArr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);

// function arrNumberValid2(number) {
//   number = parseInt(prompt("Mời nhập số cần kiểm tra"));
//   if (!isNaN(number) || number > 0 || Number.isInteger(number)) {
//     return number;
//   } else {
//     alert(`Mời nhập lại`);
//     return arrNumberValid2();
//   }
// }

// let number2 = arrNumberValid2();
// let positon = [];
// if (newArr.includes(number2)) {
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === number2) {
//       positon.push(i);
//     }
//   }
//   console.log(`Giá trị ${number2} ở các vị trí ${positon}`);
// } else {
//   console.log(`Không tồn tại ${number2} trong mảng`);
// }

// function Student(fullName, ID, birthYear, homeTown) {
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;
//   this.showInfo = function () {
//     return `${this.fullName} ${this.homeTown}`;
//   };
// }
// const sv1 = new Student("Lê Văn Giới", "030092013829", 1992, "Hải Dương");
// const sv2 = new Student("Đàm Thị Thu Hà", "031195005775", 1995, "Hải Phòng");

// console.log(sv1);
// console.log(sv1.showInfo());
// Student.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// class SinhVien {
//   constructor(fullName, ID, birthYear, homeTown) {
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;
//   }
//   showInfo() {
//     `${this.fullName} ${this.homeTown}`;
//   }
// }

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   draw() {
//     console.log(`Phương thức draw được gọi`);
//   }
//   static calcArea(radius) {
//     return Math.PI * radius * radius;
//   }
// }
// const c1 = new Circle(10);
// const c2 = new Circle(5);
// console.log(c1.draw());
// console.log(c2.draw());

// console.log(Circle.calcArea(10));

// class School {
//   constructor(ID, name, birthYear) {
//     this.ID = ID;
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   calcAge(currentYear) {
//     return currentYear - this.birthYear;
//   }
// }
// class Student extends School {
//   constructor(ID, name, birthYear, major) {
//     super(ID, name, birthYear);
//     this.major = major;
//   }
//   study() {
//     console.log(`Sinh viên ${this.name} đang học ${this.major}`);
//   }
// }

// const p1 = new School("C520912", "Giới", 1992);
// const s1 = new Student("C520999", "Hà", 1995, "computer");
// console.log(p1.calcAge(2025));
// console.log(s1.calcAge(2025));
// s1.study();

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   calcArea() {
//     return 0;
//   }
// }
// class Square extends Shape {
//   constructor(name, side) {
//     super(name);
//     this.side = side;
//   }
//   calcArea() {
//     return this.side * this.side;
//   }
//   static calcAreaSquare(side) {
//     return console.log(`Diện tích ${this.name} là ${side * side}`);
//   }
// }
// const s1 = new Square("hình vuông", 10);
// console.log(s1.calcArea());
// Square.calcAreaSquare(20);

// class Rectangle extends Shape {
//   constructor(name, width, height) {
//     super(name);
//     this.width = width;
//     this.height = height;
//   }
//   calcArea() {
//     return this.width * this.height;
//   }
//   static calcAreaRectangle(width, height) {
//     console.log(`Diện tích ${this.name} là ${width * height}`);
//   }
// }
// const r1 = new Rectangle("hình chữ nhật", 10, 5);
// console.log(r1.calcArea());
// Rectangle.calcAreaRectangle(15, 20);

// class School {
//   constructor(id, name, birthYear, scores) {
//     this.id = id;
//     this.name = name;
//     this.birthYear = birthYear;
//     this._score = scores;
//   }
//   calcAge(currentYear) {
//     return currentYear - this.birthYear;
//   }
//   get score() {
//     return this._score;
//   }
//   set score(value) {
//     if (value >= 0 && value <= 100) {
//       this._score = value;
//     } else {
//       console.log(`Điểm số không hợp lệ`);
//     }
//   }
// }
// const john = new School("C520912", "john", 2001, 95);
// console.log(john.score);
// john.score = 250; //không hợp lệ

// class Wallet {
//   #pin;
//   #balance;
//   #isPinEnter = false;
//   constructor(bankName, pin) {
//     this.bankName = bankName;
//     this.#pin = pin;
//     this.#balance = 0;
//   }
//   #validatePin(pin) {
//     return this.#pin === pin;
//   }
//   enterPin(pin) {
//     if (this.#validatePin(pin)) {
//       this.#isPinEnter = true;
//     } else {
//       console.log("Invalid Pin");
//     }
//   }
//   deposit(value) {
//     if (!this.#isPinEnter) {
//       console.log(`Kiểm tra lại mã pin`);
//       return;
//     }
//     this.#balance += value;
//   }
//   withdraw(value) {
//     if (!this.#isPinEnter) {
//       console.log(`Kiểm tra lại mã pin`);
//       return;
//     }
//     if (value > this.#balance) {
//       console.log("Số tiền ko đủ");
//     } else {
//       this.#balance -= value;
//       console.log("Rút tiền thành công");
//     }
//   }
//   get balance() {
//     if (!this.#isPinEnter) {
//       console.log("Kiểm tra lại mã pin");
//       return;
//     }
//     return this.#balance;
//   }
// }
// const wallet = new Wallet("MB Bank", "1234");
// wallet.enterPin("1234");
// wallet.deposit(1000);
// wallet.withdraw(750);
// console.log(wallet.balance);

// var getNoZeroIntegers = function (n) {
//   for (let i = 1; i < n; i++) {
//     b = n - i;
//     if (!i.tostring().includes("0") && !b.tostring().includes("0")) {
//       return [i, b];
//     }
//   }
//   return [];
// };

// var areaOfMaxDiagonal = function (dimensions) {
//   // Lấy giá trị trong từng index để tính chiều dài đường chéo và diện tích
//   let diagonalLongest = 0;
//   let areaMax = 0;
//   let a = 0;
//   for (let i = 0; i < dimensions.length; i++) {
//     // tính độ dài đường chéo, nếu đường chéo mới dài hơn đường chéo cũ
//     if (
//       diagonalLongest <
//       Math.sqrt(
//         dimensions[i][0] * dimensions[i][0] +
//           dimensions[i][1] * dimensions[i][1]
//       )
//     ) {
//       diagonalLongest = Math.sqrt(
//         dimensions[i][0] * dimensions[i][0] +
//           dimensions[i][1] * dimensions[i][1]
//       );
//       // lưu lại vị trí index của đường chéo mới
//       a = i;
//     } else if (
//       //nếu độ dài đường chéo bằng nhau
//       diagonalLongest ===
//       Math.sqrt(
//         dimensions[i][0] * dimensions[i][0] +
//           dimensions[i][1] * dimensions[i][1]
//       )
//     ) {
//       // so sánh diện tích, nếu nhỏ hơn hoặc bằng giữ nguyên index, nếu lớn hơn đổi index
//       a =
//         dimensions[a][0] * dimensions[a][1] <
//         dimensions[i][0] * dimensions[i][1]
//           ? i
//           : a;
//     }
//   }
//   return dimensions[a][0] * dimensions[a][1];
// };
// let dimensions = [
//   [25, 60],
//   [39, 52],
//   [16, 63],
//   [33, 56],
// ];
// console.log(areaOfMaxDiagonal(dimensions));

// Array.prototype.last = function () {
//   return this.length ? this[this.length - 1] : -1;
// };
// console.log(0 == false);

// var createCounter = function (n) {
//   n = n - 1;
//   return function () {
//     n++;
//     return n;
//   };
// };
// console.log(createCounter(5));
// let li_item = document.getElementsByTagName("li");
// console.log(li_item[1].innerHTML);
// let li_class_item = document.getElementsByClassName("span-red");
// console.log(li_class_item);
// let li_id_item = document.getElementById("id1");
// li_id_item.innerHTML = "abc";

// let title = document.querySelector("#heading_title"); //chọn id heading_tilte
// title.innerHTML = "Sửa title";

// let firstListItem = document.querySelector(".list"); // chọn class list đầu tiên
// firstListItem.innerHTML = "Trang chủ";

// let firstLinkInList = document.querySelector("ul a"); // chọn link đầu tiên trong ul

// let checkbox = document.querySelector("input"); // chọn input đầu tiên và tick và check box
// checkbox.check = true;

// const firstLink = document.querySelector("a");
// const linkHref = firstLink.getAttribute("href");
// console.log(linkHref);
// firstLink.setAttribute("target", "_blank");

// const links = document.querySelectorAll("ul a");
// links.forEach((singleLink) => {
//   singleLink.setAttribute("targer", "_blank");
// });

// document.querySelector("h1").setAttribute("style", "color:red");
// console.log(document.querySelector("h1").hasAttribute("style"));
// document.querySelector("h1").removeAttribute("style");

// console.log(document.querySelectorAll("ul li a"));
// document.querySelectorAll("ul li a").forEach((a) => {
//   a.removeAttribute("href");
// });
// document.querySelectorAll("ul li a").forEach(function (a) {
//   a.removeAttribute("href");
// });

// let links1 = document.querySelectorAll("ul li a");
// for (let i = 0; i < links1.length; i++) {
//   links1[i].removeAttribute("href");
// }

// let heading = document.querySelector("h1");
// heading.style.backgroundColor = "red";
// Object.assign(heading.style, {
//   backgroundColor: "cyan",
//   fontSize: "10px",
// });

// let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(window.getComputedStyle(h1).fontSize);

// let element = document.getElementById("myElement");
// element.classList.add("newClass");

// let elm = document.querySelector(".heading");
// console.log(elm.parentElement);
// elm.parentElement.style.backgroundColor = "red";
// console.log(elm.children);
// console.log(elm.children[1]);
// console.log(elm.children[1].nextElementSibling);
// console.log(elm.children[1].previousElementSibling);

// const newImg = document.createElement("img");
// newImg.setAttribute("src", "./slide1.img"); // cách 1
// newImg.src = "./slide1.img"; // cách 2
// // thêm ảnh vào cuối trang
// document.body.append(newImg);
// newImg.style.width = "100vw";
// // thêm vào một phần tử cha
// const p = document.querySelector(".hero");
// p.append("Đoạn text thêm");

// for (let i = 1; i <= 100; i++) {
//   let parent = document.querySelector("#container");
//   let btn = document.createElement("button");
//   btn.textContent = `Button ${i}`;
//   // document.getElementById("container").appendChild(btn);
//   parent.append(btn);
//   btn.style.color = "red";
//   btn.style.borderRadius = "5px";
//   btn.style.marginLeft = "5px";
//   btn.addEventListener("click", function () {
//     alert(`Nút số ${i}`);
//   });
// }
// console.log(document.querySelectorAll("#container button").length);

// const button11 = document.getElementById("btn");
// button11.onclick = function () {
//   alert("bạn đã click");
// };

// function clickHandler() {
//   alert(`click 2`);
// }
// button11.onclick = clickHandler;

// button11.onclick = () => {
//   alert(`Mai click`);
// };

// function mouseOver() {
//   document.getElementById("message").textContent = "Mouse is over here";
// }
// function mouseOut() {
//   document.getElementById("message").textContent = "Mouse is leave";
// }

// function setup() {
//   var button = document.getElementById("btn2");
//   button.onmouseover = mouseOver;
//   button.onmouseout = mouseOut;
// }

// window.onload = setup;

// const btn = document.getElementById("btn3");
// btn.addEventListener("click", function () {
//   alert(`Bạn đã click`);
// });

// function handleClick() {
//   alert("Bạn đã click bằng hàm tường minh");
// }
// btn.addEventListener("click", handleClick);

// btn.addEventListener("click", () => {
//   alert("Hàm arrow function");
// });

// function randomColor() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;
// }
// function changeColor() {
//   this.style.backgroundColor = randomColor();
//   this.style.color = randomColor();
// }
// const btnList = document.querySelectorAll(".btn");
// for (let btn of btnList) {
//   btn.addEventListener("click", changeColor);
// }

// const inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function () {
//   console.log("keydown");
// });
// inp.addEventListener("keyup", function () {
//   console.log("keyup");
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "r") {
//     document.body.style.backgroundColor = "cyan";
//   } else {
//     document.body.style.backgroundColor = "";
//   }
// });

// const inputFrm = document.querySelector("#name");
// inputFrm.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

// inputFrm.addEventListener("input", function (e) {
//   console.log(e.target.value);
//   const h2 = (document.getElementById("hi").textContent = e.target.value);
// });

// const child = document.getElementById("child");
// const parent = document.getElementById("parent");
// const grandparent = document.getElementById("grandparent");
// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("child clicked");
// });
// parent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("parent clicked");
// });
// grandparent.addEventListener("click", (e) => {
//   console.log("grandparent clicked");
// });

// const form = document.getElementById("form");
// const Ul_list = document.getElementById("list_item");
// // ngăn chặn sự kiện Submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // lấy username và message
//   const userName = document.getElementById("username1").value;
//   const message = document.getElementById("message1").value;
//   const newLi = document.createElement("li");
//   newLi.textContent = `${userName} - ${message}`;
//   Ul_list.append(newLi);
//   form.reset();
// });

// Ul_list.addEventListener("click", function (e) {
//   if (e.target.localName === "li") {
//     e.target.remove();
//   }
// });
