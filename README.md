# Ara App

For production, requires NODE_ENV=production

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site (Vercel: `./.vercel/output/`, local: `./dist/`) |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Initialize and update git submodules:
   ```bash
   git submodule update --init --recursive
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Configuration
   ```bash
   cp .env.example .env # Then set the necessary information
   ```

5. Setup
   ```bash
   pnpm run setup
   ```

5. Run for the first time (let's setup)
   Use dev, if you run the client on frontend. And use beta if the
   database is remote.

   ```bash
   pnpm run dev # or
   pnpm run beta
   ```

6. Create your first user
   Visit the page at https://localhost:4321/

   Then, login on top-right button. It will create the data on frontend.
   Enjoy! :)