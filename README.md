# Dynamic Registry Builder

> Laravel 12 + Vue 3 (Vuetify) SaaS that lets each user build unlimited, custom-field data registries and manage the records inside them.

| Layer | Tech | Notes |
|-------|------|-------|
| API   | **Laravel 12**, PHP 8.3 | Sanctum auth, REST, JSONB storage |
| SPA   | **Vue 3 + Vuetify 3**   | Vite build, light / dark themes |
| DB    | **PostgreSQL 15**       | Managed by Render |
| Ops   | **Render.com**          | `render.yaml` blueprint below |

---

## 🚀 Deploy to Render (one click)

1. **Fork / push** this repo to your own GitHub account **with `render.yaml` in the root**.  
2. Log in to Render → **New + → Blueprint** → select the repo.  
3. Accept the defaults. Render will automatically create:
   * a **Free PostgreSQL** instance (`registry-db`)
   * a **Web Service** for the Laravel API (`registry-api`)
   * a **Static Site** for the built Vue SPA (`registry-ui`)
4. Wait for the initial build. When the UI is live, open it and create your first account.

> **Tip:**  
> The SPA gets the API endpoint from `VITE_API_BASE_URL`, set automatically in the blueprint.  
> If you rename services, update that env var to match `https://your-api-service.onrender.com`.

---

## 🖥️ Run Locally (Docker)

```bash
git clone https://github.com/you/dynamic-registry-builder.git
cd dynamic-registry-builder

# spin everything up
docker compose up -d --build

# first-time backend setup
docker compose exec api composer install
docker compose exec api php artisan key:generate
docker compose exec api php artisan migrate

# first-time frontend setup
docker compose exec ui pnpm install
docker compose exec ui pnpm run build
