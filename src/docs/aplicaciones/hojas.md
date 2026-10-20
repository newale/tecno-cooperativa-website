---
title: "Hojas"
description: "Cómo usar Hojas en espacio: libros con tablas enlazadas por fórmulas, que calculan sobre los CSV y JSON de tu Pod."
order: 40
---

# Hojas

**Hojas** es una planilla distinta: en vez de una hoja infinita, cada libro tiene varias **tablas** que se enlazan por fórmulas. Así puedes poner lado a lado datos de distinto origen, como los gastos del mes en un CSV y los ingresos en otro, y calcular sobre ellos sin copiarlos. Viene instalada con espacio.

<div class="note">
  <p><strong>Hojas está en etapa temprana.</strong> Ya puedes usarla, pero por ahora tiene pocas funciones de fórmula.</p>
</div>

Para usarla necesitas haber [conectado espacio con tu WebID](/docs/comenzando/conectar-espacio/).

## Libros y tablas

1. En **Libros**, a la izquierda, haz clic en **Nuevo** y ponle nombre.
2. Agrega tablas:
   - **+ Hoja**: una tabla vacía para escribir y calcular.
   - **+ Datos del pod**: un CSV o JSON de tus archivos, de solo lectura.

Haz doble clic en el nombre de una tabla para renombrarla. Las fórmulas que la nombran se actualizan solas.

Cuando hay cambios aparece **sin guardar**: haz clic en **Guardar** para dejarlos en tu Pod.

## Lienzo y Pestañas

- **Lienzo** muestra todas las tablas a la vez, con flechas que indican qué tabla alimenta a cuál. Las flechas salen de las fórmulas: si una tabla deja de usar otra, la flecha desaparece.
- **Pestañas** muestra una tabla a la vez, como las hojas de Excel.

Las dos vistas son el mismo libro.

## Fórmulas

La fila 1 de cada tabla es su encabezado. Con eso puedes nombrar columnas y celdas de otras tablas:

| Fórmula | Qué hace |
| --- | --- |
| `=SUMA(Gastos[Monto])` | Suma la columna Monto de la tabla Gastos. |
| `=Ingresos!B2 - Gastos!B2` | Usa celdas de otras tablas. |
| `=SUMAR.SI(Gastos[Categoría]; "comida"; Gastos[Monto])` | Suma solo lo que cumple una condición. |

Las funciones disponibles son SUMA, PROMEDIO, MIN, MAX, CONTAR, CONTARA, SI, SI.ERROR, Y, O, NO, REDONDEAR, ABS, SUMAR.SI, CONTAR.SI y CONCATENAR. Cada una acepta también su nombre en inglés.

Si una fórmula depende de sí misma, verás `#CICLO!`. Si el archivo de una fuente se borra o se mueve, verás `#REF!`.

## Números como se escriben en Chile

En las celdas, `1.500` es mil quinientos y `2,5` es dos y medio. Dentro de una fórmula el decimal va con punto (`=B2*1.19`), porque la coma separa los argumentos. También puedes separarlos con `;`, como en Excel en español.

En un CSV, Hojas intenta adivinar cómo vienen los números. Si los montos se ven mal, usa el botón de la fuente para elegir cómo leerlos.

## Las fuentes se enlazan, no se copian

El libro guarda solo dónde está cada CSV o JSON. Al abrirlo vuelve a leer el archivo, así que si lo reemplazas (por ejemplo, la cartola del banco de cada mes), todos los cálculos se actualizan. Para releerlo sin cerrar el libro, usa **Volver a leer el archivo del pod**.

Borrar un libro no toca los archivos que usa como fuente.

## ¿Dónde quedan tus libros?

En `Documentos/` de tu Pod, como archivos `.hojas.json`.
