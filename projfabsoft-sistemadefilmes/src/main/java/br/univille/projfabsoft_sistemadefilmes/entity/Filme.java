package br.univille.projfabsoft_sistemadefilmes.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String genero;
    private int anoLancamento;
    private String elenco;

    @OneToMany(mappedBy = "filme")
    private List<Avaliacao> avaliacoes;

    @OneToMany(mappedBy = "filme")
    private List<Resenha> resenhas;

    // Getters e Setters
}