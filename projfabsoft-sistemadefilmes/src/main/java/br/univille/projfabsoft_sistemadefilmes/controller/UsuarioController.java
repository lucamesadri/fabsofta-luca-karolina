package br.univille.projfabsoft_sistemadefilmes.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.univille.projfabsoft_sistemadefilmes.entity.Usuario;
import br.univille.projfabsoft_sistemadefilmes.service.UsuarioService;

@RestController
@RequestMapping("/api/v1/usuarios")

public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @GetMapping
    public ResponseEntity<List<Usuario>> getUsuario(){
        var listaUsuarios = service.getAll();
        return new ResponseEntity<List<Usuario>>(listaUsuarios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioId(@PathVariable Long id){
        var usuario = service.getById(id);
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

@PostMapping
    public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario usuario){ //insert into
        if(usuario == null){
            return ResponseEntity.badRequest().build();
        }
        if(usuario.getId() == 0){
            service.save(usuario);
            return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    
    }

@PutMapping("/{id}")
    public ResponseEntity<Usuario> putUsuario(@PathVariable long id, @RequestBody Usuario usuario){ //update ------------ put -> melhor para o programador back e pior para o front ----------> patch -> melhor para o front e pior para o back
        if (id <= 0 || usuario == null){
            return ResponseEntity.badRequest().build();
        }

        var usuarioAntigo = service.getById(id);
            if (usuarioAntigo == null){
                return ResponseEntity.notFound().build();
            }
        usuarioAntigo.setNome(usuario.getNome());
        usuarioAntigo.setEmail(usuario.getEmail());
        usuarioAntigo.setSenha(usuario.getSenha());

        service.save(usuarioAntigo);
        return new ResponseEntity<Usuario>(usuarioAntigo, HttpStatus.OK);
    }

@DeleteMapping("/{id}")
    public ResponseEntity<Usuario> deleteUsuario(@PathVariable long id){
        if(id <=0){
            return ResponseEntity.badRequest().build();
        }

        var UsuarioExcluido = service.getById(id);
        if(UsuarioExcluido == null){
            return ResponseEntity.notFound().build();
        }
        service.delete(id);

        return new ResponseEntity<Usuario>(UsuarioExcluido,HttpStatus.OK);
    }



}
