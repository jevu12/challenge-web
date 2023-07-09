# challenge web netflix

Este proyecto está realizado en cypress y typescript utilizando bdd con lenguaje gherkin, cucumber para la ejecucion de las pruebas además de POM para la estructura del proyecto.
## Estructura del proyecto
El proyecto tiene la siguiente estructura

    ```bash
    challenge-web
    ├── cypress
    │   ├── config
    │   ├── e2e
    │   │    ├── features      
    │   ├── fixtures
    │   ├── support
    │   │   ├── pages
    │   │   ├── steps_definitions
    │   package.json
    │   cypress.config.ts
    │   tsconfig.json
    │   cypress.env.json
    │   .gitignore
    │   README.md
    ```

## Descripción de Carpetas

- config: contiene la configuración de las variables de entorno de inicio de sesión de Netflix
- e2e: contiene las pruebas
- fixtures: contiene los datos de prueba
- support: contiene las clases de soporte para la ejecución de las pruebas
- pages: contiene las clases de los objetos de la pagina
- steps_definitions: contiene las clases de los pasos de las pruebas
- package.json: contiene las dependencias del proyecto
- tsconfig.json: contiene la configuración de typescript
- cypress.env.json: contiene las variables de entorno de inicio de sesión de netflix
- .gitignore: contiene los archivos que se deben ignorar en el repositorio
- README.md: contiene la documentación del proyecto
- cypress.config.ts: contiene la configuración de cypress

## Instalación

Para descargar las dependencias necesarias del proyecto se debe ejecutar el siguiente comando:

```bash
npm install
```
## configuración de variables de entorno
Crear el archivo Cypress.env.json en la raíz del proyecto con el siguiente contenido:

```bash
{
  "netflixEmail": "Correo valido de netflix",
  "netflixPassword": "contraseña valida"
}
```
## Ejecución de las pruebas modo headless
Para ejecutar las pruebas se debe ejecutar el siguiente comando:

```bash
npx "cy:run": "cypress run"
```
## Ejecución de las pruebas modo headless en Chrome
Para ejecutar las pruebas se debe ejecutar el siguiente comando:

```bash
npx "cy:run:chrome": "cypress run --headless --browser chrome"
```

## Ejecución de pruebas modo visual
Para ejecutar las pruebas en modo visual se debe ejecutar el siguiente comando:

```bash
npx "cy:open": "cypress open"
```
