package br.univille.projfabsoft_sistemadefilmes.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoft_sistemadefilmes.entity.Avaliacao;

@Repository
public interface AvaliacaoRepository  extends JpaRepository<Avaliacao, Long> {
    
}
