# Astro Projects Dashboard - Clase Magistral

Una aplicación de gestión de proyectos construida con **Astro** que demuestra los conceptos fundamentales de la arquitectura de islas y desarrollo web moderno enfocado en rendimiento.

## 🎯 Propósito

Este proyecto es un caso de estudio completo para una clase magistral sobre Astro. Muestra cómo construir aplicaciones web rápidas y escalables utilizando:

- **Componentes estáticos** que se renderan como HTML puro
- **Client Islands** (islas de cliente) para interactividad selectiva
- **Hidratación parcial** para optimizar el rendimiento
- **Tailwind CSS** para estilos modernos y consistentes

## 🚀 Características

### Componentes Principales

- **Dashboard**: Vista general de proyectos con estadísticas en tiempo real
- **Filtros Interactivos**: Búsqueda y filtrado de proyectos por estado
- **Tarjetas de Proyecto**: Visualización clara del progreso y estado
- **Página de Tareas**: Agregación de todas las tareas de todos los proyectos
- **Detalles de Proyecto**: Vista detallada de cada proyecto individual

### Arquitectura

| Componente | Tipo | Directiva |
|-----------|------|-----------|
| DashboardLayout | Client Island | `client:load` |
| ProjectFilter | Client Island | `client:idle` |
| ProjectCard | Estático | — |
| DashboardStats | Estático | — |

## 📋 Conceptos de Astro Demostrados

### 1. Arquitectura de Islas

La mayoría de la página se renderiza como HTML estático (el "agua"), mientras que los componentes interactivos son "islas" independientes que se cargan selectivamente.

```jsx
// Componente estático - HTML puro
export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}
```

### 2. Client Directives

Las directivas `client:*` controlan cuándo y cómo se hidrata cada componente:

```jsx
// Carga inmediatamente (crítico)
<DashboardLayout client:load>

// Carga cuando el navegador está inactivo
<ProjectFilter client:idle onChange={handleChange} />

// Carga solo cuando es visible
<GalleryComponent client:visible />
```

### 3. Gestión de Estado

Los componentes interactivos usan React hooks para manejar estado:

```jsx
export default function ProjectFilter({ onFilterChange }) {
  const [selectedStatus, setSelectedStatus] = React.useState('all');
  
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    onFilterChange(status);
  };
  
  return (
    <div>
      {/* Filtros interactivos */}
    </div>
  );
}
```

## 🛠️ Instalación y Desarrollo

### Requisitos

- Node.js 18+
- npm o pnpm

### Configuración

```bash
# Clonar el repositorio
git clone https://github.com/maximofernandezriera/astro-projects-cli.git
cd astro-projects-cli

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Compilación para Producción

```bash
# Compilar
npm run build

# Vista previa de la compilación
npm run preview
```

## 📁 Estructura del Proyecto

```
client/
  src/
    components/
      DashboardLayout.tsx      # Layout principal con sidebar
      DashboardStats.tsx       # Tarjetas de estadísticas
      ProjectCard.tsx          # Tarjeta individual de proyecto
      ProjectFilter.tsx        # Filtros interactivos
      StatCard.tsx             # Componente de estadística
    pages/
      Home.tsx                 # Página principal del dashboard
      ProjectDetail.tsx        # Detalles de un proyecto
      Tasks.tsx                # Vista de todas las tareas
    lib/
      mockData.ts              # Datos de ejemplo
    App.tsx                    # Router principal
    index.css                  # Estilos globales con Tailwind
  index.html                   # HTML base
  
server/
  index.ts                     # Servidor Express (no usado en esta versión)

SLIDES.md                      # Diapositivas en Markdown
DEVELOPMENT_GUIDE.md           # Guía completa de desarrollo
```

## 🎓 Guía de Desarrollo para Juniors

### Cuándo Usar Componentes Estáticos

Usa componentes estáticos cuando:

- Solo muestran datos (sin estado)
- No tienen event listeners
- Son puramente presentacionales

**Ejemplos**: tarjetas, estadísticas, listas de solo lectura

### Cuándo Usar Client Islands

Usa Client Islands cuando:

- Necesitan manejar estado (React hooks)
- Tienen event listeners (click, input, etc.)
- Requieren interactividad del usuario

**Ejemplos**: formularios, filtros, modales, carruseles

### Flujo de Desarrollo Recomendado

1. **Comienza con Estático**: Crea un componente que solo renderice datos
2. **Agrega Interactividad si es Necesaria**: Convierte a Client Island solo si lo necesitas
3. **Elige la Directiva Correcta**: 
   - `client:load` para componentes críticos
   - `client:idle` para componentes secundarios
   - `client:visible` para componentes debajo del fold

### Mejores Prácticas

- **Renderiza como HTML por defecto**: No incluyas JavaScript innecesario
- **Mantén islas pequeñas**: Componentes independientes y reutilizables
- **Monitorea el rendimiento**: Mide el impacto de cada isla
- **Usa Tailwind CSS**: Mantén consistencia con los tokens de diseño

## 🎨 Diseño y Estilos

El proyecto utiliza **Tailwind CSS 4** con tokens de diseño personalizados definidos en `client/src/index.css`:

```css
:root {
  --primary: oklch(0.55 0.24 264.5);
  --background: oklch(1 0 0);
  --foreground: oklch(0.2 0.01 0);
  /* más variables... */
}
```

Todos los componentes usan estos tokens para mantener consistencia visual.

## 📊 Datos

El proyecto utiliza **mock data** en `client/src/lib/mockData.ts`. En una aplicación real, estos datos vendrían de una API:

```typescript
export const mockProjects = [
  {
    id: '1',
    name: 'Rediseño del Portal',
    status: 'in-progress',
    progress: 65,
    team: ['Ana García', 'Carlos López'],
    tasks: [...]
  },
  // más proyectos...
];
```

## 🔍 Debugging

### El Componente no es Interactivo

Si tu componente no responde a clicks o cambios, probablemente olvidaste la directiva `client:*`. Verifica que esté presente en la página.

### Demasiado JavaScript

Si tu página carga mucho JavaScript, revisa qué componentes están marcados con `client:load`. Intenta cambiar a `client:idle` o `client:visible`.

### Errores de Hidratación

Los errores de hidratación ocurren cuando el HTML renderizado en el servidor no coincide con el que React espera. Asegúrate de que tus componentes renderan el mismo HTML en ambos lados.

## 📚 Documentación Adicional

- **[SLIDES.md](./SLIDES.md)** - Diapositivas completas de la clase magistral en Markdown
- **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** - Guía técnica detallada para desarrolladores
- **[Documentación Oficial de Astro](https://docs.astro.build)** - Referencia completa

## 🚀 Próximos Pasos

Para mejorar esta aplicación, considera:

1. **Conectar a una API Real**: Reemplaza mockData con llamadas a una API REST
2. **Agregar Autenticación**: Implementa un sistema de login básico
3. **Persistencia de Datos**: Guarda cambios en una base de datos
4. **Animaciones**: Agrega transiciones suaves con Framer Motion
5. **Temas**: Implementa modo oscuro/claro

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado como caso de estudio para clase magistral de Astro.

---

**¿Preguntas?** Consulta la documentación oficial de Astro en [https://docs.astro.build](https://docs.astro.build)
