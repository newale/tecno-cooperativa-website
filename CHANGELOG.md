# Changelog

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [Sin publicar]

## [1.2.0] - 2026-10-13

### Añadido
- Página propia para WebID (`/webid/`): qué es, para qué sirve y en qué se diferencia de un Pod, con botón para solicitarlo.
- WebID como servicio separado de Pods en el menú Servicios y en la portada.
- Sección «WebID» propia en la documentación.
- Descarga de espacio para Windows (instalador `.exe` x64): botón en la portada y sección en la guía de instalación, con el aviso de SmartScreen.
- Sección «Comenzando» en la documentación, con la guía para instalar espacio en Mac (incluido sacarla de cuarentena) y Ubuntu.
- Botón de descarga de espacio para Ubuntu (`.deb` amd64), junto al de Mac.
- Sección de descarga de la app espacio bajo el hero de la portada, con botón para Mac (versión tomada de `latest.json`).

### Cambiado
- La documentación de WebID se movió de `/docs/pods/webid/` a `/docs/webid/`; la dirección anterior redirige a la nueva.
- El enlace «Documentación» del menú lleva a la guía de instalación de espacio.
- La documentación pasa a español chileno (tuteo).

### Corregido
- Restos de voseo en la guía «Cómo usar tu Pod».

## [1.1.0] - 2026-09-29

### Añadido
- Fecha de actualización del consumo en formato largo en la página de estado.
- Feed de actualizaciones de espacio (`latest.json` y su firma).

### Cambiado
- Ajustes visuales del dropdown de Servicios: hover, ícono, centrado y alineación del borde con el header.

### Corregido
- El dropdown de Servicios quedaba siempre abierto.

[Sin publicar]: https://github.com/newale/tecno-cooperativa-website/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/newale/tecno-cooperativa-website/releases/tag/v1.1.0
