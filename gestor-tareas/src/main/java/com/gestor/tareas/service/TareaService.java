package com.gestor.tareas.service;

import com.gestor.tareas.model.Tarea;
import com.gestor.tareas.model.Usuario;
import com.gestor.tareas.service.UsuarioService;
import com.gestor.tareas.repository.TareaRepository;

import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

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

    public Tarea actualizar(Long id, Tarea tareaActualizada) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarea no encontrada"));

        tarea.setTitulo(tareaActualizada.getTitulo());
        tarea.setDescripcion(tareaActualizada.getDescripcion());
        tarea.setCompletada(tareaActualizada.isCompletada());

        return tareaRepository.save(tarea);
    }

    public void eliminar(Long id) {
        if (!tareaRepository.existsById(id)) {
            throw new RuntimeException("Tarea no encontrada");
        }
        tareaRepository.deleteById(id);
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
