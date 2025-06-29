package com.gestor.tareas.controller;

import com.gestor.tareas.model.Tarea;
import com.gestor.tareas.model.Usuario;
import com.gestor.tareas.service.TareaService;
import com.gestor.tareas.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;
    private final TareaService tareaService;

    public UsuarioController(UsuarioService usuarioService, TareaService tareaService) {
        this.usuarioService = usuarioService;
        this.tareaService = tareaService;
    }

    // GET /api/usuarios
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioService.obtenerTodos();
    }

    // POST /api/usuarios
    @PostMapping
    public ResponseEntity<Usuario> crearUsuario(@Valid @RequestBody Usuario usuario) {
        return new ResponseEntity<>(usuarioService.crearUsuario(usuario), HttpStatus.CREATED);
    }

    // GET /api/usuarios/{id}/tareas
    @SecurityRequirement(name = "basicAuth")
    @GetMapping("/{id}/tareas")
    public List<Tarea> tareasPorUsuario(@PathVariable Long id) {
        return tareaService.obtenerPorUsuario(id);
    }

    // POST /api/usuarios/{id}/tareas
    @SecurityRequirement(name = "basicAuth")
    @PostMapping("/{id}/tareas")
    public ResponseEntity<Tarea> crearTareaParaUsuario(
            @PathVariable Long id,
            @Valid @RequestBody Tarea tarea) {

        Tarea creada = tareaService.guardarParaUsuario(id, tarea);
        return new ResponseEntity<>(creada, HttpStatus.CREATED);
    }
}
