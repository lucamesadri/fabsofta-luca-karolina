package br.univille.projfabsoft_sistemadefilmes.entity;

import jakarta.persistence.*;

@Entity
public class Amizade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
    private Usuario solicitante;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
    private Usuario solicitado;

    private String status;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getSolicitante() {
        return solicitante;
    }

    public void setSolicitante(Usuario solicitante) {
        this.solicitante = solicitante;
    }

    public Usuario getSolicitado() {
        return solicitado;
    }

    public void setSolicitado(Usuario solicitado) {
        this.solicitado = solicitado;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}