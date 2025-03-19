package br.univille;
import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;

public class App { 
    public static void main(String[] args) {

        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa Catarina");

        Pessoa zezinho = new Pessoa("zezinho"); /* Cria uma instancia do objeto pessoa (materialização da classe, uma referencia)) */
        zezinho.setNome("Zezinho"); /*Passando o nome para a variavel */
        zezinho.setCidade(joinville);
        System.out.println(zezinho);
    }
}
