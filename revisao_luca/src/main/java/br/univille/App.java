package br.univille;

import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;

public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //Instância de um objeto
        //Quando você cria um objeto, você está instanciando uma classe
        //Pessoa é a classe
        //zezinho é o objeto

        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa Catarina");
        Pessoa zezinho = new Pessoa("Zezinho");
        zezinho.setNome("Zezinho");
        zezinho.setCidade(joinville);

        System.out.println(zezinho);
    }
}
