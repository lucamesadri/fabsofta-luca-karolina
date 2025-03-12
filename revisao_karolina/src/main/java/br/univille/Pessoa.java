package br.univille;
public class Pessoa {
                    /*informação*/
    private String nome; //*Variavel, atributo, propriedade */

    /*/Construtor */ /*/Tipo especial dentro do codigo, para obrigar uma pessoa a inserir uma informação */
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
    /*/Sobreescrita de metódo */
    // public String toString(){
    //     return getNome();
    // }
}


