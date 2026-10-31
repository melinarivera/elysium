# Grupo Elysium — Web Corporativa

Sitio web institucional de **Grupo Elysium**, organización mexicana dedicada a la gestión de estancias infantiles y centros de educación inicial.

## Stack técnico

- **Framework:** [Astro](https://astro.build/) 4.x (generación estática)
- **Estilos:** Tailwind CSS 3.x
- **Lenguaje:** TypeScript (strict)
- **Despliegue objetivo:** GitHub Pages (`https://melinarivera.github.io/elysium/`)

## Despliegue en GitHub Pages

El proyecto ya está preparado para publicarse en `https://melinarivera.github.io/elysium/` mediante **GitHub Actions**.

### Pasos para publicar:

1. **Subir los cambios a GitHub:**
   ```bash
   git add .
   git commit -m "feat: landing corporativa Grupo Elysium con imagenes y GitHub Pages"
   git push origin main
   ```

2. **Activar GitHub Pages en el repositorio:**
   - Ve a tu repositorio en GitHub: `https://github.com/melinarivera/elysium`
   - Haz clic en **Settings** (Configuración) → pestaña **Pages** (en el menú lateral izquierdo).
   - En la sección **Build and deployment** > **Source**, selecciona:
     👉 **GitHub Actions** (en lugar de "Deploy from a branch").

¡Y listo! Cada vez que hagas `git push`, GitHub compilará el sitio y lo publicará en cuestión de un par de minutos.

## Requisitos previos

- Node.js 18+ o 20+
- npm 9+ (o pnpm / yarn)

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`.

## Build de producción

```bash
npm run build
npm run preview   # para previsualizar el build localmente
```

## Estructura de archivos

```
src/
├── config/
│   └── site.ts          ← Configuración central de contenidos (editar aquí)
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── PMV.astro
│   ├── Services.astro
│   ├── Process.astro
│   ├── Values.astro
│   ├── Commitment.astro
│   ├── Timeline.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro              ← Landing principal
│   ├── nosotros.astro
│   ├── contacto.astro
│   ├── aviso-de-privacidad.astro
│   └── 404.astro
└── styles/
    └── global.css
public/
├── images/
│   └── logo-grupo-elysium.jpg
└── robots.txt
```

## Actualizar contenidos

Todos los textos institucionales, navegación, valores, servicios y datos de contacto se gestionan desde un único archivo:

**`src/config/site.ts`**

No es necesario modificar los componentes para actualizar el contenido.

## Pendientes antes de publicar

Ver [PENDIENTES.md](./PENDIENTES.md) para la lista completa de tareas previas a la publicación.

## Licencia

Uso privado — Grupo Elysium. Todos los derechos reservados.
