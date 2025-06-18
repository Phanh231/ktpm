package web_qltv.src.model;
public class Book{
    public String masach;
    public String tensach;
    public String tacgia;
    public boolean trangthaiMuon;
    
    public Book(String masach,String tensach, String tacgia){
        this.masach = masach;
        this.tensach = tensach;
        this.tacgia = tacgia;
        this.trangthaiMuon = false;
    }
    public String getMasach(){ return masach;}
    public String getTensach(){ return tensach;}
    public String getTacgia(){ return tacgia;}
    public boolean trangthaiMuon(){ return trangthaiMuon;}
    public void muonsach(){
        trangthaiMuon = true;
    }
    public void trasach(){
        trangthaiMuon = false;
    }
    public void displayInfo(){
        String trangthai;
        if(trangthaiMuon) 
             trangthai = "'Da duoc muon'";
        else 
             trangthai = "'co san'";
        System.out.println("[" +masach+ "]" +tensach+ "-" + trangthai);
    }
}