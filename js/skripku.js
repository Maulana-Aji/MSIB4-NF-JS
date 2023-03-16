function cekLogin() {
    let form = window.document.getElementById('formulir');
    let uname = form.uname.value;
    let pw = form.pass.value;

    if (uname == 'mimin' && pw == 'mimin123') {
        alert('Selamat Datang Mimin, Anda Administrator');
    } else if (uname == 'budi' && pw == 'budi123') {
        alert('Selamat Datang Budi, Anda Operator');
    } else alert('Maaf Anda Gagal Login, Username atau Password Salah');

}