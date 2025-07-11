# My WebApp - React + Express + PostgreSQL

Простое веб-приложение для управления пользователями с CRUD операциями.

## Технологии

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **База данных**: PostgreSQL
- **Контейнеризация**: Docker, Docker Compose
- **Веб-сервер**: Nginx

## Структура проекта
my-webapp/
├── backend/           # Express API сервер
├── frontend/          # React приложение
├── docker-compose.yml # Конфигурация для разработки
├── docker-compose.prod.yml # Конфигурация для production
└── init.sql          # Инициализация БД

## Локальная разработка

### Требования
- Docker Desktop
- Git

### Запуск с Docker

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Tamara-hh/my-webapp.git
cd my-webapp