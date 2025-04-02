package br.univille.projfabsoft_sistemadefilmes.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int nota;
    private String comentario;
    private LocalDate data;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Filme filme;

    // Getters e Setters
}