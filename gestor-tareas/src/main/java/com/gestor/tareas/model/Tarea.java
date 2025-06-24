package com.gestor.tareas.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String descripcion;

    private boolean completada = false;
}
