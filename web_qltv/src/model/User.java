package web_qltv.src.model;

public class User {
    private String id;
    private String name;

    public User(String id, String name){
        this.id = id;
        this.name = name;
    }
    public String getName(){ return name; }
    
    public void displayInfo(){
        System.out.println("["+ id +"]" + name);
    }
}
