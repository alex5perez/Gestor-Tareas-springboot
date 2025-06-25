package com.gestor.tareas.repository;

import com.gestor.tareas.model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

// Este repositorio hereda de JpaRepository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
    // <Tarea, Long> → Tarea es la entidad, Long es el tipo del ID

}
