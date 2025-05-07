package br.univille.projfabsoft_sistemadefilmes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoft_sistemadefilmes.entity.Amizade;
import br.univille.projfabsoft_sistemadefilmes.repository.AmizadeRepository;
import br.univille.projfabsoft_sistemadefilmes.service.AmizadeService;

@Service
public class AmizadeServiceImpl implements AmizadeService {

    @Autowired
    private AmizadeRepository repository;

    @Override
    public Amizade save(Amizade amizade) {
        return repository.save(amizade);
    }

    @Override
    public List<Amizade> getAll() {
        return repository.findAll();
    }

    @Override
    public Amizade getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent()) return retorno.get();
        return null;
    }

    @Override
    public Amizade delete(long id) {
        var amizade = getById(id);
        if (amizade != null) repository.deleteById(id);
        return amizade;
    }
}