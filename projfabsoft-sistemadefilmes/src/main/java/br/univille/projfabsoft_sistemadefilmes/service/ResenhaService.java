package br.univille.projfabsoft_sistemadefilmes.service;

import java.util.List;
import br.univille.projfabsoft_sistemadefilmes.entity.Resenha;

public interface ResenhaService {
    Resenha save(Resenha resenha);
    List<Resenha> getAll();
    Resenha getById(long id);
    Resenha delete(long id);
}