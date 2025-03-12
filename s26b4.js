function locSoNguyenTo(mang) {
  function kiemTraNguyenTo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  if (!Array.isArray(mang) || mang.some(isNaN)) {
    return "Dữ liệu không hợp lệ";
  }
  const ketQua = mang.filter(kiemTraNguyenTo);
  return ketQua.length ? ketQua : "Mảng không có phần tử nào";
}
