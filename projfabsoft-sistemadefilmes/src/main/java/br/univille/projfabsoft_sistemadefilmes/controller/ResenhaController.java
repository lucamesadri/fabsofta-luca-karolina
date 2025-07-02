package br.univille.projfabsoft_sistemadefilmes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoft_sistemadefilmes.entity.Filme;
import br.univille.projfabsoft_sistemadefilmes.entity.Resenha;
import br.univille.projfabsoft_sistemadefilmes.service.ResenhaService;

@RestController
@RequestMapping("/api/v1/resenhas")
public class ResenhaController {

    @Autowired
    private ResenhaService service;

    @GetMapping
    public ResponseEntity<List<Resenha>> getResenhas() {
        var listaResenhas = service.getAll();
        return new ResponseEntity<>(listaResenhas, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Resenha> postResenha(@RequestBody Resenha resenha) {
        if (resenha == null) {
            return ResponseEntity.badRequest().build();
        }
        service.save(resenha);
        return new ResponseEntity<>(resenha, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Resenha> putResenha(@PathVariable long id, @RequestBody Resenha resenha) {
        if (id <= 0 || resenha == null) {
            return ResponseEntity.badRequest().build();
        }

        var resenhaAntiga = service.getById(id);
        if (resenhaAntiga == null) {
            return ResponseEntity.notFound().build();
        }

        resenhaAntiga.setTexto(resenha.getTexto());
        resenhaAntiga.setData(resenha.getData());
        resenhaAntiga.setUsuario(resenha.getUsuario());
        resenhaAntiga.setFilme(resenha.getFilme());

        service.save(resenhaAntiga);
        return new ResponseEntity<>(resenhaAntiga, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Resenha> deleteResenha(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        var resenhaExcluida = service.getById(id);
        if (resenhaExcluida == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(resenhaExcluida, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Resenha> getResenhaById(@PathVariable long id) {
        Resenha resenha = service.getById(id);
        if (resenha != null) {
            return ResponseEntity.ok(resenha);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}