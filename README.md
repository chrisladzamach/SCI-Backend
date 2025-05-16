# SCI-BACK (Sistema Centralizado de Información - Backend)  
Node.js + Express + TypeScript

Backend del sistema SCI desarrollado en TypeScript utilizando Node.js y Express.

---

## ¿Cómo descargar y correr este proyecto?

1. **Clonar el repositorio en una máquina:**

```bash
git clone https://github.com/chrisladzamach/SCI-Backend
```

2. **Ingresar a la carpeta raíz del proyecto:**

```bash
cd SCI-Backend
```

3. **Instalar las dependencias:**

```bash
npm install
```

4. **Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

Debería verse algo como esto en consola:

```bash
> sci-backend@1.0.0 dev
> ts-node-dev --respawn --transpile-only src/index.ts

[INFO] 09:42:20 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.8.3)
Servidor escuchando en http://localhost:3000
```

El servidor estará corriendo en [http://localhost:3000](http://localhost:3000) (o el puerto definido en el archivo `.env` si se usa configuración por entorno).

---

## Estructura básica del proyecto

```
SCI-BACK/
├── src/
│   └── index.ts         # Punto de entrada del servidor
├── dist/                # Archivos compilados (ignorado por Git)
├── tsconfig.json        # Configuración de TypeScript
├── package.json         # Scripts y dependencias
├── .gitignore
```

---

## Scripts disponibles

- `npm run dev` – Inicia el servidor en modo desarrollo con recarga automática.
- `npm run build` – Compila el proyecto a JavaScript (carpeta `/dist`).
- `npm start` – Ejecuta el servidor en producción desde `/dist`.

---

## Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- ts-node-dev

---

## Requisitos previos

- Node.js >= 18
- npm >= 9

---
