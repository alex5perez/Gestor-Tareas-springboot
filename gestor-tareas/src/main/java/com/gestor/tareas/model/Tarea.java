package com.gestor.tareas.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity // Marca esta clase como una entidad de JPA (se convierte en una tabla)
@Data   // Lombok: genera automáticamente getters, setters, toString, equals, hashCode
public class Tarea {

    @Id // Define el campo como clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremental
    private Long id;

    @NotBlank(message = "El título no puede estar vacío") // Validación: no puede ser nulo ni vacío
    private String titulo;

    private String descripcion;

    private boolean completada = false; // Por defecto, la tarea no está completada
}