package br.univille;
import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;

public class App { 
    public static void main(String[] args) {

        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa Catarina");

        Pokemon bulbasaur = new Pokemon("Bulbasaur");
        Pokemon clarefairy = new Pokemon("Clarefairy");

        Pessoa zezinho = new Pessoa("zezinho"); /* Cria uma instancia do objeto pessoa (materialização da classe, uma referencia)) */
        zezinho.setNome("Zezinho"); /*Passando o nome para a variavel */
        zezinho.setCidade(joinville);
        zezinho.getListaPokemon().add(bulbasaur);
        zezinho.getListaPokemon().add(clarefairy);

        for(var umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }


        System.out.println(zezinho);
    }
}
