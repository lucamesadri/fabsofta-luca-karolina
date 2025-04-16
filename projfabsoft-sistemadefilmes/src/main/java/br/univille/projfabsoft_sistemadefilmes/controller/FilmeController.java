package br.univille.projfabsoft_sistemadefilmes.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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



}
