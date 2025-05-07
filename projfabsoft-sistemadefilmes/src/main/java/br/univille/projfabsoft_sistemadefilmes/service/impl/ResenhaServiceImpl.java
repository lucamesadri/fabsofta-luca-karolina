package br.univille.projfabsoft_sistemadefilmes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoft_sistemadefilmes.entity.Resenha;
import br.univille.projfabsoft_sistemadefilmes.repository.ResenhaRepository;
import br.univille.projfabsoft_sistemadefilmes.service.ResenhaService;

@Service
public class ResenhaServiceImpl implements ResenhaService {

    @Autowired
    private ResenhaRepository repository;

    @Override
    public Resenha save(Resenha resenha) {
        return repository.save(resenha);
    }

    @Override
    public List<Resenha> getAll() {
        return repository.findAll();
    }

    @Override
    public Resenha getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent()) return retorno.get();
        return null;
    }

    @Override
    public Resenha delete(long id) {
        var resenha = getById(id);
        if (resenha != null) repository.deleteById(id);
        return resenha;
    }
}