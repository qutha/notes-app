# Приложение заметок

## Предварительные требования

Убедитесь, что у вас установлены следующие инструменты:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Начало работы

1. Клонируйте этот репозиторий на свой локальный компьютер:

```bash
git clone https://github.com/qutha/notes-app
```

2. Перейдите в директорию проекта:

```bash
cd notes-app
```

3. Соберите и запустите Docker-контейнеры:

```bash
docker-compose up -d --build
```

Откройте веб-браузер и перейдите по адресу http://localhost:5000, чтобы просмотреть приложение.

### Остановка контейнеров

```bash
docker-compose down
```

## Запуск dev-сервера без docker-compose.

1. Клонируйте этот репозиторий на свой локальный компьютер:

```bash
git clone https://github.com/qutha/notes-app
```

2. Перейдите в директорию проекта:

```bash
cd notes-app
```

3. Установите зависимости

```bash
npm install
```

4. Запустите dev-сервер

```bash
npm run dev
```

Откройте веб-браузер и перейдите по адресу http://localhost:5173/, чтобы просмотреть приложение.
