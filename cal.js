function f(d) {
    //Kiểm tra chuỗi c có bằng tham số d hay không và lấy tới phần tử ID 'res'
    if (d == 'c') {
        document.getElementById('res').value = "";
        return;
    }
    //gán phần tử nhập vào cho biến res
    res = document.getElementById('res').value;
    if (res == 0 && d == 0)
        return;
    //kiểm tra d có phải là 1 trong 4 toán tử và gián cho biến opr
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        opr = d;
    //đổi về kiểu số thực cho biến res và gán vào num
        num = parseFloat(res);
        document.getElementById('res').value = d;
        return;
    }
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
        //gán vào các toán tử tương ứng vào ans
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;
            case '/': ans = parseInt(num / num1); break;
        }
        //gán ans vào phần tử res và nhập vào giá trị
        document.getElementById('res').value = ans;
        return;
    }
    //kiểm tra nếu giá trị truyền vào không phải là 1 số thích hợp thì thực hiện phép tính value+d
    if (d == '--') {
        document.getElementById('res').value *= -1;
        return;
    }
    if (!isNaN(document.getElementById('res').value))
        document.getElementById('res').value += d;
    //ngược lại nếu hợp lệ thì trả về các phần tử có thuộc ID 'res'
    else
        document.getElementById('res').value = d;
   }