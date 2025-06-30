# Task Manager - Spring Boot + React

This is a full-stack task management application built with Spring Boot and React. Users can register, log in, create, update, mark as completed, and delete tasks. Authentication is handled with basic auth and data is persisted in an H2 in-memory database.

## 🔧 Tech Stack

- **Backend:** Spring Boot, Spring Security, H2, JPA
- **Frontend:** React, Vite, CSS Modules
- **Authentication:** HTTP Basic Authentication (with BCrypt)
- **API Documentation:** Swagger UI (OpenAPI 3)

## ✨ Features

- Register and login with encrypted credentials
- CRUD operations for tasks
- Toggle task status (completed/pending)
- Responsive and modern interface
- Full session persistence via `sessionStorage`

## 🚀 Getting Started

### Backend

```bash
cd gestor-tareas-springboot
./mvnw spring-boot:run
```

App runs at `http://localhost:8080`

### Frontend

```bash
cd gestor-tareas-frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`

## 🛡️ Security

- Passwords are encrypted with BCrypt
- All protected routes require authentication
- CORS configured for local development

## 📁 Project Structure

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

You can try it locally or see screenshots on my portfolio: [alexperezrubio.com](https://alexperezrubio.com)