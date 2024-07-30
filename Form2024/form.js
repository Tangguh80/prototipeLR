function focusFunction() {
    document.querySelector('.label-nama').classList.add('green');
    document.getElementById('kotak-nama').classList.add('green-border');
    document.getElementById('icon-nama').classList.add('green-icon');
    document.getElementById('separator-nama').classList.add('green-separator');
}

function blurFunction() {
    var input = document.getElementById('nama-lengkap');
    var alertBox = document.getElementById('alert-nama');
    if (input.value.trim() === "") {
        document.querySelector('.label-nama').classList.add('red');
        document.getElementById('kotak-nama').classList.add('red-border');
        document.getElementById('icon-nama').classList.add('red-icon');
        document.getElementById('separator-nama').classList.add('red-separator');
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-nama').classList.remove('green', 'red');
        document.getElementById('kotak-nama').classList.remove('green-border', 'red-border');
        document.getElementById('icon-nama').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-nama').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}





function focusEmail() {
    document.querySelector('.label-email').classList.add('green');
    document.getElementById('kotak-email').classList.add('green-border');
    document.getElementById('icon-email').classList.add('green-icon');
    document.getElementById('separator-email').classList.add('green-separator');
}

function blurEmail() {
    var input = document.getElementById('email');
    var alertBox = document.getElementById('alert-Email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.trim() === "") {
        document.querySelector('.label-email').classList.add('red');
        document.getElementById('kotak-email').classList.add('red-border');
        document.getElementById('icon-email').classList.add('red-icon');
        document.getElementById('separator-email').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (!emailPattern.test(input.value)) {
        document.querySelector('.label-email').classList.add('red');
        document.getElementById('kotak-email').classList.add('red-border');
        document.getElementById('icon-email').classList.add('red-icon');
        document.getElementById('separator-email').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Isi email dengan benar';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-email').classList.remove('green', 'red');
        document.getElementById('kotak-email').classList.remove('green-border', 'red-border');
        document.getElementById('icon-email').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-email').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}






function focusHp() {
    document.querySelector('.label-nomor-hp').classList.add('green');
    document.getElementById('kotak-nomor-hp').classList.add('green-border');
    document.getElementById('icon-nomor-hp').classList.add('green-icon');
    document.getElementById('separator-nomor-hp').classList.add('green-separator');
}

function blurHp() {
    var input = document.getElementById('nomor-hp');
    var alertBox = document.getElementById('alert-NomorHp');
    if (input.value.trim() === "") {
        document.querySelector('.label-nomor-hp').classList.add('red');
        document.getElementById('kotak-nomor-hp').classList.add('red-border');
        document.getElementById('icon-nomor-hp').classList.add('red-icon');
        document.getElementById('separator-nomor-hp').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.length < 10) {
        document.querySelector('.label-nomor-hp').classList.add('red');
        document.getElementById('kotak-nomor-hp').classList.add('red-border');
        document.getElementById('icon-nomor-hp').classList.add('red-icon');
        document.getElementById('separator-nomor-hp').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Minimal 10 Angka';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-nomor-hp').classList.remove('green', 'red');
        document.getElementById('kotak-nomor-hp').classList.remove('green-border', 'red-border');
        document.getElementById('icon-nomor-hp').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-nomor-hp').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

document.getElementById('nomor-hp').addEventListener('input', function (event) {
    var input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Hanya angka yang diizinkan
});










function focusAlamat() {
    document.querySelector('.label-alamat').classList.add('green');
    document.getElementById('kotak-alamat').classList.add('green-border');
    document.getElementById('icon-alamat').classList.add('green-icon');
    document.getElementById('separator-alamat').classList.add('green-separator');
}

function blurAlamat() {
    var input = document.getElementById('alamat');
    var alertBox = document.getElementById('alert-Alamat');
    if (input.value.trim() === "") {
        document.querySelector('.label-alamat').classList.add('red');
        document.getElementById('kotak-alamat').classList.add('red-border');
        document.getElementById('icon-alamat').classList.add('red-icon');
        document.getElementById('separator-alamat').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.trim().split(/\s+/).length > 100) {
        document.querySelector('.label-alamat').classList.add('red');
        document.getElementById('kotak-alamat').classList.add('red-border');
        document.getElementById('icon-alamat').classList.add('red-icon');
        document.getElementById('separator-alamat').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 100 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-alamat').classList.remove('green', 'red');
        document.getElementById('kotak-alamat').classList.remove('green-border', 'red-border');
        document.getElementById('icon-alamat').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-alamat').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

function checkWordCountAlamat() {
    var input = document.getElementById('alamat');
    var alertBox = document.getElementById('alert-Alamat');
    if (input.value.trim().split(/\s+/).length > 100) {
        document.querySelector('.label-alamat').classList.add('red');
        document.getElementById('kotak-alamat').classList.add('red-border');
        document.getElementById('icon-alamat').classList.add('red-icon');
        document.getElementById('separator-alamat').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 100 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-alamat').classList.remove('red');
        document.getElementById('kotak-alamat').classList.remove('red-border');
        document.getElementById('icon-alamat').classList.remove('red-icon');
        document.getElementById('separator-alamat').classList.remove('red-separator');
        alertBox.classList.remove('show'); // Hide alert box if word count is within limit
    }
}











function focusSekolah() {
    document.querySelector('.label-asal-sekolah').classList.add('green');
    document.getElementById('kotak-asal-sekolah').classList.add('green-border');
    document.getElementById('icon-asal-sekolah').classList.add('green-icon');
    document.getElementById('separator-asal-sekolah').classList.add('green-separator');
}

function blurSekolah() {
    var input = document.getElementById('asal-sekolah');
    var alertBox = document.getElementById('alert-AlumniSekolah');
    if (input.value.trim() === "") {
        document.querySelector('.label-asal-sekolah').classList.add('red');
        document.getElementById('kotak-asal-sekolah').classList.add('red-border');
        document.getElementById('icon-asal-sekolah').classList.add('red-icon');
        document.getElementById('separator-asal-sekolah').classList.add('red-separator');
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-asal-sekolah').classList.remove('green', 'red');
        document.getElementById('kotak-asal-sekolah').classList.remove('green-border', 'red-border');
        document.getElementById('icon-asal-sekolah').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-asal-sekolah').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}






function focusNIM() {
    document.querySelector('.label-nim').classList.add('green');
    document.getElementById('kotak-nim').classList.add('green-border');
    document.getElementById('icon-nim').classList.add('green-icon');
    document.getElementById('separator-nim').classList.add('green-separator');
}

function blurNIM() {
    var input = document.getElementById('nim');
    var alertBox = document.getElementById('alert-NIM');
    if (input.value.trim() === "") {
        document.querySelector('.label-nim').classList.add('red');
        document.getElementById('kotak-nim').classList.add('red-border');
        document.getElementById('icon-nim').classList.add('red-icon');
        document.getElementById('separator-nim').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.length < 11) {
        document.querySelector('.label-nim').classList.add('red');
        document.getElementById('kotak-nim').classList.add('red-border');
        document.getElementById('icon-nim').classList.add('red-icon');
        document.getElementById('separator-nim').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Minimal 11 angka';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-nim').classList.remove('green', 'red');
        document.getElementById('kotak-nim').classList.remove('green-border', 'red-border');
        document.getElementById('icon-nim').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-nim').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}




function focusProgramStudi() {
    document.querySelector('.label-program-studi').classList.add('green');
    document.getElementById('kotak-program-studi').classList.add('green-border');
    document.getElementById('icon-program-studi').classList.add('green-icon');
    document.getElementById('separator-program-studi').classList.add('green-separator');
}

function blurProgramStudi() {
    var input = document.getElementById('program-studi');
    var alertBox = document.getElementById('alert-ProgramStudi');
    if (input.value.trim() === "") {
        document.querySelector('.label-program-studi').classList.add('red');
        document.getElementById('kotak-program-studi').classList.add('red-border');
        document.getElementById('icon-program-studi').classList.add('red-icon');
        document.getElementById('separator-program-studi').classList.add('red-separator');
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-program-studi').classList.remove('green', 'red');
        document.getElementById('kotak-program-studi').classList.remove('green-border', 'red-border');
        document.getElementById('icon-program-studi').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-program-studi').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

function focusKelas() {
    document.querySelector('.label-kelas').classList.add('green');
    document.getElementById('kotak-kelas').classList.add('green-border');
    document.getElementById('icon-kelas').classList.add('green-icon');
    document.getElementById('separator-kelas').classList.add('green-separator');
}

function blurKelas() {
    var input = document.getElementById('kelas');
    var alertBox = document.getElementById('alert-Kelas');
    if (input.value.trim() === "") {
        document.querySelector('.label-kelas').classList.add('red');
        document.getElementById('kotak-kelas').classList.add('red-border');
        document.getElementById('icon-kelas').classList.add('red-icon');
        document.getElementById('separator-kelas').classList.add('red-separator');
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-kelas').classList.remove('green', 'red');
        document.getElementById('kotak-kelas').classList.remove('green-border', 'red-border');
        document.getElementById('icon-kelas').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-kelas').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}









function focusAlasanBergabung() {
    document.querySelector('.label-alasan-bergabung').classList.add('green');
    document.getElementById('kotak-alasan-bergabung').classList.add('green-border');
    document.getElementById('icon-alasan-bergabung').classList.add('green-icon');
    document.getElementById('separator-alasan-bergabung').classList.add('green-separator');
}

function blurAlasanBergabung() {
    var input = document.getElementById('alasan-bergabung');
    var alertBox = document.getElementById('alert-AlasanGabung');
    if (input.value.trim() === "") {
        document.querySelector('.label-alasan-bergabung').classList.add('red');
        document.getElementById('kotak-alasan-bergabung').classList.add('red-border');
        document.getElementById('icon-alasan-bergabung').classList.add('red-icon');
        document.getElementById('separator-alasan-bergabung').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.trim().split(/\s+/).length > 200) {
        document.querySelector('.label-alasan-bergabung').classList.add('red');
        document.getElementById('kotak-alasan-bergabung').classList.add('red-border');
        document.getElementById('icon-alasan-bergabung').classList.add('red-icon');
        document.getElementById('separator-alasan-bergabung').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 200 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-alasan-bergabung').classList.remove('green', 'red');
        document.getElementById('kotak-alasan-bergabung').classList.remove('green-border', 'red-border');
        document.getElementById('icon-alasan-bergabung').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-alasan-bergabung').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

function checkWordCount() {
    var input = document.getElementById('alasan-bergabung');
    var alertBox = document.getElementById('alert-AlasanGabung');
    if (input.value.trim().split(/\s+/).length > 200) {
        document.querySelector('.label-alasan-bergabung').classList.add('red');
        document.getElementById('kotak-alasan-bergabung').classList.add('red-border');
        document.getElementById('icon-alasan-bergabung').classList.add('red-icon');
        document.getElementById('separator-alasan-bergabung').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 260 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-alasan-bergabung').classList.remove('red');
        document.getElementById('kotak-alasan-bergabung').classList.remove('red-border');
        document.getElementById('icon-alasan-bergabung').classList.remove('red-icon');
        document.getElementById('separator-alasan-bergabung').classList.remove('red-separator');
        alertBox.classList.remove('show'); // Hide alert box if word count is within limit
    }
}













function focusAlasanDivisi() {
    document.querySelector('.label-alasan-divisi').classList.add('green');
    document.getElementById('kotak-alasan-divisi').classList.add('green-border');
    document.getElementById('icon-alasan-divisi').classList.add('green-icon');
    document.getElementById('separator-alasan-divisi').classList.add('green-separator');
}

function blurAlasanDivisi() {
    var input = document.getElementById('alasan-divisi');
    var alertBox = document.getElementById('alert-AlasanDivisi');
    if (input.value.trim() === "") {
        document.querySelector('.label-alasan-divisi').classList.add('red');
        document.getElementById('kotak-alasan-divisi').classList.add('red-border');
        document.getElementById('icon-alasan-divisi').classList.add('red-icon');
        document.getElementById('separator-alasan-divisi').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.trim().split(/\s+/).length > 200) {
        document.querySelector('.label-alasan-divisi').classList.add('red');
        document.getElementById('kotak-alasan-divisi').classList.add('red-border');
        document.getElementById('icon-alasan-divisi').classList.add('red-icon');
        document.getElementById('separator-alasan-divisi').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 200 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-alasan-divisi').classList.remove('green', 'red');
        document.getElementById('kotak-alasan-divisi').classList.remove('green-border', 'red-border');
        document.getElementById('icon-alasan-divisi').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-alasan-divisi').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

function checkWordCountDivisi() {
    var input = document.getElementById('alasan-divisi');
    var alertBox = document.getElementById('alert-AlasanDivisi');
    if (input.value.trim().split(/\s+/).length > 200) {
        document.querySelector('.label-alasan-divisi').classList.add('red');
        document.getElementById('kotak-alasan-divisi').classList.add('red-border');
        document.getElementById('icon-alasan-divisi').classList.add('red-icon');
        document.getElementById('separator-alasan-divisi').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 260 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-alasan-divisi').classList.remove('red');
        document.getElementById('kotak-alasan-divisi').classList.remove('red-border');
        document.getElementById('icon-alasan-divisi').classList.remove('red-icon');
        document.getElementById('separator-alasan-divisi').classList.remove('red-separator');
        alertBox.classList.remove('show'); // Hide alert box if word count is within limit
    }
}










function focusRiwayatOrganisasi() {
    document.querySelector('.label-riwayat-organisasi').classList.add('green');
    document.getElementById('kotak-riwayat-organisasi').classList.add('green-border');
    document.getElementById('icon-riwayat-organisasi').classList.add('green-icon');
    document.getElementById('separator-riwayat-organisasi').classList.add('green-separator');
}

function blurRiwayatOrganisasi() {
    var input = document.getElementById('riwayat-organisasi');
    var alertBox = document.getElementById('alert-RiwayatOrganisasi');
    if (input.value.trim() === "") {
        document.querySelector('.label-riwayat-organisasi').classList.add('red');
        document.getElementById('kotak-riwayat-organisasi').classList.add('red-border');
        document.getElementById('icon-riwayat-organisasi').classList.add('red-icon');
        document.getElementById('separator-riwayat-organisasi').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.trim().split(/\s+/).length > 100) {
        document.querySelector('.label-riwayat-organisasi').classList.add('red');
        document.getElementById('kotak-riwayat-organisasi').classList.add('red-border');
        document.getElementById('icon-riwayat-organisasi').classList.add('red-icon');
        document.getElementById('separator-riwayat-organisasi').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 100 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-riwayat-organisasi').classList.remove('green', 'red');
        document.getElementById('kotak-riwayat-organisasi').classList.remove('green-border', 'red-border');
        document.getElementById('icon-riwayat-organisasi').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-riwayat-organisasi').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

function checkWordCountOrganisasi() {
    var input = document.getElementById('riwayat-organisasi');
    var alertBox = document.getElementById('alert-RiwayatOrganisasi');
    if (input.value.trim().split(/\s+/).length > 100) {
        document.querySelector('.label-riwayat-organisasi').classList.add('red');
        document.getElementById('kotak-riwayat-organisasi').classList.add('red-border');
        document.getElementById('icon-riwayat-organisasi').classList.add('red-icon');
        document.getElementById('separator-riwayat-organisasi').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 100 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-riwayat-organisasi').classList.remove('red');
        document.getElementById('kotak-riwayat-organisasi').classList.remove('red-border');
        document.getElementById('icon-riwayat-organisasi').classList.remove('red-icon');
        document.getElementById('separator-riwayat-organisasi').classList.remove('red-separator');
        alertBox.classList.remove('show'); // Hide alert box if word count is within limit
    }
}











function focusKelebihanSoftskill() {
    document.querySelector('.label-kelebihan-softskill').classList.add('green');
    document.getElementById('kotak-kelebihan-softskill').classList.add('green-border');
    document.getElementById('icon-kelebihan-softskill').classList.add('green-icon');
    document.getElementById('separator-kelebihan-softskill').classList.add('green-separator');
}

function blurKelebihanSoftskill() {
    var input = document.getElementById('kelebihan-softskill');
    var alertBox = document.getElementById('alert-Softskill');
    if (input.value.trim() === "") {
        document.querySelector('.label-kelebihan-softskill').classList.add('red');
        document.getElementById('kotak-kelebihan-softskill').classList.add('red-border');
        document.getElementById('icon-kelebihan-softskill').classList.add('red-icon');
        document.getElementById('separator-kelebihan-softskill').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show'); // Show alert box
    } else if (input.value.trim().split(/\s+/).length > 200) {
        document.querySelector('.label-kelebihan-softskill').classList.add('red');
        document.getElementById('kotak-kelebihan-softskill').classList.add('red-border');
        document.getElementById('icon-kelebihan-softskill').classList.add('red-icon');
        document.getElementById('separator-kelebihan-softskill').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 200 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-kelebihan-softskill').classList.remove('green', 'red');
        document.getElementById('kotak-kelebihan-softskill').classList.remove('green-border', 'red-border');
        document.getElementById('icon-kelebihan-softskill').classList.remove('green-icon', 'red-icon');
        document.getElementById('separator-kelebihan-softskill').classList.remove('green-separator', 'red-separator');
        alertBox.classList.remove('show'); // Hide alert box
    }
}

function checkWordCountSoftskill() {
    var input = document.getElementById('kelebihan-softskill');
    var alertBox = document.getElementById('alert-Softskill');
    if (input.value.trim().split(/\s+/).length > 200) {
        document.querySelector('.label-kelebihan-softskill').classList.add('red');
        document.getElementById('kotak-kelebihan-softskill').classList.add('red-border');
        document.getElementById('icon-kelebihan-softskill').classList.add('red-icon');
        document.getElementById('separator-kelebihan-softskill').classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Maksimal 200 Kata';
        alertBox.classList.add('show'); // Show alert box
    } else {
        document.querySelector('.label-kelebihan-softskill').classList.remove('red');
        document.getElementById('kotak-kelebihan-softskill').classList.remove('red-border');
        document.getElementById('icon-kelebihan-softskill').classList.remove('red-icon');
        document.getElementById('separator-kelebihan-softskill').classList.remove('red-separator');
        alertBox.classList.remove('show'); // Hide alert box if word count is within limit
    }
}














































/*====================================== checklist status mahasiswa====================================*/
function onlyOneStatus(checkbox) {
    var checkboxes = document.getElementsByName('status');
    var statusContainer = document.querySelector('.Status-Mahasiswa');
    var kotakStatus = document.getElementById('kotak-status');
    var alertElement = document.getElementById('alert-status');
    var anyChecked = false;

    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
        if (item.checked) anyChecked = true;
    });

    if (anyChecked) {
        statusContainer.classList.remove('red');
        kotakStatus.classList.remove('red');
        alertElement.classList.remove('show'); 
    } else {
        statusContainer.classList.add('red');
        kotakStatus.classList.add('red');
        alertElement.classList.add('show'); 
    }
}











/*====================================== checklist devisi mekanik====================================*/
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('divisi-mekanik');
    var alertBox = document.getElementById('alert-DevisiMekanik');
    var statusContainer = document.querySelector('.form-group-Divisi-Mekanik');
    var kotakDivisi = document.getElementById('kotak-divisi-Mekanik');


    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });


    var anyChecked = Array.from(checkboxes).some(item => item.checked);

    if (anyChecked) {
        statusContainer.classList.remove('red');
        kotakDivisi.classList.remove('red');
        alertBox.classList.remove('show');
    } else {
        statusContainer.classList.add('red');
        kotakDivisi.classList.add('red');
        alertBox.classList.add('show');
    }

 
    checkboxes.forEach((item) => {
        var label = document.querySelector('label[for="' + item.id + '"]');
        if (item.checked) {
            label.style.color = 'green';
        } else {
            label.style.color = 'var(--Abu)';
        }
    });
}




/*====================================== checklist devisi non mekanik====================================*/
function onlyOneNonMekanik(checkbox) {
    var checkboxes = document.getElementsByName('divisi-nonmekanik');
    var alertBox = document.getElementById('alert-DevisiNonMekanik');
    var statusContainer = document.querySelector('.form-group-Divisi-NonMekanik');
    var kotakDivisi = document.getElementById('kotak-divisi-nonmekanik');


    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });


    var anyChecked = Array.from(checkboxes).some(item => item.checked);

    if (anyChecked) {
        statusContainer.classList.remove('red');
        kotakDivisi.classList.remove('red');
        alertBox.classList.remove('show');
    } else {
        statusContainer.classList.add('red');
        kotakDivisi.classList.add('red');
        alertBox.classList.add('show');
    }


    checkboxes.forEach((item) => {
        var label = document.querySelector('label[for="' + item.id + '"]');
        if (item.checked) {
            label.style.color = 'green';
        } else {
            label.style.color = 'var(--Abu)';
        }
    });
}






















function checkWordCountAlamat() {
    checkWordCount('alamat', 'label-alamat', 'alert-Alamat', 100);
}

function checkWordCountAlasanBergabung() {
    checkWordCount('alasan-bergabung', 'label-alasan-bergabung', 'alert-AlasanGabung', 200);
}

function checkWordCountDivisi() {
    checkWordCount('alasan-divisi', 'label-alasan-divisi', 'alert-AlasanDivisi', 200);
}

function checkWordCountOrganisasi() {
    checkWordCount('riwayat-organisasi', 'label-riwayat-organisasi', 'alert-RiwayatOrganisasi', 100);
}

function checkWordCountSoftskill() {
    checkWordCount('kelebihan-softskill', 'label-kelebihan-softskill', 'alert-Softskill', 200);
}









/*====================================== validasi form belum terkirim====================================*/
function validateForm() {
    var inputs = [
        { id: 'nama-lengkap', validate: blurFunction },
        { id: 'email', validate: blurEmail },
        { id: 'nomor-hp', validate: blurHp },
        { id: 'alamat', validate: blurAlamat },
        { id: 'asal-sekolah', validate: blurSekolah },
        { id: 'nim', validate: blurNIM },
        { id: 'program-studi', validate: blurProgramStudi },
        { id: 'kelas', validate: blurKelas },
        { id: 'alasan-bergabung', validate: blurAlasanBergabung },
        { id: 'alasan-divisi', validate: blurAlasanDivisi },
        { id: 'riwayat-organisasi', validate: blurRiwayatOrganisasi },
        { id: 'kelebihan-softskill', validate: blurKelebihanSoftskill }
    ];

    var firstInvalidElement = null;
    var allInputsValid = true;

    inputs.forEach(function(input) {
        var element = document.getElementById(input.id);
        if (element && element.value.trim() === "") {
            input.validate(); // Trigger validation
            if (!firstInvalidElement) firstInvalidElement = element;
            allInputsValid = false;
        } else if (input.id === 'nim' && element.value.length < 11) {
            blurNIM();
            if (!firstInvalidElement) firstInvalidElement = element;
            allInputsValid = false;
        } else if (input.id === 'nomor-hp' && element.value.length < 10) {
            blurHp();
            if (!firstInvalidElement) firstInvalidElement = element;
            allInputsValid = false;
        } else if (input.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)) {
            blurEmail();
            if (!firstInvalidElement) firstInvalidElement = element;
            allInputsValid = false;
        }
    });

    var statusValid = checkCheckboxGroup('status', 'Status-Mahasiswa', 'alert-status', 'kotak-status');
    var divisiMekanikValid = checkCheckboxGroup('divisi-mekanik', 'form-group-Divisi-Mekanik', 'alert-DevisiMekanik', 'kotak-divisi-Mekanik');
    var divisiNonMekanikValid = checkCheckboxGroup('divisi-nonmekanik', 'form-group-Divisi-NonMekanik', 'alert-DevisiNonMekanik', 'kotak-divisi-nonmekanik');

    var wordCountValid = true;
    wordCountValid &= checkWordCount('alamat', 'label-alamat', 'alert-Alamat', 100);
    wordCountValid &= checkWordCount('alasan-bergabung', 'label-alasan-bergabung', 'alert-AlasanGabung', 200);
    wordCountValid &= checkWordCount('alasan-divisi', 'label-alasan-divisi', 'alert-AlasanDivisi', 200);
    wordCountValid &= checkWordCount('riwayat-organisasi', 'label-riwayat-organisasi', 'alert-RiwayatOrganisasi', 100);
    wordCountValid &= checkWordCount('kelebihan-softskill', 'label-kelebihan-softskill', 'alert-Softskill', 200);

    allInputsValid = allInputsValid && statusValid && divisiMekanikValid && divisiNonMekanikValid && wordCountValid;

    if (allInputsValid) {
        updateValidationMessage(true);
    } else {
        if (firstInvalidElement) {
            firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInvalidElement.focus();
        }
        updateValidationMessage(false);
    }
}

function checkWordCount(id, labelClass, alertId, limit) {
    var input = document.getElementById(id);
    var alertBox = document.getElementById(alertId);
    var wordCount = input.value.trim().split(/\s+/).length;
    var isEmpty = input.value.trim() === "";
    var isValid = wordCount <= limit;

    if (isEmpty) {
        document.querySelector(`.${labelClass}`).classList.add('red');
        document.getElementById(`kotak-${id}`).classList.add('red-border');
        document.getElementById(`icon-${id}`).classList.add('red-icon');
        document.getElementById(`separator-${id}`).classList.add('red-separator');
        alertBox.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Harap isi form ini';
        alertBox.classList.add('show');
        isValid = false;
    } else if (!isValid) {
        document.querySelector(`.${labelClass}`).classList.add('red');
        document.getElementById(`kotak-${id}`).classList.add('red-border');
        document.getElementById(`icon-${id}`).classList.add('red-icon');
        document.getElementById(`separator-${id}`).classList.add('red-separator');
        alertBox.innerHTML = `<ion-icon name="alert-circle-outline"></ion-icon> Maksimal ${limit} Kata`;
        alertBox.classList.add('show');
    } else {
        document.querySelector(`.${labelClass}`).classList.remove('red');
        document.getElementById(`kotak-${id}`).classList.remove('red-border');
        document.getElementById(`icon-${id}`).classList.remove('red-icon');
        document.getElementById(`separator-${id}`).classList.remove('red-separator');
        alertBox.classList.remove('show');
    }

    return isValid;
}

function checkCheckboxGroup(groupName, containerClass, alertId, inputContainerId) {
    var checkboxes = document.getElementsByName(groupName);
    var container = document.querySelector(`.${containerClass}`);
    var alertBox = document.getElementById(alertId);
    var inputContainer = document.getElementById(inputContainerId);
    var isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isAnyChecked) {
        container.classList.add('red');
        alertBox.classList.add('show');
        inputContainer.classList.add('red');
        Array.from(checkboxes).forEach(checkbox => {
            checkbox.classList.add('black-border');
        });
        return false;
    } else {
        container.classList.remove('red');
        alertBox.classList.remove('show');
        inputContainer.classList.remove('red');
        Array.from(checkboxes).forEach(checkbox => {
            checkbox.classList.remove('red-border');
        });
        return true;
    }
}

function updateValidationMessage(isValid) {
    var messageBox = document.getElementById('form-validation-message');
    if (isValid) {
        messageBox.innerHTML = "Formulir sudah valid!";
        messageBox.style.color = "green";
    } else {
        messageBox.innerHTML = "Isi formulir dengan lengkap!";
        messageBox.style.color = "red";
    }
    messageBox.classList.add('show');
}













































        /*====================================== overlay bantuan ====================================*/
        document.getElementById('helpCentreButton').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('overlayBantuan').style.display = 'flex';
        });

        document.getElementById('closeBantuan').addEventListener('click', function() {
            document.getElementById('overlayBantuan').style.display = 'none';
        });

        document.getElementById('overlayBantuan').addEventListener('click', function(event) {
            if (event.target === this) {
                document.getElementById('overlayBantuan').style.display = 'none';
            }
        });

        /*====================================== overlay pertanyaan ====================================*/
        document.getElementById('contactButton').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('overlaypertanyaan').style.display = 'flex';
        });

        document.getElementById('tanyaButton').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('overlaypertanyaan').style.display = 'flex';
        });

        document.getElementById('closepertanyaan').addEventListener('click', function() {
            document.getElementById('overlaypertanyaan').style.display = 'none';
        });

        document.getElementById('overlaypertanyaan').addEventListener('click', function(event) {
            if (event.target === this) {
                this.style.display = 'none';
            }
        });







        /*====================================== overlay Refresh ====================================*/
        // Flag to track if refresh should proceed
        let allowRefresh = false;

        // Get elements
        const overlayRefresh = document.getElementById('overlayRefresh');
        const btnLeave = document.getElementById('btnLeave');
        const btnCancel = document.getElementById('btnCancel');
        const closeRefresh = document.getElementById('closeRefresh');

        // Function to prevent default action and show overlay
        function preventRefresh(e) {
            if (!allowRefresh) {
                e.preventDefault();
                overlayRefresh.style.display = 'flex';
                e.returnValue = ''; // Required for some browsers
                return '';
            }
        }

        // Show confirmation dialog when the user tries to close or refresh the page
        window.addEventListener('beforeunload', preventRefresh);

        // Handle "Tinggalkan" button click
        btnLeave.addEventListener('click', function() {
            allowRefresh = true;
            window.location.reload();
        });

        // Handle "Batal" button and close icon click
        btnCancel.addEventListener('click', function() {
            overlayRefresh.style.display = 'none';
        });

        closeRefresh.addEventListener('click', function() {
            overlayRefresh.style.display = 'none';
        });






















        // Function to redirect to the loading page
function redirectToLoadingPage() {
    var currentUrl = window.location.href;
    var loadingUrl = "Loading/Loading.html"; // Adjust this path as needed

    // Store the current URL and set the flag for redirection
    sessionStorage.setItem("loadingRedirect", "true");
    window.location.href = loadingUrl + "?from=" + encodeURIComponent(currentUrl);
}

// Event listener for detecting refresh
window.addEventListener("beforeunload", function (event) {
    // Set the flag only if not from the loading page
    if (!new URLSearchParams(window.location.search).has("from")) {
        sessionStorage.setItem("refresh", "true");
    }
});

// Check when the page loads
document.addEventListener("DOMContentLoaded", function () {
    var isRefreshed = sessionStorage.getItem("refresh") === "true";
    var isFromLoadingPage = new URLSearchParams(window.location.search).has("from");
    var hasRedirectedToLoading = sessionStorage.getItem("loadingRedirect") === "true";
    var isNewSession = !sessionStorage.getItem("hasVisited");

    // Mark the session as visited
    sessionStorage.setItem("hasVisited", "true");

    // Remove the refresh flag after checking
    sessionStorage.removeItem("refresh");

    // Redirect to the loading page if the page is refreshed, opened in a new tab, or not from the loading page
    if ((isRefreshed || isNewSession) && !isFromLoadingPage && !hasRedirectedToLoading) {
        redirectToLoadingPage();
    } else if (isFromLoadingPage) {
        // Clean up session storage and URL parameters after redirection
        sessionStorage.removeItem("loadingRedirect");
        var cleanUrl = window.location.href.split("?")[0];
        window.history.replaceState({}, document.title, cleanUrl);
    } else if (hasRedirectedToLoading) {
        // Ensure the flag is removed after redirection to prevent repeat refresh
        sessionStorage.removeItem("loadingRedirect");
    }
});

