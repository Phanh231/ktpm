package web_qltv.src.model;
import java.util.ArrayList;

public class CRUD{
    ArrayList<Book> list= new ArrayList<Book>(); // them danh sach
    public ArrayList<Book> addBook(Book crud){
        list.add(crud);
        return list;
    }

// sua sach

    public ArrayList<Book> getEditBook(String masach,String tensach ){  
        for(int i=0; i < list.size(); i++){
            if(list.get(i).masach == masach){
                System.out.print("true");
                list.get(i).tensach= tensach; 
            }
            
        }
        return list;
    }
// xoa sach
    public ArrayList<Book> getDeleBook(String ms){
        for(int i=0; i< list.size(); i++){
            if(list.get(i).masach == ms){
            list.remove(i);
        }
      } return list;
    }

 // doc
public void printUserBook(){
    int len = list.size();
    for(int i=0; i< len; i++){
        System.out.println("[" +list.get(i).masach + "]" +list.get(i).tensach+ "-" + list.get(i).tacgia);
    }
 }
}