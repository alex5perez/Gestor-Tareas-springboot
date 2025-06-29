package com.gestor.tareas.service;

import com.gestor.tareas.model.Tarea;
import com.gestor.tareas.model.Usuario;
import com.gestor.tareas.service.UsuarioService;
import com.gestor.tareas.repository.TareaRepository;
import com.gestor.tareas.exception.UnauthorizedAccessException;

import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;

@Service // Marca esta clase como un componente de servicio para que Spring la gestione
public class TareaService {

    private final TareaRepository tareaRepository;
    private final UsuarioService usuarioService;

    // Inyección de dependencias del repositorio
    public TareaService(TareaRepository tareaRepository, UsuarioService usuarioService) {
        this.tareaRepository = tareaRepository;
        this.usuarioService = usuarioService;
    }

    // Devuelve todas las tareas desde la base de datos
    public List<Tarea> obtenerTodas() {
        return tareaRepository.findAll();
    }

    // Guarda una nueva tarea en la base de datos
    public Tarea guardarTarea(Tarea tarea) {
        String username = getCurrentUsername();
        Usuario usuario = usuarioService.buscarPorUsername(username);
        tarea.setUsuario(usuario);
        return tareaRepository.save(tarea);
    }

    public Tarea actualizarTarea(Long id, Tarea nuevaTarea) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarea no encontrada"));

        validarPropietario(tarea);

        tarea.setTitulo(nuevaTarea.getTitulo());
        tarea.setDescripcion(nuevaTarea.getDescripcion());
        tarea.setCompletada(nuevaTarea.isCompletada());
        return tareaRepository.save(tarea);
    }

    public void eliminarTarea(Long id) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarea no encontrada"));

        validarPropietario(tarea);

        tareaRepository.delete(tarea);
    }

    private void validarPropietario(Tarea tarea) {
        String currentUsername = getCurrentUsername();
        String ownerUsername = tarea.getUsuario().getUsername();

        if (!currentUsername.equals(ownerUsername)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "No tienes permiso para modificar esta tarea");
        }
    }

    // Nuevo método
    public List<Tarea> obtenerPorUsuario(Long usuarioId) {
        Usuario usuario = usuarioService.buscarPorId(usuarioId);
        return usuario.getTareas();
    }

    // Guardar y asociar
    public Tarea guardarParaUsuario(Long usuarioId, Tarea tarea) {
        Usuario usuario = usuarioService.buscarPorId(usuarioId);
        tarea.setUsuario(usuario);
        return tareaRepository.save(tarea);
    }

    private String getCurrentUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

}
