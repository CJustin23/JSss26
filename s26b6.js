function dinhDangNgay(mang) {
  if (!Array.isArray(mang) || mang.some((item) => typeof item !== "string")) {
    return "Dữ liệu không hợp lệ";
  }
  const ketQua = mang.map((chuoiNgay) => {
    const phanTu = chuoiNgay.split("-");
    if (phanTu.length === 3) {
      const [nam, thang, ngay] = phanTu;
      return `${ngay}/${thang}/${nam}`;
    } else {
      return "Mảng sai";
    }
  });
  if (ketQua.every((chuoi) => chuoi === "Mảng sai")) {
    return "Mảng không có phần tử nào";
  }

  return ketQua;
}
