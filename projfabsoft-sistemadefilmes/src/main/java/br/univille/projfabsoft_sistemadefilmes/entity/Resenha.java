package br.univille.projfabsoft_sistemadefilmes.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Resenha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String texto;
    private LocalDate data;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Filme filme;

    // Getters e Setters
}