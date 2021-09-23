function findLMV() {
    //lấy thông tin phần tử id t1 và gián vào biến str
    var str = document.getElementById('t1').value
    //kiểm tra chuỗi nhập vào và trả về các ký tự trong chuỗi được lập chỉ mục từ trái sang phải
    for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
    || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
    return ("Left most vowel of " + str + " is at location " + (i + 1));
    }
    return ("No vowels found for string " + str);
    //trả về "No vowels found for string" nếu nhập không đúng chuỗi
   }
   function reverse(num) {
    rnum = 0;
    temp = num;
    //kiểm tra điều kiện truyền vào có phải 1 số hợp lệ hay không
    if (isNaN(num)) {
    return "invalid number";
    }
    //cho điều kiện để thực thi là số nhập vào khác 0
    while (num != 0) {
    //ban đầu biến rnum = 0 vì rnum = 0*10 = 0
    rnum *= 10;
    rnum += num % 10;
    num -= num % 10;
    num = Math.floor(num / 10);
    }
    return "Reverse of num " + temp + " is " + rnum;
   }
   