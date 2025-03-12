function locEmailHopLe(mang) {
  if (!Array.isArray(mang) || mang.some((item) => typeof item !== "string")) {
    return "Dữ liệu không hợp lệ";
  }
  const ketQua = mang.filter(
    (email) => email.includes("@") && !email.includes(" ")
  );

  return ketQua.length ? ketQua : "Mảng không có phần tử nào";
}
