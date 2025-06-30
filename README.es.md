# Gestor de Tareas - Spring Boot + React

Aplicación web full-stack para la gestión de tareas. Permite a los usuarios registrarse, iniciar sesión, crear, actualizar, marcar como completadas y eliminar tareas. La autenticación se realiza con Basic Auth y los datos se almacenan en una base de datos en memoria H2.

## 🔧 Tecnologías usadas

- **Backend:** Spring Boot, Spring Security, H2, JPA
- **Frontend:** React, Vite, CSS Modules
- **Autenticación:** Autenticación básica con contraseña encriptada (BCrypt)
- **Documentación API:** Swagger UI (OpenAPI 3)

## ✨ Funcionalidades

- Registro y login con credenciales seguras
- Crear, leer, actualizar y eliminar tareas (CRUD)
- Marcar tareas como completadas o pendientes
- Interfaz moderna y adaptable
- Persistencia de sesión con `sessionStorage`

## 🚀 Cómo iniciar

### Backend

```bash
cd gestor-tareas-springboot
./mvnw spring-boot:run
```

App en `http://localhost:8080`

### Frontend

```bash
cd gestor-tareas-frontend
npm install
npm run dev
```

App en `http://localhost:5173`

## 🛡️ Seguridad

- Contraseñas encriptadas con BCrypt
- Rutas protegidas para operaciones CRUD
- CORS configurado para desarrollo local

## 📁 Estructura del proyecto

```
gestor-tareas/
├── backend/
│   ├── controller/
│   ├── model/
│   ├── repository/
│   ├── service/
│   └── config/
└── frontend/
    └── components/
```

## 🖥️ Demo

Puedes probarlo localmente o ver capturas en mi portfolio: [alexperezrubio.com](https://alexperezrubio.com)