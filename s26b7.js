function xuLyMang(mang) {
  if (!Array.isArray(mang) || mang.some(isNaN)) {
    return "Dữ liệu không hợp lệ";
  }
  if (mang.length === 0) {
    return "Mảng không có dữ liệu";
  }
  let binhPhuong = mang.map((num) => num ** 2);
  let ketQua = binhPhuong.filter((num) => num % 2 === 0);
  return ketQua;
}
