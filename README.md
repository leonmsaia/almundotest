# Almundo Hotel TEST APP
Entorno de TEST para incorporacion a puesto de Dev. Frontend en Almundo.

# Importante: Chequear Versiones de Node.JS y Angular + Angular-Cli para el correcto funcionamiento de la App.

# Objetivos:
Ejercicio 1: API Rest NodeJS
Este punto consiste en armar un API REST en Node.js. El mismo será utilizado en el ejercicio 2.
La funcionalidad de listado y filtrado de hoteles debe estar soportada por la API y
consumida en la aplicación cliente.
A la hora de diseñar la estructura de la aplicación, tener en cuenta factores como
escalabilidad, reutilización y separación de responsabilidades.
Uso de configuraciones para ajustar como se ejecuta la aplicación en entornos productivos
y de desarrollo.

Ejercicio 2: Frontend
Maquetar una página de resultado de hoteles, ver imágenes en el repo (solo mobile y desktop).
Consumir la API desarrollada en el ejercicio anterior, implementando las funcionalidades
necesarias para listar y filtar los hoteles.
Utilizar alguna librería o framework guiado por componentes ( AngularJS o Angular).
Utilizar algún package manager (npm, bower) para manejar dependencias externas.
Utilizar una grilla responsive o similar para el maquetado.
Optimizar todos los recursos para entornos productivos, (minificar, ofuscar, etc)

Extras
Añadir alguna capa de persistencia de datos.
Implementar el CRUD de hoteles (solo a nivel API).

# Instalacion de Dependencias NPM
Correr "npm install" para instalar todas las dependencias de la aplicacion (tanto API como App).

# Compilacion de Assets
Watchers:
Correr "gulp watch".

Assets de Estilo (Utiliza motor SASS):
Correr "gulp css".

Assets de Javascript:
Correr "gulp js".
Correr "gulp bootjs".
Correr "gulp jqjs".

# Server
Correr "ng serve" para iniciar el servidor de la aplicacion Angular.
Correr "node app.js" para iniciar el servidor de la API en NodeJS + Express.

# Entornos
Configuración de entorno para API:
En el archivo appconfig.json se puede configurar cambiando el valor del campo "enviroment".

Configuracion del entorno para APP:
En el archivo src/environments/environment.ts el valor booleando de "production".
