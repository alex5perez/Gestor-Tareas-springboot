# 📝 Task Manager API - Spring Boot

A simple yet scalable REST API to manage tasks, built with Java and Spring Boot.  
This project is designed to demonstrate a clean architecture with users, tasks, and API documentation via Swagger.

📄 Disponible también en [español](README.es.md)

![Java](https://img.shields.io/badge/java-17-blue.svg)
![Spring Boot](https://img.shields.io/badge/spring--boot-3.2-brightgreen.svg)
![Build](https://img.shields.io/badge/build-passing-success)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)

---

## 🚀 Features

- ✅ RESTful API with CRUD operations for tasks
- ✅ Entity `User` with one-to-many relation to `Task`
- ✅ Validation with `@Valid` and custom messages
- ✅ API Documentation with Swagger UI
- 🔒 Authentication with Spring Security (coming soon)
- 🧪 Unit & Integration testing with JUnit (coming soon)

---

## 🛠 Tech Stack

- Java 17
- Spring Boot 3.2
- Spring Data JPA
- H2 (in-memory DB)
- Swagger (Springdoc OpenAPI)
- Maven

---

## 📂 Project Structure
```
├── controller → REST endpoints
├── model → Entities: Task, User
├── repository → Spring Data JPA interfaces
├── service → Business logic
└── config → CORS and global config
```

---

## 📄 API Endpoints

All endpoints are accessible via `/api` prefix.

| Endpoint                   | Method | Description              |
|---------------------------|--------|--------------------------|
| `/api/tareas`             | GET    | List all tasks           |
| `/api/tareas/{id}`        | PUT    | Update a task            |
| `/api/tareas/{id}`        | DELETE | Delete a task            |
| `/api/usuarios`           | POST   | Create new user          |
| `/api/usuarios/{id}/tareas` | POST | Add task for a user      |
| `/api/usuarios/{id}/tareas` | GET  | Get all tasks for user   |

Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

Made with ❤️ by @alex5perez
