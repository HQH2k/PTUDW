function sc() {
    rng = prompt('Enter the range');
    res = rng.split("-");
    //kiểm tra đọ dài của chuỗi khác 2 hay k
    if (res.length != 2) {
    alert("invalid range ");
    return;
    }
    //chuyển sang kiểu số
    first = parseInt(res[0]);
    second = parseInt(res[1]);
    //kiểm tra và hiện hội thoại thông báo "invalid range" nếu số đầu tiên nhập vào lớn hơn số thứ 2
    if (first > second) {
    alert("invalid range ");
    return;
    }
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    //chạy vòng lặp, điều kiện số đầu tiên nhỏ hơn số nhập thứ 2
    //hàng đầu tiên sẽ trả về 1 (i) hàng 2 sẽ là 1 * 1 (i*1) hàng 3 1 * 1 * 1. sau đó i tăng thêm tiếp tục nhân
    //vòng lặp tự chạy đến khi số đầu tiên nhập vào bằng số thứ 2
    for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }
    document.write(str);
   }