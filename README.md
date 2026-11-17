# Portfolio de Luis Soto García

Portfolio personal de **Luis Eduardo Soto García**, estudiante de Ingeniería de Sistemas, desarrollador full-stack y fundador de LS Solutions.

El sitio presenta la trayectoria profesional, proyectos destacados, tecnologías y medios de contacto con una estética oscura, moderna y técnica.

## Características

- Diseño responsive para escritorio y dispositivos móviles.
- Navegación por secciones con desplazamiento suave.
- Menú adaptable para pantallas pequeñas.
- Fondo animado con partículas y conexiones.
- Retrato personal integrado en la portada.
- Animaciones de entrada al hacer scroll.
- Secciones de presentación, proyectos, herramientas, trayectoria y contacto.
- Enlaces a GitHub, LinkedIn, LS Solutions y correo electrónico.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Canvas API
- Google Fonts

## Estructura

```text
portafolio-lesg/
├── index.html   # Estructura y contenido del sitio
├── styles.css   # Estilos, responsive design y animaciones
├── script.js    # Canvas, menú móvil y animaciones de scroll
├── assets/
│   └── luis-soto-garcia.jpg  # Fotografía personal de la portada
└── README.md    # Documentación del proyecto
```

## Ejecutar localmente

El proyecto no requiere instalación de dependencias.

### Opción rápida

Abre `index.html` directamente en un navegador.

### Usando un servidor local

Si tienes Node.js instalado, ejecuta desde la carpeta del proyecto:

```powershell
cd "C:\Users\luiss\Documentos\Proyectos\Personal\portafolio-lesg"
npx serve .
```

Después abre la dirección que indique el comando, normalmente:

```text
http://localhost:3000
```

También puedes utilizar la extensión **Live Server** de Visual Studio Code.

## Personalización

La información principal se encuentra en [index.html](./index.html). Los estilos visuales están en [styles.css](./styles.css) y las interacciones en [script.js](./script.js).

Para cambiar el contenido:

1. Edita el nombre, presentación y trayectoria en `index.html`.
2. Actualiza los proyectos y sus enlaces.
3. Modifica los colores y tipografías mediante las variables de `styles.css`.
4. Cambia las redes sociales y el correo en la sección de contacto y el pie de página.

## Proyectos destacados

- [PUCE System](https://github.com/lesg1151860/v0-puce-system)
- [Veterinary System](https://github.com/lesg14/veterinary-system)
- [LS Solutions](https://ls-solutions-website.vercel.app/)
- [Passion Fitness](https://github.com/lesg14/passion-fitness-website)

## Contacto

- Email: [luis.sotto1423@gmail.com](mailto:luis.sotto1423@gmail.com)
- [GitHub](https://github.com/lesg14)
- [LinkedIn](https://www.linkedin.com/in/lesg14/)
- [LS Solutions](https://ls-solutions-website.vercel.app/)

## Despliegue

Al ser un sitio estático, puede desplegarse en servicios como:

- Netlify
- Vercel
- GitHub Pages

Solo necesitas publicar `index.html`, `styles.css` y `script.js` en el proveedor elegido.
