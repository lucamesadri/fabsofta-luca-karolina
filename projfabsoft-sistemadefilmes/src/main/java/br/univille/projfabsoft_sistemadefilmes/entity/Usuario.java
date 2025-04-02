package br.univille.projfabsoft_sistemadefilmes.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;

    @OneToMany(mappedBy = "usuario")
    private List<Avaliacao> avaliacoes;

    @OneToMany(mappedBy = "usuario")
    private List<Resenha> resenhas;

    @ManyToMany
    private List<Usuario> amigos;

    @ManyToMany
    private List<Filme> watchlist;

    // Getters e Setters
}