package web_qltv.test;
import web_qltv.src.model.Book;
import web_qltv.src.model.CRUD;

public class TestCRUD {
    public static void main(String[] args) {
       CRUD crud = new CRUD();

        // Thêm sách
        System.out.println("=== Thêm sách ===");
        crud.addBook(new Book("B001", "Lập trình Java", "phenikaa"));
        crud.addBook(new Book("B002", "Cấu trúc dữ liệu", "phenikaa"));
        crud.addBook(new Book("B003", "Hệ điều hành", "phenikaa"));
        crud.printUserBook();

        // Sửa sách
        System.out.println("\n=== Sửa tên sách B002 ===");
        crud.getEditBook("B002", "Giải thuật và cấu trúc dữ liệu");
        crud.printUserBook();

        // Xoá sách
        System.out.println("\n=== Xóa sách B003 ===");
        crud.getDeleBook("B003");
        crud.printUserBook();

        // Kiểm tra sửa không tồn tại
        System.out.println("\n=== Thử sửa sách không tồn tại ===");
        crud.getEditBook("B999", "Không tồn tại");

        // Kiểm tra xóa không tồn tại
        System.out.println("\n=== Thử xóa sách không tồn tại ===");
        crud.getDeleBook("B999");
    }
}
