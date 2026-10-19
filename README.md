# Aula Abierta — sitio web responsivo

Proyecto académico demostrativo para la Unidad 1 de Aplicaciones Web. Presenta una iniciativa académica ficticia con actividades, información y un formulario de demostración.

## Enlaces

- **Repositorio:** https://github.com/juangarcia5673/aula-abierta-web
- **Sitio publicado:** se añadirá cuando GitHub Pages confirme el despliegue.

## Archivos principales

- `index.html`: contenido y estructura semántica.
- `css/styles.css`: diseño responsivo mobile-first.
- `js/main.js`: menú adaptable, filtro de actividades y validación del formulario.
- `assets/`: ilustraciones e iconos.
- `evidencias/`: capturas y resultados de pruebas.
- `.github/workflows/pages.yml`: flujo para publicar el sitio con GitHub Pages.

## Abrir en Eclipse

1. Descarga o clona este repositorio.
2. En Eclipse, selecciona **File > Import > General > Projects from Folder or Archive** (o **Existing Projects into Workspace**, según la versión).
3. Selecciona la carpeta del proyecto.
4. Abre `index.html` con **Open With > Web Browser**, o abre el archivo directamente en Chrome, Firefox o Edge.
5. No requiere Maven ni dependencias adicionales.

## Publicar con GitHub Pages

1. Abre **Settings > Pages** en este repositorio.
2. En **Build and deployment**, selecciona **GitHub Actions** como **Source**.
3. Abre **Actions** y busca **Publicar sitio en GitHub Pages**.
4. Espera a que la ejecución termine con una marca verde. Luego ve a **Settings > Pages** y usa **Visit site** para obtener la URL pública.

El flujo se ejecuta al subir cambios a la rama `main`. Si no aparece el flujo, comprueba que existe `.github/workflows/pages.yml`.

## Funciones y accesibilidad

- Menú adaptable, con estado accesible y cierre con Escape.
- Filtro interactivo para las actividades.
- Formulario con etiquetas asociadas, validación y mensajes accesibles.
- HTML semántico, orden lógico de encabezados, texto alternativo, foco visible y enlace para saltar al contenido.
- CSS mobile-first con variables, Grid, Flexbox y media queries.

El formulario es solo una demostración: no transmite ni almacena datos. El contenido académico es ilustrativo y no representa una convocatoria oficial de la universidad.

## Evidencias e informe

Las capturas de escritorio, tableta y móvil están en `evidencias/`. El informe técnico debe completarse con el nombre de la persona estudiante y la URL definitiva de la demostración una vez publicada.
