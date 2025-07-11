package br.univille.projfabsoft_sistemadefilmes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoft_sistemadefilmes.entity.Resenha;
import br.univille.projfabsoft_sistemadefilmes.entity.Usuario;
import br.univille.projfabsoft_sistemadefilmes.entity.Filme;
import br.univille.projfabsoft_sistemadefilmes.repository.ResenhaRepository;
import br.univille.projfabsoft_sistemadefilmes.repository.UsuarioRepository;
import br.univille.projfabsoft_sistemadefilmes.repository.FilmeRepository;
import br.univille.projfabsoft_sistemadefilmes.service.ResenhaService;

@Service
public class ResenhaServiceImpl implements ResenhaService {

    @Autowired
    private ResenhaRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private FilmeRepository filmeRepository;

    @Override
    public Resenha save(Resenha resenha) {
        if (resenha.getUsuario() != null && resenha.getUsuario().getId() != 0) {
            Usuario usuario = usuarioRepository.findById(resenha.getUsuario().getId()).orElse(null);
            resenha.setUsuario(usuario);
        }
        if (resenha.getFilme() != null && resenha.getFilme().getId() != 0) {
            Filme filme = filmeRepository.findById(resenha.getFilme().getId()).orElse(null);
            resenha.setFilme(filme);
        }
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