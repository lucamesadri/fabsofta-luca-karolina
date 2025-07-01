package br.univille.projfabsoft_sistemadefilmes.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoft_sistemadefilmes.entity.Amizade;
import br.univille.projfabsoft_sistemadefilmes.entity.Usuario;
import br.univille.projfabsoft_sistemadefilmes.repository.AmizadeRepository;
import br.univille.projfabsoft_sistemadefilmes.repository.UsuarioRepository;
import br.univille.projfabsoft_sistemadefilmes.service.AmizadeService;

@Service
public class AmizadeServiceImpl implements AmizadeService {

    @Autowired
    private AmizadeRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Amizade save(Amizade amizade) {
        if (amizade.getSolicitante() != null && amizade.getSolicitante().getId() != 0) {
            Usuario solicitante = usuarioRepository.findById(amizade.getSolicitante().getId()).orElse(null);
            amizade.setSolicitante(solicitante);
        }
        if (amizade.getSolicitado() != null && amizade.getSolicitado().getId() != 0) {
            Usuario solicitado = usuarioRepository.findById(amizade.getSolicitado().getId()).orElse(null);
            amizade.setSolicitado(solicitado);
        }
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