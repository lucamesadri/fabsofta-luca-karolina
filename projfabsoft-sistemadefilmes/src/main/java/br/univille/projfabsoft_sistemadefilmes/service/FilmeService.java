package br.univille.projfabsoft_sistemadefilmes.service;

import java.util.List;

import br.univille.projfabsoft_sistemadefilmes.entity.Filme;

public interface FilmeService {
    Filme save(Filme filme);
    List<Filme> getAll();
    Filme getById(long id);
    Filme delete(long id);
}
