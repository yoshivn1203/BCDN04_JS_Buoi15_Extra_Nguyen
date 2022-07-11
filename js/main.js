tinhThue = () => {
  let name = document.getElementById('inputTen').value,
    income = document.getElementById('inputLuong').value,
    soNguoi = document.getElementById('soNguoi').value,
    taxedIncome = income - 4e6 - 16e5 * soNguoi,
    tax;
  taxedIncome > 0 && taxedIncome <= 6e7
    ? (tax = 0.05 * taxedIncome)
    : taxedIncome > 6e7 && taxedIncome <= 12e7
    ? (tax = 0.1 * taxedIncome)
    : taxedIncome > 12e7 && taxedIncome <= 21e7
    ? (tax = 0.15 * taxedIncome)
    : taxedIncome > 21e7 && taxedIncome <= 384e6
    ? (tax = 0.2 * taxedIncome)
    : taxedIncome > 384e6 && taxedIncome <= 624e6
    ? (tax = 0.25 * taxedIncome)
    : taxedIncome > 624e6 && taxedIncome <= 96e7
    ? (tax = 0.3 * taxedIncome)
    : taxedIncome > 96e7
    ? (tax = 0.35 * taxedIncome)
    : alert('Số tiền không hợp lệ'),
    (tax = new Intl.NumberFormat('vn-VN').format(tax)),
    (document.getElementById(
      'ketQua1'
    ).innerHTML = `Họ tên: ${name}; Tiền thuế: ${tax} VND`);
};

tinhTienCap = () => {
  let loaiKhach = document.getElementById('loaiKhachHang').value,
    maKhach = document.getElementById('inputMa').value,
    soKenh = document.getElementById('inputSoKenh').value,
    soKetNoi = document.getElementById('inputSoKetNoi').value,
    cuocPhi;
  loaiKhach == 'doanhNghiep'
    ? soKetNoi < 10
      ? (cuocPhi = 15 + 75 + 50 * soKenh)
      : (cuocPhi = 15 + 75 + 50 * soKenh + (soKetNoi - 10) * 5)
    : loaiKhach == 'nhaDan'
    ? (cuocPhi = 4.5 + 20.5 + 7.5 * soKenh)
    : alert('Hãy chọn loại khách hàng');

  cuocPhi = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cuocPhi);

  document.getElementById(
    'ketQua2'
  ).innerHTML = `Mã khách hàng: ${maKhach}; Tiền cáp: ${cuocPhi}`;
};

hideForm = () => {
  let e = document.getElementById('loaiKhachHang').value;
  document.getElementById('inputSoKetNoi').style.display =
    'doanhNghiep' == e ? 'block' : 'none';
};

document.getElementById('btnTinhThue').onclick = tinhThue;
document.getElementById('btnTinhTien').onclick = tinhTienCap;
