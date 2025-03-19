package br.univille.entity;

public class Pokemon {

    private String nome;


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
        
    }

    public Pokemon(String nome) {/*construtor */
        this.nome = nome;
    }

    public String toString(){
        return this.nome;
    }
}
