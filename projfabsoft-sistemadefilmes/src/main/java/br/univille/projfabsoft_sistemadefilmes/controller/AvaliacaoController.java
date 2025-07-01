package br.univille.projfabsoft_sistemadefilmes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoft_sistemadefilmes.entity.Amizade;
import br.univille.projfabsoft_sistemadefilmes.entity.Avaliacao;
import br.univille.projfabsoft_sistemadefilmes.service.AvaliacaoService;

@RestController
@RequestMapping("/api/v1/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService service;

    @GetMapping
    public ResponseEntity<List<Avaliacao>> getAvaliacoes() {
        var listaAvaliacoes = service.getAll();
        return new ResponseEntity<>(listaAvaliacoes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Avaliacao> postAvaliacao(@RequestBody Avaliacao avaliacao) {
        if (avaliacao == null) {
            return ResponseEntity.badRequest().build();
        }
        service.save(avaliacao);
        return new ResponseEntity<>(avaliacao, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Avaliacao> putAvaliacao(@PathVariable long id, @RequestBody Avaliacao avaliacao) {
        if (id <= 0 || avaliacao == null) {
            return ResponseEntity.badRequest().build();
        }
        Avaliacao avaliacaoAntiga = service.getById(id);
        if (avaliacaoAntiga == null) {
            return ResponseEntity.notFound().build();
        }
        avaliacaoAntiga.setNota(avaliacao.getNota());
        avaliacaoAntiga.setComentario(avaliacao.getComentario());
        avaliacaoAntiga.setData(avaliacao.getData());
        avaliacaoAntiga.setUsuario(avaliacao.getUsuario());
        avaliacaoAntiga.setFilme(avaliacao.getFilme());
        service.save(avaliacaoAntiga);
        return new ResponseEntity<>(avaliacaoAntiga, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Avaliacao> deleteAvaliacao(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        var avaliacaoExcluida = service.getById(id);
        if (avaliacaoExcluida == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(avaliacaoExcluida, HttpStatus.OK);
    }



    @GetMapping("/{id}")
    public ResponseEntity<Avaliacao> Avaliacao(@PathVariable long id) {
        Avaliacao avaliacao = service.getById(id);
        if (avaliacao != null) {
            return ResponseEntity.ok(avaliacao);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}