# PostHog A/B Testing Setup Guide

## 📦 Installation

PostHog ya está instalado y configurado en el proyecto. Solo necesitas agregar tus credenciales.

## 🔑 Configuración de Variables de Entorno

Agrega estas variables a tu archivo `.env` (local y producción):

```bash
# PostHog - A/B Testing & Analytics
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

### Obtener tu PostHog Key:

1. **Crear cuenta gratis**: https://app.posthog.com/signup
2. Selecciona el plan **Free** (1M events/mes gratis)
3. Una vez creado tu proyecto, ve a **Settings** → **Project API Key**
4. Copia el **Project API Key** (empieza con `phc_`)

## 🧪 Configurar tu Primer A/B Test (Hero H1)

### Paso 1: Crear Feature Flags en PostHog (uno por idioma)

Necesitas crear **2 feature flags**, uno para español y otro para inglés:

#### Feature Flag #1: Español

1. Ve a **Feature Flags** en el sidebar
2. Click en **New feature flag**
3. Configura:
   - **Key**: `hero-h1-test-es`
   - **Name**: Hero H1 A/B Test - Spanish
   - **Type**: Selecciona **Multivariate**
   
4. Define las variantes:
   ```
   Variant Key: control
   Description: "Más delivery, reservas y tráfico en el restaurante sin comisión"
   Rollout: 50%
   
   Variant Key: variant_b
   Description: "Genera más ventas en tu restaurante sin comisión ni esfuerzo"
   Rollout: 50%
   ```

5. **Release conditions**: 
   - Selecciona **Roll out to 100% of users**

6. Click **Save & Enable**

#### Feature Flag #2: English

1. Click en **New feature flag** nuevamente
2. Configura:
   - **Key**: `hero-h1-test-en`
   - **Name**: Hero H1 A/B Test - English
   - **Type**: Selecciona **Multivariate**
   
3. Define las variantes:
   ```
   Variant Key: control
   Description: "More orders, bookings & walk-ins zero commission"
   Rollout: 50%
   
   Variant Key: variant_b
   Description: "Generate more restaurant revenue zero commission, zero hassle"
   Rollout: 50%
   ```

4. **Release conditions**: 
   - Selecciona **Roll out to 100% of users**

5. Click **Save & Enable**

### Paso 2: Verificar que funciona

1. Abre tu sitio en incógnito
2. Refresca varias veces - deberías ver diferentes textos del hero
3. En PostHog Dashboard ve a **Feature Flags** → `hero-h1-test`
4. Verás métricas de exposición y uso

## 📊 Eventos que se Trackean Automáticamente

El hook `useABTest` trackea estos eventos tanto en **PostHog** como en **GA4**:

### 1. **ab_test_impression**
- Se dispara cuando el usuario ve una variante
- Properties:
  - `test_name`: "hero-h1-test-es" o "hero-h1-test-en"
  - `variant`: "control" | "variant_b"
  - `page_path`: ruta actual

### 2. **hero_widget_focus**
- Usuario hace click en el input del widget
- Properties:
  - `test_name`: "hero-h1-test-es" o "hero-h1-test-en"
  - `variant`: la variante que vio
  - `interaction_type`: "input_focus"

### 3. **hero_widget_search**
- Usuario hace click en el botón de búsqueda
- Properties:
  - `test_name`: "hero-h1-test-es" o "hero-h1-test-en"
  - `variant`: la variante que vio
  - `interaction_type`: "search_click"

## 📈 Analizar Resultados

### En PostHog:

1. Ve a **Insights** → **New Insight**
2. Selecciona **Funnel** o **Trend**
3. Configura:
   - **Events**: `ab_test_impression` → `hero_widget_search`
   - **Breakdown**: Add breakdown → `variant`
   
4. PostHog calculará automáticamente:
   - Conversion rate por variante
   - Statistical significance
   - Tamaño de muestra

### En Google Analytics 4:

1. Ve a **Explore** → **Free form**
2. Agrega dimensiones:
   - `Event name`
   - `test_name`
   - `variant`
3. Métricas: `Event count`, `Conversions`
4. Filtra por eventos: `ab_test_impression`, `hero_widget_search`

## 🎯 Crear Nuevos Tests

Para crear un nuevo A/B test en cualquier componente:

### 1. En PostHog Dashboard:
Crea un nuevo Feature Flag (ej: `cta-button-color`)

### 2. En tu componente:
```tsx
'use client'
import { useABTest } from '@/hooks/useABTest'

export default function MyComponent() {
  const { variant, trackConversion } = useABTest('cta-button-color', 'blue')
  
  const buttonColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600'
  }
  
  return (
    <button 
      className={buttonColors[variant]}
      onClick={() => trackConversion('cta_click')}
    >
      Get Started
    </button>
  )
}
```

## 🔒 Privacidad y GDPR

PostHog es GDPR-compliant:
- No usa cookies de third-party
- Puedes self-host si necesitas
- Enmascaramiento automático de inputs sensibles
- Configurado en `src/lib/posthog.ts`

## 🚀 Features Adicionales

PostHog incluye (gratis):
- ✅ A/B Testing
- ✅ Feature Flags
- ✅ Product Analytics
- ✅ Session Recording
- ✅ Heatmaps
- ✅ User Surveys
- ✅ Integración con GA4

## 📚 Documentación Oficial

- Docs: https://posthog.com/docs
- A/B Testing Guide: https://posthog.com/docs/experiments
- Feature Flags: https://posthog.com/docs/feature-flags

## ⚙️ Configuración Avanzada

### Desactivar Session Recording:
```typescript
// src/lib/posthog.ts
disable_session_recording: true
```

### Solo trackear en producción:
```typescript
// src/lib/posthog.ts
if (process.env.NODE_ENV === 'development') {
  posthog.opt_out_capturing()
}
```

### Bootstrap de Feature Flags (SSR):
Para evitar flash de contenido, puedes cargar los flags server-side (requiere configuración adicional).

---

## 🐛 Troubleshooting

### No veo datos en PostHog:
1. Verifica que `NEXT_PUBLIC_POSTHOG_KEY` esté en `.env`
2. Abre DevTools → Console, busca errores de PostHog
3. Verifica que no estés en modo desarrollo (está desactivado por defecto)

### El test siempre muestra la misma variante:
1. Borra cookies del sitio
2. Usa modo incógnito
3. Verifica en PostHog que **ambos flags** (`hero-h1-test-es` y `hero-h1-test-en`) estén **enabled** y con **rollout 100%**

### Los eventos no llegan a GA4:
1. Verifica que `NEXT_PUBLIC_GA_MEASUREMENT_ID` esté configurado
2. Chequea que `window.gtag` esté disponible en DevTools
3. Los eventos aparecen en GA4 con delay de ~24h (usa DebugView para ver en real-time)

---

✅ **Setup completo!** Ahora puedes correr A/B tests de manera profesional.

