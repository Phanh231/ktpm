// Tìm kiếm sách
function searchBook() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#book-table tr");

  rows.forEach(row => {
    const bookName = row.children[0].textContent.toLowerCase();
    row.style.display = bookName.includes(input) ? "" : "none";
  });
}

// Mượn sách

// Mảng lưu sách đã mượn
let borrowedBooks = [];

// Lấy tất cả các nút "Mượn sách" trong bảng chính
document.addEventListener("DOMContentLoaded", function () {
  const borrowButtons = document.querySelectorAll("button[class^='ms']");

  borrowButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      const tenSach = row.cells[0].textContent;
      const maSach = row.cells[1].textContent;

      // Kiểm tra sách đã được mượn chưa
      const exists = borrowedBooks.find(book => book.ma === maSach);
      if (exists) {
        alert("Bạn đã mượn sách này rồi!");
        return;
      }

      // Thêm sách vào mảng
      borrowedBooks.push({ ten: tenSach, ma: maSach });

      // Cập nhật bảng sách mượn
      updateBorrowedTable();
    });
  });
});

// Cập nhật bảng "sách đã mượn"
function updateBorrowedTable() {
  const tbody = document.querySelector("#borrowed-table tbody");
  tbody.innerHTML = ""; // xóa 

  borrowedBooks.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.ten}</td>
      <td>${book.ma}</td>
      <td><button class="return-btn" onclick="returnBook(${index})">Trả sách</button></td>
    `;

    tbody.appendChild(row);
  });
}

// Trả sách (xóa khỏi danh sách mượn)
function returnBook(index) {
  if (confirm("Bạn có chắc muốn trả sách này không?")) {
    borrowedBooks.splice(index, 1);
    updateBorrowedTable();
  }
}

// Ẩn/hiện danh sách mượn
function xem() {
  const xemDiv = document.getElementById("xem_sach_muon");
  if (xemDiv.style.display === "none" || xemDiv.style.display === "") {
    xemDiv.style.display = "block";
  } else {
    xemDiv.style.display = "none";
  }
}
