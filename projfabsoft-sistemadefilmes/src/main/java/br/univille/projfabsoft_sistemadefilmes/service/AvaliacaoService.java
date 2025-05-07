package br.univille.projfabsoft_sistemadefilmes.service;

import java.util.List;
import br.univille.projfabsoft_sistemadefilmes.entity.Avaliacao;

public interface AvaliacaoService {
    Avaliacao save(Avaliacao avaliacao);
    List<Avaliacao> getAll();
    Avaliacao getById(long id);
    Avaliacao delete(long id);
}