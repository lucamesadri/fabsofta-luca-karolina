package br.univille.projfabsoft_sistemadefilmes.service.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoft_sistemadefilmes.entity.Filme;
import br.univille.projfabsoft_sistemadefilmes.repository.FilmeRepository;
import br.univille.projfabsoft_sistemadefilmes.service.FilmeService;

@Service
public class FilmeServiceImpl implements FilmeService{

    @Autowired
    private FilmeRepository repository;
    
    @Override
    public Filme save(Filme filme) {
        return repository.save(filme);
    }

    @Override
    public List<Filme> getAll() {
        // TODO Auto-generated method stub
        return repository.findAll();
    }

    @Override
    public Filme getById(long id) {
        // TODO Auto-generated method stub
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Filme delete(long id) {
        // TODO Auto-generated method stub
        var filme = getById(id);
        if(filme != null)
            repository.deleteById(id);
        return filme;
    }
    
}
