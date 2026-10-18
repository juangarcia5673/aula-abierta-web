# Aula Abierta — sitio web responsivo

Proyecto académico demostrativo para la actividad «Diseño e implementación de un sitio web responsivo y accesible» de la Unidad 1 de Aplicaciones Web.

## Estructura

```text
AulaAbierta_Web/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/ilustracion-lab.svg
├── assets/favicon.svg
├── evidencias/
└── README.md
```

## Cómo ejecutarlo en Eclipse

1. Descarga y descomprime la carpeta del proyecto.
2. Abre Eclipse IDE. Para un proyecto estático basta con Eclipse IDE for Enterprise Java and Web Developers; no requiere servidor Java ni Maven.
3. Ve a **File > Import > General > Projects from Folder or Archive** (en algunas versiones aparece como **Existing Projects into Workspace**). Selecciona la carpeta `AulaAbierta_Web`.
4. Abre `index.html` y utiliza **Open With > Web Browser**. Si esa opción no está disponible, abre el archivo directamente en Chrome, Firefox o Edge desde el explorador de archivos.
5. Para revisar cambios, guarda los archivos y recarga el navegador. No hace falta compilar ni instalar dependencias.

## Funciones incluidas

- Navegación adaptable con botón accesible en pantallas pequeñas, estado `aria-expanded` y cierre con `Escape`.
- Filtro del programa por talleres, charlas y comunidad; el estado seleccionado y el número de resultados se anuncian con atributos ARIA.
- Formulario con etiquetas asociadas, validación de campos, mensajes por campo, foco al error y región de estado accesible. Es una demostración local: no transmite ni almacena información.
- Enlace para saltar al contenido, elementos semánticos, texto alternativo para la ilustración, foco visible y respeto a la preferencia de movimiento reducido.

## Diseño responsivo

El CSS sigue el enfoque *mobile first*. A partir de `48rem` (768 px) se activa la navegación horizontal y se organizan las áreas principales en dos columnas. A partir de `64rem` (1024 px) la agenda pasa a cuatro columnas. Se emplean variables CSS, Grid, Flexbox, unidades fluidas y `clamp()` para escalar títulos.

## Pruebas y limitaciones

Ver las capturas en `evidencias/` y el informe técnico PDF que acompaña el ZIP. Las capturas documentan anchos de 390, 768 y 1440 píxeles. Se realizaron verificaciones funcionales locales del menú, filtro y formulario, y comprobaciones de desbordamiento horizontal en esos tamaños.

Pendiente para una publicación real: reemplazar el contenido ilustrativo por información confirmada, revisar el sitio con tecnologías de asistencia reales, conectar el formulario a un servicio con medidas de privacidad y desplegar el proyecto en un alojamiento web.

## Publicar en GitHub y activar la demostración

El proyecto incluye `.github/workflows/pages.yml` para desplegar el sitio en GitHub Pages al enviar cambios a la rama `main`.

1. Crea un repositorio nuevo en tu cuenta de GitHub, preferiblemente público si usas GitHub Free.
2. Sube el contenido de esta carpeta a la rama `main` (incluida la carpeta `.github`). Puedes usar la interfaz web de GitHub o Git en tu computadora.
3. En el repositorio, entra a **Settings > Pages** y selecciona **GitHub Actions** como origen de publicación.
4. Abre la pestaña **Actions**, espera a que termine el flujo **Publicar sitio en GitHub Pages** y copia la URL de la página cuando el despliegue termine correctamente.
5. Copia la URL real del repositorio y la URL pública al informe PDF, reemplazando los campos que dicen que están pendientes.

Guías oficiales: [crear un repositorio](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) y [configurar la fuente de publicación de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Recuerda que una página de GitHub Pages es pública; no subas contraseñas ni datos privados.

El proyecto aún no está publicado y no contiene URLs inventadas. Las URL definitivas dependen del repositorio que crees en tu cuenta.

## Antes de entregar

- En `Apellido_Nombre_AplWeb_U1.pdf`, reemplaza `[Completar nombre y apellido]` por tus datos y renombra el archivo siguiendo el patrón `Apellido_Nombre_AplWeb_U1.pdf` con tus apellidos y nombre reales.
- Publica el proyecto para obtener las URLs reales del repositorio y de la demostración. El informe indica que esas URLs están pendientes; no entregues el PDF con esos campos pendientes si tu docente exige enlaces públicos.
- Las capturas de página completa llevan el prefijo `captura_`; las imágenes de la primera vista del navegador llevan el prefijo `vista_`.
