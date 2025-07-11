-- Создание таблицы users, если она не существует
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Добавление начальных данных (опционально)
INSERT INTO users (name) VALUES 
    ('Тестовый пользователь 1'),
    ('Тестовый пользователь 2')
ON CONFLICT DO NOTHING;