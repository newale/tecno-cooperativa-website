---
title: "¿Qué es un WebID?"
description: "Qué es un WebID y para qué sirve dentro del ecosistema Solid."
order: 20
---

# ¿Qué es un WebID?

Un **WebID** es una URL que te identifica a ti (o a una aplicación) dentro del ecosistema Solid — algo así como tu nombre de usuario, pero abierto, descentralizado y que no depende de ninguna plataforma en particular.

Tiene esta forma: `https://pods-rpi-tc.aebn.cl/tu-usuario/profile/card#me`, donde *tu-usuario* es el nombre de tu Pod.

## ¿Para qué sirve?

- **Iniciar sesión** en cualquier aplicación compatible con Solid, sin crear una cuenta nueva en cada una.
- **Identificarte** ante otros Pods para que puedan darte acceso a información compartida.
- **Publicar tu perfil**: nombre, foto, y otros datos públicos que tú decides mostrar.

## ¿Cómo se relaciona con tu Pod?

Tu WebID normalmente vive dentro de tu propio Pod, en un documento de perfil legible tanto por personas como por máquinas (siguiendo estándares abiertos como RDF). Ese documento es también el lugar donde se declaran los permisos: qué otras identidades pueden leer o escribir en tus datos.

Si todavía no tienes uno, sigue la guía [Crea tu WebID](/docs/comenzando/crear-webid/). Para saber dónde quedan tus datos, revisa [¿Qué son los Pods?](/docs/pods/).
