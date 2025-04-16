package br.univille.projfabsoft_sistemadefilmes.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 1000, nullable = false)
    private String nome;
    private String email;
    private String senha;

    @OneToMany(mappedBy = "usuario", cascade ={CascadeType.MERGE, CascadeType.REFRESH})
    private List<Avaliacao> avaliacoes;

    @OneToMany(mappedBy = "usuario", cascade ={CascadeType.MERGE, CascadeType.REFRESH})
    private List<Resenha> resenhas;

    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
    private List<Usuario> amigos;

    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
    private List<Filme> watchlist;

    // Getters e Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<Avaliacao> getAvaliacoes() {
        return avaliacoes;
    }

    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        this.avaliacoes = avaliacoes;
    }

    public List<Resenha> getResenhas() {
        return resenhas;
    }

    public void setResenhas(List<Resenha> resenhas) {
        this.resenhas = resenhas;
    }

    public List<Usuario> getAmigos() {
        return amigos;
    }

    public void setAmigos(List<Usuario> amigos) {
        this.amigos = amigos;
    }

    public List<Filme> getWatchlist() {
        return watchlist;
    }

    public void setWatchlist(List<Filme> watchlist) {
        this.watchlist = watchlist;
    }
}