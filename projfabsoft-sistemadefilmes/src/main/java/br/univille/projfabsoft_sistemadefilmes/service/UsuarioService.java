package br.univille.projfabsoft_sistemadefilmes.service;

import java.util.List;

import br.univille.projfabsoft_sistemadefilmes.entity.Usuario;

public interface UsuarioService {
    Usuario save(Usuario usuario);
    List<Usuario> getAll();
    
}
