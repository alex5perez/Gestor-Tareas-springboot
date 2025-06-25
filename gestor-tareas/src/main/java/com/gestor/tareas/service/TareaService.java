package com.gestor.tareas.service;

import com.gestor.tareas.model.Tarea;
import com.gestor.tareas.repository.TareaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Marca esta clase como un componente de servicio para que Spring la gestione
public class TareaService {

    private final TareaRepository tareaRepository;

    // Inyección de dependencias del repositorio
    public TareaService(TareaRepository tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    // Devuelve todas las tareas desde la base de datos
    public List<Tarea> obtenerTodas() {
        return tareaRepository.findAll();
    }

    // Guarda una nueva tarea en la base de datos
    public Tarea guardar(Tarea tarea) {
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

}
