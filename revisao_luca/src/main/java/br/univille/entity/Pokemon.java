package br.univille.entity;

public class Pokemon {
    private String nome;

    public Pokemon(String nome){
        this.nome = nome;
    }

    @Override
    public String toString(){
        return this.nome;
    }

}
