function locChuoiLonHon5KyTu(mang) {
  if (!Array.isArray(mang) || mang.some((item) => typeof item !== "string")) {
    return "Dữ liệu không hợp lệ";
  }
  const ketQua = mang.filter((chuoi) => chuoi.length > 5);
  return ketQua.length ? ketQua : "Mảng không có phần tử nào";
}
