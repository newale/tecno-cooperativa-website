# Changelog

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [Sin publicar]

## [1.7.0] - 2026-10-16

### Añadido
- Enlace «Siguiente» alineado a la derecha al final de cada guía de Comenzando, que lleva al paso que sigue.
- Enlace a la documentación al final de las páginas de WebID, Pods y espacio.

### Cambiado
- La guía «Crea tu WebID» pasa a «Tu WebID» (`/docs/comenzando/tu-webid/`): da por hecho que ya tienes cuenta y explica cómo son tu WebID y tu Pod, y dónde verlos.
- «Cómo usar tu Pod» parte de que el Pod viene con tu cuenta.

### Eliminado
- Los botones «Solicitar un WebID» y «Solicitar un Pod», y los avisos que invitaban a escribir a la cooperativa.

## [1.6.1] - 2026-10-16

### Cambiado
- Más margen sobre el enlace «Lee la documentación» del hero.

### Eliminado
- La sección «¿Quieres ser parte?» de la portada, el botón «Súmate como socio/a fundador/a» de Sobre nosotros y la página Hazte socio/a (`/hazte-socio/`).

## [1.6.0] - 2026-10-16

### Añadido
- Botón secundario «Conoce espacio» junto al de descarga en la portada, con la guía de instalación como enlace debajo.
- Enlace «Lee la documentación» bajo los botones del hero.
- Guías nuevas en Comenzando, en tres pasos: «Instalar espacio», «Crea tu WebID» y «Conecta espacio con tu WebID», cada una con su siguiente paso.
- Sección «Aplicaciones» en la documentación, con una guía de Archivos: navegar el Pod, subir y descargar, compartir y sincronizar carpetas del computador.

### Cambiado
- WebID va antes que Pods en las tarjetas de servicios, en el menú Servicios y en la documentación.
- La página de documentación de WebID pasa a llamarse «¿Qué es un WebID?».
- «Cómo usar tu Pod» enlaza a las nuevas guías.

### Eliminado
- La flecha del enlace «Conoce más sobre nosotros».

## [1.5.0] - 2026-10-13

### Añadido
- Sección «Estado actual» en Sobre nosotros (`/sobre/#estado`): qué significa la etapa de organización inicial (también llamada precooperativa), qué falta para constituir la cooperativa y enlaces a la Ley General de Cooperativas y a la DAES.
- Enlaces «Saber más» hacia esa explicación desde el pie de página, la portada y Hazte socio/a.

### Cambiado
- «En formación» pasa a «en etapa de organización inicial» en todo el sitio.
- La captura de espacio es ahora un PNG con fondo transparente, sin marco alrededor.

## [1.4.0] - 2026-10-13

### Añadido
- Página propia de espacio (`/espacio/`), con botón de descarga, captura de la app y la lista de aplicaciones disponibles: las incluidas (Archivos, escribir, Estudio; arbol, Calendario y hojas en construcción) y las del catálogo (Por Hacer, Notas, Música y archivador).
- espacio en el menú Servicios y enlace «Conoce espacio» bajo el botón de descarga de la portada.

## [1.3.0] - 2026-10-13

### Añadido
- Botón de descarga de espacio que detecta el sistema operativo (Mac, Windows o Ubuntu), con un menú para elegir otro sistema y un enlace a la guía de instalación.

### Cambiado
- Los botones del hero son ahora «Conoce WebID» y «Conoce Pods»; «Hazte socio/a» sigue más abajo en la portada y en Sobre nosotros.
- El texto del hero presenta a Tecnocoop como cooperativa digital.
- Nombre legal actualizado a «Cooperativa para el Espacio Público Digital».
- El ejemplo de WebID usa el dominio real de los Pods (`pods-rpi-tc.aebn.cl`).

### Eliminado
- Los tres botones de descarga separados de la portada, reemplazados por el botón único.

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

[Sin publicar]: https://github.com/newale/tecno-cooperativa-website/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/newale/tecno-cooperativa-website/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/newale/tecno-cooperativa-website/releases/tag/v1.1.0
