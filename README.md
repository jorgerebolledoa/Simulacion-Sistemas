# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# API Rae

Api Que consulta a la web de la rae que devuelve le significado de la palabra a buscar como un json



## Instalación

Instrucciones paso a paso sobre cómo instalar tu proyecto. Por ejemplo:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/jorgerebolledoa/ApiRae.git
   
2. Instala las dependependecia para la api y levanta el servicio:
     ```bash
    npm i
    npm run dev
3. Instala la librería request mediante:{
    ```bash
   raco pkg install request
   
5. Ejecutar el archivo 
   - ejecutar el archivo paradigma_rae.rkt



## Instalación de nodejs 
### windows 
- Entrar al link  [Node ](#https://nodejs.org/en)https://nodejs.org/en
- Hacer click en download nodejs
![image](https://github.com/jorgerebolledoa/ApiRae/assets/99465810/a0cd0dd2-7ac6-4c4d-8723-d5011b6ac828)
- Abrir el instalador y seguir los pasos
### linux

 ```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.13.1`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.2`
