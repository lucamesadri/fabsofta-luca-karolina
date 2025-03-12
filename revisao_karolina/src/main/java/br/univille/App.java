package br.univille;
public class App { 
    public static void main(String[] args) {
        Pessoa zezinho = new Pessoa("zezinho"); /* Cria uma instancia do objeto pessoa (materialização da classe, uma referencia)) */
        zezinho.setNome("Zezinho"); /*Passando o nome para a variavel */

        System.out.println(zezinho);
    }
}
