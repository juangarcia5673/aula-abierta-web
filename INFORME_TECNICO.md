# Informe técnico — Aula Abierta

**Asignatura:** Aplicaciones Web · Unidad 1  
**Estudiante:** [Completar con nombre y apellido]  
**Tipo de entrega:** sitio web estático demostrativo  
**Estado de publicación:** proyecto local; repositorio y demostración web pendientes de publicar.

## 1. Objetivo y organización

Se construyó un sitio de promoción para la iniciativa académica ficticia Aula Abierta. El sitio se organiza en cuatro áreas principales: presentación de la iniciativa, programa de actividades con filtros, descripción de la experiencia y formulario de demostración. El contenido está identificado como ilustrativo y no representa una convocatoria oficial.

## 2. Decisiones técnicas

- **HTML5 semántico:** `header`, `nav`, `main`, `section`, `article` y `footer`; un encabezado `h1` principal y jerarquía `h2`/`h3`; etiquetas de formulario asociadas mediante `for`/`id`; enlace para saltar al contenido principal; alternativa textual para la ilustración SVG.
- **CSS mobile first:** variables personalizadas para color, ancho y espacios; Grid y Flexbox; imágenes fluidas; títulos con `clamp()`; foco visible y preferencia `prefers-reduced-motion`.
- **JavaScript nativo:** menú adaptable con `aria-expanded`, cierre con Escape y al seleccionar un enlace; filtro de actividades que comunica la selección con `aria-pressed` y el conteo mediante `role="status"`; validación de formulario con mensajes específicos, `aria-invalid` y gestión de foco. No se usan librerías externas.

## 3. Adaptación responsiva

| Punto de adaptación | Decisión y motivo |
|---|---|
| Base, desde 320 px | Una columna, navegación compacta y tarjetas apiladas para evitar desplazamiento horizontal. |
| 48 rem (768 px) | Navegación horizontal y composición en dos columnas para aprovechar el espacio de tablet y escritorio. |
| 64 rem (1024 px) | Programa en cuatro columnas para comparar rápidamente las actividades sin estrechar en exceso cada tarjeta. |

## 4. Verificación

Pruebas funcionales con Chromium/Playwright usando una versión de prueba con recursos locales integrados. Resultados registrados en `evidencias/resultados_pruebas.json`.

- Sin desbordamiento horizontal a 320, 390, 768 y 1440 px.
- El primer foco por teclado alcanza el enlace «Saltar al contenido principal».
- El menú móvil abre y se cierra mediante Escape; el estado ARIA se actualiza.
- El filtro «Talleres» muestra dos tarjetas y actualiza el estado anunciado.
- El formulario informa errores con campos vacíos y confirma la validación de datos de prueba correctos.
- Sin errores JavaScript no controlados durante las pruebas.
- Comprobaciones estáticas básicas: un único `h1`, identificadores únicos, destinos internos válidos, imágenes con `alt` y campos con etiquetas asociadas.
- Capturas completas y de primera vista guardadas en `evidencias/` para 390, 768 y 1440 px.

La selección de colores principal ofrece contraste suficiente en los pares revisados: texto principal sobre fondo claro 7.81:1, texto blanco sobre azul oscuro 15.18:1 y texto oscuro sobre botón lima 12.77:1. El lila se usa en encabezados grandes (3.99:1), para los que aplica el umbral de texto grande.

## 5. Mejoras pendientes

El formulario es solo una demostración: no envía ni almacena datos y necesita un backend seguro para un uso real. Antes de producción se debe sustituir el contenido ficticio por información confirmada, publicar el repositorio y la demostración, probar con lectores de pantalla y completar una auditoría de accesibilidad independiente.

**Repositorio:** pendiente de crear/publicar; incorporar aquí la URL real.  
**Demostración:** pendiente de desplegar; incorporar aquí la URL real.

## Referencias

Frain, B. (2022). *Responsive Web Design with HTML5 and CSS* (4.ª ed.). Packt.  
DuRocher, D. (2021). *HTML and CSS QuickStart Guide*. ClydeBank Media.  
Robbins, J. N. (2018). *Learning Web Design* (5.ª ed.). O’Reilly Media.
