package br.univille.entity;
import java.util.ArrayList;

public class Pessoa {
                    /*informação*/
    private String nome; //*Variavel, atributo, propriedade */
    private Long id;
    private String endereco;
    private Cidade cidade;

    private ArrayList listaPokemon = new ArrayList<Pokemon>(); /*<> genericios, tipo do dado da lista */

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEndereco() {
        return endereco;
    }

    
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    /*/Construtor */
     /*/Tipo especial dentro do codigo, para obrigar uma pessoa a inserir uma informação */
    public Pessoa(String nome) { /*/CTOR ESECREVE ISSO AQUI AUTOAMTICO <- */
        this.nome = nome; /*/ sempre se referencia a classe */
    }
    public Pessoa() {
    /*POLIMORFISMO: Tira a obrigatoriedade de passar 
    o nome da Pessoa. Dois metodo com a assinatura semelhante. */
    }

    /*Método */
    public String getNome() {
        return nome; /*ação ou comportamento */
    }
    public void setNome(String nome) { /*variavel guarda a info, o metódo guarda a ação */
        this.nome = nome;
    }
  
     public String toString(){
         return getNome();
    }

    public ArrayList<Pokemon> getListaPokemon() {
        return listaPokemon;
    }

    public void setListaPokemon(ArrayList<Pokemon> listaPokemon) {
        this.listaPokemon = listaPokemon;
    }

}


