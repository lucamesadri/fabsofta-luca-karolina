package br.univille.projfabsoft_sistemadefilmes.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.univille.projfabsoft_sistemadefilmes.entity.Filme;
import br.univille.projfabsoft_sistemadefilmes.service.FilmeService;


@RestController
@RequestMapping("/api/v1/filmes")

public class FilmeController {

    @Autowired
    private FilmeService service;


    @GetMapping
    public ResponseEntity<List<Filme>> getFilmes(){

        var listaFilmes = service.getAll();
        return new ResponseEntity<List<Filme>>(listaFilmes, HttpStatus.OK);
        
    }
    @PostMapping
    public ResponseEntity<Filme> postFilme(@RequestBody Filme filme){ //insert into
        if(filme == null){
            return ResponseEntity.badRequest().build();
        }
        if(filme.getId() == 0){
            service.save(filme);
            return new ResponseEntity<Filme>(filme, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    
    }
    @PutMapping("/{id}")
    public ResponseEntity<Filme> putFIlme(@PathVariable long id, @RequestBody Filme filme){ //update ------------ put -> melhor para o programador back e pior para o front ----------> patch -> melhor para o front e pior para o back
        if (id <= 0 || filme == null){
            return ResponseEntity.badRequest().build();
        }

        var filmeAntigo = service.getById(id);
            if (filmeAntigo == null){
                return ResponseEntity.notFound().build();
            }
        filmeAntigo.setTitulo(filme.getTitulo());
        filmeAntigo.setGenero(filme.getGenero());
        filmeAntigo.setAnoLancamento(filme.getAnoLancamento());
        filmeAntigo.setElenco(filme.getElenco());

        service.save(filmeAntigo);
        return new ResponseEntity<Filme>(filmeAntigo, HttpStatus.OK);
    }

}
