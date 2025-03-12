function locMang(mang) {
  if (!Array.isArray(mang) || mang.some(isNaN)) {
    return "Dữ liệu không hợp lệ";
  }
  const ketQua = mang.filter((num) => num >= 10);
  return ketQua.length ? ketQua : "Mảng không có phần tử nào";
}
