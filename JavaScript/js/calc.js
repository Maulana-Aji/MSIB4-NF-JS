function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(num2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    var result = num1 + num2;
    document.getElementById("result").value = result;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(num2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    var result = num1 - num2;
    document.getElementById("result").value = result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(num2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    var result = num1 * num2;
    document.getElementById("result").value = result;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(num2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    var result = num1 / num2;
    document.getElementById("result").value = result;
}

function power() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1)) {
        alert('Maaf pada bagian Angka Pertama yang anda diinput bukan angka');
    } else if (isNaN(num2)) {
        alert('Maaf pada bagian Angka Kedua yang anda diinput bukan angka');
    }
    var result = Math.pow(num1, num2);
    document.getElementById("result").value = result;
}
