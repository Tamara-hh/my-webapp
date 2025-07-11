# Базовый образ Node.js
FROM node:20-alpine

# Рабочая директория в контейнере
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем остальные файлы
COPY . .

# Порт, который будет слушать приложение
EXPOSE 5000

# Команда запуска
CMD ["node", "server.js"]