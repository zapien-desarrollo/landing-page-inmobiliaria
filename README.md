# Demo · Inmobiliaria (Cerro Propiedades)

Demo de portfolio de un sitio para una inmobiliaria. Marca, propiedades y datos son ficticios.
Los formularios y botones de WhatsApp no envían nada: muestran un aviso de "Demo".

## Stack

Sitio estático sin build: `index.html`, `propiedad.html`, `styles.css`, `main.js`, `data.js`.
Fotos de Unsplash, mapas de OpenStreetMap (sin API key).

```bash
npx serve .
```

## Qué muestra

- Home: buscador por operación / tipo / localidad / dormitorios, cifras, destacadas,
  catálogo con filtros, orden y favoritas, emprendimiento en pozo con avance de obra,
  servicios, formulario de tasación, equipo, testimonios, FAQ y contacto con mapa.
- Ficha (`propiedad.html?id=CP-1024`): galería con lightbox, precio y expensas,
  características, ficha técnica, mapa, simulador de crédito (solo ventas),
  formulario de consulta con el código de la propiedad y propiedades similares.

Las propiedades se cargan en `data.js`. En un sitio real vendrían de un panel propio
o de la API de Tokko Broker / InmoUp.
