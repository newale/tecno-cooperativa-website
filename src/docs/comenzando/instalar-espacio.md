---
title: "Instalar espacio"
description: "Cómo descargar e instalar espacio, la app de escritorio de Tecnocoop, en Mac y Ubuntu."
order: 0
---

# Instalar espacio

**espacio** es la app de escritorio de la cooperativa: te permite trabajar con los archivos y carpetas de tu [Pod](/docs/pods/) y compartirlos. La versión actual es la **{{ espacio.version }}**.

## Mac

Requiere un Mac con procesador Apple (M1 o posterior).

1. Descargá [espacio para Mac]({{ espacio.dmgUrl }}) (`.dmg`).
2. Abrí el `.dmg` y arrastrá **espacio** a la carpeta **Aplicaciones**.
3. Sacá la app de cuarentena. Abrí la **Terminal** y ejecutá:

   ```bash
   xattr -dr com.apple.quarantine /Applications/espacio.app
   ```

4. Abrí espacio desde **Aplicaciones** o Launchpad.

### ¿Por qué hay que sacarla de cuarentena?

macOS marca con una "cuarentena" todo lo que se descarga de internet y solo deja abrir sin preguntas las apps firmadas con una cuenta de desarrollador de Apple. La cooperativa todavía no tiene esa cuenta, así que sin el paso 3 macOS dice que la app "está dañada" o que "no se puede verificar el desarrollador". El comando solo quita esa marca de espacio; no cambia ninguna configuración de seguridad de tu Mac.

### Actualizaciones

espacio avisa cuando hay una versión nueva y se actualiza sola al apretar **Actualizar**. No hace falta repetir el paso 3: la app quita la cuarentena de la versión nueva por su cuenta. Cada actualización se verifica con una firma de la cooperativa antes de instalarse.

## Ubuntu

Requiere Ubuntu (o una distribución basada en Debian) de 64 bits en un equipo Intel o AMD.

1. Descargá [espacio para Ubuntu]({{ espacio.ubuntuUrl }}) (`.deb`).
2. Abrí una terminal en la carpeta donde se descargó e instalalo:

   ```bash
   sudo apt install ./espacio-{{ espacio.version }}-amd64.deb
   ```

   `apt` instala también las dependencias que falten.

3. Abrí espacio desde el menú de aplicaciones.

### Actualizaciones

En Ubuntu espacio todavía no se actualiza sola. Para pasar a una versión nueva, descargá el `.deb` nuevo y repetí el paso 2.

### Desinstalar

```bash
sudo apt remove espacio
```
