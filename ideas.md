# Diseño del Dashboard de Gestión de Proyectos

## Enfoque Elegido: Minimalismo Profesional con Acentos Funcionales

He elegido un enfoque que combina la claridad del minimalismo profesional con acentos funcionales que guían la atención del usuario. Este diseño refleja la filosofía de Astro: simplicidad en la estructura, complejidad solo donde es necesaria.

### Filosofía de Diseño

**Movimiento de Diseño**: Minimalismo Funcional con influencias de diseño suizo. Énfasis en la claridad, la jerarquía tipográfica y el uso estratégico del espacio en blanco.

**Principios Centrales**:
1. **Claridad Radical**: Cada elemento tiene un propósito. No hay decoración sin función.
2. **Jerarquía Tipográfica Fuerte**: Tipografía que comunica importancia y estructura sin necesidad de colores brillantes.
3. **Espaciado Generoso**: El espacio en blanco es un elemento de diseño, no un vacío.
4. **Acentos Estratégicos**: Uso limitado de color (azul profesional) para llamar la atención en elementos interactivos críticos.

### Filosofía de Color

La paleta utiliza un enfoque monocromático con acentos:
- **Base**: Blanco puro (fondo) y gris profundo (texto)
- **Acentos**: Azul profesional (índigo) para elementos interactivos, botones y estados activos
- **Secundario**: Gris claro para divisiones y bordes sutiles
- **Intención Emocional**: Confianza, profesionalismo, claridad. El usuario se siente en control.

### Paradigma de Diseño

Estructura asimétrica con sidebar fijo a la izquierda. El contenido principal ocupa el espacio restante con márgenes generosos. Esta estructura refleja cómo los usuarios navegan en aplicaciones profesionales: navegación persistente, contenido explorable.

### Elementos Distintivos

1. **Tarjetas de Proyecto con Indicadores Visuales**: Cada proyecto es una tarjeta con un indicador de estado (barra de progreso sutil, punto de color)
2. **Tipografía Escalonada**: Títulos en sans-serif bold, cuerpo en sans-serif regular, etiquetas en mayúsculas pequeñas
3. **Transiciones Suaves**: Hover effects sutiles en elementos interactivos, sin animaciones excesivas

### Filosofía de Interacción

Los elementos interactivos responden de forma predecible y satisfactoria. Un botón cambia de color al pasar el ratón. Una tarjeta se eleva ligeramente. Los estados son claros: activo, inactivo, cargando, error.

### Directrices de Animación

- Transiciones de 200ms para cambios de estado (hover, focus)
- Entrada de elementos con fade-in suave (300ms)
- Sin animaciones innecesarias que distraigan del contenido
- Animaciones que refuerzan la intención del usuario, no que la obstaculicen

### Sistema Tipográfico

- **Títulos**: Geist Mono para headers (monoespaciada, profesional)
- **Cuerpo**: Inter para texto y UI (legible, moderna)
- **Jerarquía**: 
  - H1: 32px, bold
  - H2: 24px, semibold
  - H3: 18px, medium
  - Body: 14px, regular
  - Small: 12px, regular (labels, metadata)

## Implementación

Esta filosofía se reflejará en:
- Componentes Astro para estructura estática (layout, navegación)
- Client Islands para interactividad (tabla de proyectos, formularios)
- Uso de Tailwind CSS con tokens de diseño consistentes
- Narrativa clara en comentarios de código para la clase magistral
