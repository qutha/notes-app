# Используйте официальный образ Node.js LTS
FROM node:lts-alpine as builder

# Устанавливаем рабочую директорию
WORKDIR /frontend

# Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем production-сборку
RUN npm run build

# Используем отдельный этап для минимизации размера контейнера
FROM node:lts-alpine as production

# Устанавливаем serve для раздачи статического содержимого
RUN npm install -g serve

# Копируем только необходимые файлы и production-сборку из предыдущего этапа
WORKDIR /frontend
COPY --from=builder /frontend/dist ./dist

# Устанавливаем переменную окружения для serve (по умолчанию порт 5000)
ENV PORT 5000

# Открываем порт, на котором будет работать приложение
EXPOSE $PORT

# Запускаем serve для раздачи production-сборки
CMD serve dist -p 5000
