package br.univille.projfabsoft_sistemadefilmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoft_sistemadefilmes.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long>{

}
