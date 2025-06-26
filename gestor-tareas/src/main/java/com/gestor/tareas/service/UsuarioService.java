package com.gestor.tareas.service;

import com.gestor.tareas.model.Usuario;
import com.gestor.tareas.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;

    public UsuarioService(UsuarioRepository repo) {
        this.repo = repo;
    }

    public List<Usuario> obtenerTodos() {
        return repo.findAll();
    }

    public Usuario crear(Usuario u) {
        return repo.save(u);
    }

    public Usuario buscarPorId(Long id) {
        return repo.findById(id)
                   .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}
