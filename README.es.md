# 📝 API Gestor de Tareas – Spring Boot

Una API REST sencilla pero escalable para gestionar tareas, desarrollada con Java y Spring Boot.  
Este proyecto demuestra una arquitectura limpia con usuarios, tareas y documentación automática mediante Swagger.

[📄 Versión en inglés](README.md)

![Java](https://img.shields.io/badge/java-17-blue.svg)
![Spring Boot](https://img.shields.io/badge/spring--boot-3.2-brightgreen.svg)
![Build](https://img.shields.io/badge/build-passing-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)

---

## 🚀 Funcionalidades

- ✅ API RESTful con operaciones CRUD para tareas
- ✅ Entidad `Usuario` con relación uno-a-muchos con `Tarea`
- ✅ Validación de datos con `@Valid`
- ✅ Documentación de la API con Swagger UI
- 🔒 Autenticación con Spring Security (próximamente)
- 🧪 Tests unitarios e integración con JUnit (próximamente)

---

## 🛠 Tecnologías

- Java 17  
- Spring Boot 3.2  
- Spring Data JPA  
- H2 (base de datos en memoria)  
- Swagger (Springdoc OpenAPI)  
- Maven  

---
```
## 📂 Estructura del proyecto
├── controller → Endpoints REST
├── model → Entidades: Task, User
├── repository → Interfaces Spring Data JPA
├── service → Lógica de negocio
└── config → CORS y configuración global
```

---

## 📄 Endpoints principales

Todos los endpoints usan el prefijo `/api`.

| Endpoint                       | Método | Descripción                                  |
|--------------------------------|--------|----------------------------------------------|
| `/api/tareas`                  | GET    | Listar todas las tareas                      |
| `/api/tareas/{id}`             | PUT    | Actualizar una tarea                         |
| `/api/tareas/{id}`             | DELETE | Eliminar una tarea                           |
| `/api/usuarios`                | POST   | Crear un nuevo usuario                       |
| `/api/usuarios/{id}/tareas`    | POST   | Añadir una tarea a un usuario                |
| `/api/usuarios/{id}/tareas`    | GET    | Listar todas las tareas de un usuario        |

Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

Hecho con ❤️ por @alex5perez
