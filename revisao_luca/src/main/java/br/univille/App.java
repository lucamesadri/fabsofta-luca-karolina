package br.univille;

public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //Instância de um objeto
        //Quando você cria um objeto, você está instanciando uma classe
        //Pessoa é a classe
        //zezinho é o objeto
        Pessoa zezinho = new Pessoa("Zezinho");
        zezinho.setNome("Zezinho");

        System.out.println(zezinho);
    }
}
