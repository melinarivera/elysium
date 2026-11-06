# PENDIENTES — Grupo Elysium Web Corporativa

Este documento lista la información que debe confirmarse, proporcionarse o validarse **antes de publicar el sitio en producción**.

---

## 🔴 Datos institucionales

- [ ] **Razón social completa** de la empresa (para footer y aviso de privacidad)
- [x] **Correo electrónico corporativo**: `info@centroelysium.org`
- [x] **Número de teléfono**: `+52 55 6479 3805`
- [ ] **Dirección o domicilio fiscal / de atención** (si se desea mostrar)
- [x] **Número de WhatsApp corporativo**: `+52 55 6479 3805` (activo con botón directo)

---

## 🔴 Validación de datos clave

- [ ] Confirmar documentalmente que la fecha de constitución o inicio de actividades es **2007** (actualmente mostrado como "Desde 2007")
- [ ] Validar que el eslogan **"Cuidamos la gestión. Impulsamos los primeros años."** está aprobado por la organización
- [ ] Confirmar que las **6 áreas de gestión** listadas corresponden a servicios efectivamente operados

---

## 🟡 Contenidos a revisar y personalizar

- [ ] **Aviso de Privacidad** (`/aviso-de-privacidad`): Requiere revisión y validación por asesor jurídico
- [ ] **Misión, Visión y Propósito**: Confirmar textos con dirección institucional
- [ ] **Modelo de gestión** (5 pasos): Validar que el esquema representa fielmente la metodología interna
- [ ] **Valores**: Confirmar los 7 valores y sus descripciones

---

## 🟡 Integraciones técnicas pendientes

- [ ] **Formulario de contacto**: Integrar con servicio de envío real (Resend, Formspree, Mailgun, o endpoint propio). Actualmente muestra aviso de desarrollo.
- [ ] **Open Graph image**: Crear imagen de 1200×630 px para compartir en redes sociales (`/images/og-grupo-elysium.jpg`)
- [ ] **Favicon SVG**: Crear favicon derivado del símbolo del logotipo (archivo `.ico` y `.svg`)
- [ ] **Sitemap XML**: Configurar integración `@astrojs/sitemap` en `astro.config.mjs`
- [ ] **Analytics**: Definir si se usará Google Analytics, Plausible u otra solución. Requiere banner de cookies si se usa GA.

---

## 🟡 Plataforma de despliegue

- [ ] Confirmar plataforma de hosting (Vercel, Netlify, Firebase Hosting, etc.)
- [ ] Configurar dominio `grupoelysium.mx` (u otro)
- [ ] Configurar SSL/HTTPS
- [ ] Actualizar `site` en `astro.config.mjs` con la URL definitiva

---

## 🟢 Opcional / Futuro

- [ ] Añadir fotografías institucionales autorizadas (entornos educativos, sin menores identificables)
- [ ] Ampliar la línea de trayectoria con hitos validados
- [ ] Crear páginas de detalle por área de gestión
- [ ] Integrar blog / noticias institucionales
- [ ] Configurar redirección de `www` a dominio principal
- [ ] Añadir hreflang si se prevé versión en otro idioma

---

*Última actualización: Octubre 2026*
