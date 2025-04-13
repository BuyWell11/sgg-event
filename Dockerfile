# Этап сборки
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию для этапа сборки
WORKDIR /app

# Копируем файлы package.json и lock-файл
COPY package*.json ./

# Устанавливаем зависимости и собираем приложение
RUN npm install

COPY . .
RUN npm run build

# Этап запуска
FROM node:18-alpine

# Устанавливаем рабочую директорию для этапа запуска
WORKDIR /app

# Копируем собранное приложение из этапа сборки
COPY --from=builder /app .

# Устанавливаем только продакшн-зависимости
RUN npm install --only=production

# Указываем порт, который будет использовать приложение
EXPOSE 3000

# Команда по умолчанию для запуска приложения
CMD ["npm", "run", "start"]
