package com.gestor.tareas.controller;

import com.gestor.tareas.model.Tarea;
import com.gestor.tareas.service.TareaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController // Indica que esta clase es un controlador REST
@RequestMapping("/api/tareas") // Ruta base para todos los endpoints de esta clase
public class TareaController {

    private final TareaService tareaService;

    // Inyección de dependencias: Spring pasa automáticamente el servicio
    public TareaController(TareaService tareaService) {
        this.tareaService = tareaService;
    }

    @GetMapping // GET /api/tareas → lista todas las tareas
    public List<Tarea> listarTareas() {
        return tareaService.obtenerTodas();
    }

    @PostMapping // POST /api/tareas → crea una nueva tarea
    public ResponseEntity<Tarea> crearTarea(@Valid @RequestBody Tarea tarea) {
        // @RequestBody → convierte el JSON del cuerpo en un objeto Tarea
        // @Valid → valida los campos con anotaciones como @NotBlank
        Tarea nueva = tareaService.guardarTarea(tarea);
        return new ResponseEntity<>(nueva, HttpStatus.CREATED); // 201 Created
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarea> actualizarTarea(@PathVariable Long id, @Valid @RequestBody Tarea tareaActualizada) {
        Tarea actual = tareaService.actualizarTarea(id, tareaActualizada);
        return ResponseEntity.ok(actual);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTarea(@PathVariable Long id) {
        tareaService.eliminarTarea(id);
        return ResponseEntity.noContent().build(); // HTTP 204
    }

}
