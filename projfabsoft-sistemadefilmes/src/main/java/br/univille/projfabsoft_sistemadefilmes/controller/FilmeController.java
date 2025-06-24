package br.univille.projfabsoft_sistemadefilmes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return new ResponseEntity<>(listaFilmes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Filme> getFilmeById(@PathVariable Long id){
        var filme = service.getById(id);
        if(filme == null){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(filme, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Filme> postFilme(@RequestBody Filme filme){
        if(filme == null){
            return ResponseEntity.badRequest().build();
        }
        if(filme.getId() == 0){
            service.save(filme);
            return new ResponseEntity<>(filme, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Filme> putFilme(@PathVariable long id, @RequestBody Filme filme){
        if (id <= 0 || filme == null){
            return ResponseEntity.badRequest().build();
        }

        var filmeAntigo = service.getById(id);
        if (filmeAntigo == null){
            return ResponseEntity.notFound().build();
        }

        filmeAntigo.setTitulo(filme.getTitulo());
        filmeAntigo.setGenero(filme.getGenero());
        filmeAntigo.setElenco(filme.getElenco());
        filmeAntigo.setAnoLancamento(filme.getAnoLancamento());

        service.save(filmeAntigo);
        return new ResponseEntity<>(filmeAntigo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Filme> deleteFilme(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }

        var filmeExcluido = service.getById(id);
        if(filmeExcluido == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(filmeExcluido, HttpStatus.OK);
    }
}
