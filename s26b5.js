function timSoLonNhatVaViTri(mang) {
  if (!Array.isArray(mang) || mang.some(isNaN)) {
    return "Dữ liệu không hợp lệ";
  }
  if (mang.length === 0) {
    return "Mảng không có dữ liệu";
  }
  let max = mang[0];
  let viTri = 0;
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max) {
      max = mang[i];
      viTri = i;
    }
  }
  return `max = ${max} \n position = ${viTri}`;
}
