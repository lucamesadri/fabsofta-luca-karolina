package br.univille.projfabsoft_sistemadefilmes.service;

import java.util.List;
import br.univille.projfabsoft_sistemadefilmes.entity.Amizade;

public interface AmizadeService {
    Amizade save(Amizade amizade);
    List<Amizade> getAll();
    Amizade getById(long id);
    Amizade delete(long id);
}