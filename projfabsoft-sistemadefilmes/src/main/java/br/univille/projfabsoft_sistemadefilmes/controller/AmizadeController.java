package br.univille.projfabsoft_sistemadefilmes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.univille.projfabsoft_sistemadefilmes.entity.Amizade;
import br.univille.projfabsoft_sistemadefilmes.service.AmizadeService;

@RestController
@RequestMapping("/api/v1/amizades")
public class AmizadeController {

    @Autowired
    private AmizadeService service;

    @GetMapping
    public ResponseEntity<List<Amizade>> getAmizades() {
        var listaAmizades = service.getAll();
        return new ResponseEntity<>(listaAmizades, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Amizade> postAmizade(@RequestBody Amizade amizade) {
        if (amizade == null) {
            return ResponseEntity.badRequest().build();
        }
        service.save(amizade);
        return new ResponseEntity<>(amizade, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Amizade> putAmizade(@PathVariable long id, @RequestBody Amizade amizade) {
        if (id <= 0 || amizade == null) {
            return ResponseEntity.badRequest().build();
        }

        var amizadeAntiga = service.getById(id);
        if (amizadeAntiga == null) {
            return ResponseEntity.notFound().build();
        }

        amizadeAntiga.setSolicitante(amizade.getSolicitante());
        amizadeAntiga.setSolicitado(amizade.getSolicitado());
        amizadeAntiga.setStatus(amizade.getStatus());

        service.save(amizadeAntiga);
        return new ResponseEntity<>(amizadeAntiga, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Amizade> deleteAmizade(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        var amizadeExcluida = service.getById(id);
        if (amizadeExcluida == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<>(amizadeExcluida, HttpStatus.OK);
    }
}