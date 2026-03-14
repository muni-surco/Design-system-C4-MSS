# Design System Surco — Centro de Operaciones C4

Este es el sistema de diseño oficial para las aplicaciones web del Centro de Operaciones C4 de la Municipalidad de Santiago de Surco. Diseñado para ser moderno, funcional y altamente eficiente en entornos operativos de alta demanda.

## 🚀 Características Principales

- **Estética Municipal de Vanguardia**: Una paleta de colores profesional basada en el azul institucional con acentos de éxito (verde) y alerta (rojo/naranja).
- **Tipografía "Chivo"**: Google Font seleccionada por su legibilidad y robustez.
- **Micro-interacciones**: Transiciones suaves y feedback visual inmediato para una experiencia de usuario premium.
- **Componentes Avanzados**: Firma digital, selectores múltiples, carga de archivos y widgets estadísticos listos para usar.
- **Arquitectura Ligera**: Construido con HTML5, CSS3 y JavaScript vanilla para máxima compatibilidad y rendimiento.

## 📁 Estructura del Proyecto

```text
c:\Design-system\
├── index.html                # Página principal de documentación y demos
├── design-system-surco.css   # Núcleo de estilos (Variables, Átomos, Componentes)
├── design-system-surco.js    # Lógica de componentes (Selects, Toasts, Firma, etc.)
└── README.md                 # Este documento
```

## 🛠 Guía de Inicio Rápido

Para utilizar este sistema de diseño en un nuevo proyecto, vincula los archivos base:

```html
<!-- En el head -->
<link rel="stylesheet" href="design-system-surco.css">

<!-- Al final del body -->
<script src="https://unpkg.com/lucide@latest"></script>
<script src="design-system-surco.js"></script>
```

## 🧩 Componentes Disponibles

### Atómicos (Básicos)
- **Botones**: Primarios, secundarios, de éxito, peligro y advertencia.
- **Inputs**: Estándar, con validación, selectores múltiples y búsqueda predictiva.
- **Badges**: Etiquetas de estado con puntos indicadores de actividad.
- **Toggles**: Interruptores de estado suaves y táctiles.

### Compuestos y Patrones
- **Cards**: Contenedores de información con cabeceras y pies de página.
- **Modales**: Ventanas emergentes para flujos de confirmación o edición.
- **Toasts**: Sistema de notificaciones no intrusivas en tiempo real.
- **Widgets Estadísticos**: Gráficos de barras, líneas y donas construidos con CSS/SVG.
- **Layouts**: Sistemas de navegación lateral y superior, y dashboards adaptativos.

---
© 2026 Centro de Operaciones C4 — Municipalidad de Santiago de Surco.
