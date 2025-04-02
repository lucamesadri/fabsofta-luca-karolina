package br.univille.projfabsoft_sistemadefilmes.entity;

import jakarta.persistence.*;

@Entity
public class Amizade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Usuario solicitante;

    @ManyToOne
    private Usuario solicitado;

    private String status;

    // Getters e Setters
}