// Tìm kiếm sách
function searchBook() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#book-table tr");
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}

// Tạo mới sách
function createBook() {
  const ten = prompt("Nhập tên sách:");
  const ma = prompt("Nhập mã sách:");
  const tgia = prompt("Nhập tên tác giả:");

  if (ten && ma && tgia) {
    const table = document.getElementById("book-table");
    const row = table.insertRow();
    row.innerHTML = `
      <td>${ten}</td>
      <td>${ma}</td>
      <td>${tgia}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    attachRowEvents(row);
  }
}

// Sửa sách
function editBook(btn) {
  const row = btn.closest("tr");
  const ten = prompt("Sửa tên sách:", row.cells[0].innerText);
  const ma = prompt("Sửa mã sách:", row.cells[1].innerText);
  const tgia = prompt("Sửa tác giả:", row.cells[2].innerText);

  if (ten && ma && tgia) {
    row.cells[0].innerText = ten;
    row.cells[1].innerText = ma;
    row.cells[2].innerText = tgia;
  }
}

// Xóa sách
function deleteBook(btn) {
  if (confirm("Bạn có chắc muốn xóa sách này không?")) {
    const row = btn.closest("tr");
    row.remove();
  }
}

// Gắn sự kiện cho từng dòng
function attachRowEvents(row) {
  row.querySelector(".edit-btn").onclick = function () {
    editBook(this);
  };
  row.querySelector(".delete-btn").onclick = function () {
    deleteBook(this);
  };
}

// Gắn sự kiện cho các nút đã có sẵn trong HTML
document.querySelectorAll("#book-table tr").forEach(row => {
  attachRowEvents(row);
});

// Xử lý logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "index.html";//đăng xuất
  
});
