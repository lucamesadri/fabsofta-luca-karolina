package br.univille.projfabsoft_sistemadefilmes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoft_sistemadefilmes.entity.Avaliacao;
import br.univille.projfabsoft_sistemadefilmes.entity.Usuario;
import br.univille.projfabsoft_sistemadefilmes.entity.Filme;
import br.univille.projfabsoft_sistemadefilmes.repository.AvaliacaoRepository;
import br.univille.projfabsoft_sistemadefilmes.repository.UsuarioRepository;
import br.univille.projfabsoft_sistemadefilmes.repository.FilmeRepository;
import br.univille.projfabsoft_sistemadefilmes.service.AvaliacaoService;

@Service
public class AvaliacaoServiceImpl implements AvaliacaoService {

    @Autowired
    private AvaliacaoRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private FilmeRepository filmeRepository;

    @Override
    public Avaliacao save(Avaliacao avaliacao) {
        if (avaliacao.getUsuario() != null && avaliacao.getUsuario().getId() != 0) {
            Usuario usuario = usuarioRepository.findById(avaliacao.getUsuario().getId()).orElse(null);
            avaliacao.setUsuario(usuario);
        }
        if (avaliacao.getFilme() != null && avaliacao.getFilme().getId() != 0) {
            Filme filme = filmeRepository.findById(avaliacao.getFilme().getId()).orElse(null);
            avaliacao.setFilme(filme);
        }
        return repository.save(avaliacao);
    }

    @Override
    public List<Avaliacao> getAll() {
        return repository.findAll();
    }

    @Override
    public Avaliacao getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent()) return retorno.get();
        return null;
    }

    @Override
    public Avaliacao delete(long id) {
        var avaliacao = getById(id);
        if (avaliacao != null) repository.deleteById(id);
        return avaliacao;
    }
}