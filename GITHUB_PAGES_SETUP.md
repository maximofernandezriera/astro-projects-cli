# Configuración de GitHub Pages

Esta guía te ayudará a configurar GitHub Pages para desplegar la aplicación.

## Opción 1: Configuración Manual (Recomendado)

1. Ve a tu repositorio en GitHub: https://github.com/maximofernandezriera/astro-projects-cli

2. Haz clic en **Settings** (Configuración)

3. En el menú lateral, selecciona **Pages** (Páginas)

4. En la sección "Build and deployment":
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona `main` y la carpeta `/dist`
   - Haz clic en **Save**

5. GitHub Pages comenzará a compilar y desplegar automáticamente

6. Espera 1-2 minutos y tu sitio estará disponible en:
   ```
   https://maximofernandezriera.github.io/astro-projects-cli/
   ```

## Opción 2: Usar GitHub Actions (Automático)

Si prefieres que se compile automáticamente cada vez que hagas push:

1. Ve a tu repositorio en GitHub

2. Haz clic en **Settings** → **Pages**

3. En "Build and deployment", selecciona:
   - **Source**: "GitHub Actions"

4. GitHub detectará automáticamente que es un proyecto Astro y creará un workflow

5. Cada push a `main` disparará automáticamente el build y deploy

## Verificar el Despliegue

Una vez configurado, puedes verificar el estado:

1. Ve a **Actions** en tu repositorio
2. Verás un workflow llamado "pages build and deployment"
3. Espera a que se complete (debe mostrar un checkmark verde)
4. Tu sitio estará disponible en la URL de GitHub Pages

## Solucionar Problemas

### El sitio no se ve correctamente

Si los estilos o imágenes no se cargan, es probable que sea un problema de rutas. Astro necesita que el `base` esté configurado correctamente.

Verifica `astro.config.mjs`:

```javascript
export default defineConfig({
  base: '/astro-projects-cli/',
  // ... resto de configuración
});
```

### Build falla

1. Verifica que `npm run build` funciona localmente:
   ```bash
   npm install
   npm run build
   ```

2. Si hay errores, corrígelos localmente primero

3. Luego haz push a GitHub

## URLs Útiles

- **Repositorio**: https://github.com/maximofernandezriera/astro-projects-cli
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Astro Deployment**: https://docs.astro.build/en/guides/deploy/

---

¿Necesitas ayuda? Consulta la documentación oficial de GitHub Pages o Astro.
