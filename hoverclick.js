const button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
  moveButton(); // Bắt đầu di chuyển nút khi hover vào
});

function moveButton() {
  // Lấy kích thước màn hình
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Tạo toạ độ ngẫu nhiên cho nút (khoảng cách tối đa của nút không vượt ra ngoài màn hình)
  const randomX = Math.random() * (screenWidth - button.offsetWidth); // Tọa độ X ngẫu nhiên
  const randomY = Math.random() * (screenHeight - button.offsetHeight); // Tọa độ Y ngẫu nhiên

  // Di chuyển nút đến vị trí ngẫu nhiên
  button.style.transform = `translate(${randomX}px,${randomY}px)`;
}
