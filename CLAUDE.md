# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Docusaurus 3.9** documentation site for JoliMardi - a custom CSS framework and Laravel package. The site documents both the CSS framework (`jolimardi-css`) and its Laravel integration package.

The site has two main documentation sections:
- **Documentation CSS**: Core CSS framework documentation (Basics, Helpers, Layout, Forms, Components, Plugins)
- **Documentation Laravel**: Laravel package integration documentation (Installation, Features)

## Node.js Setup (IMPORTANT!)

**This project requires Node.js 20.0+ (Docusaurus 3.9 requirement).**

The system has multiple Node.js versions installed:
- System Node (via apt): v18.19.1 (insufficient for Docusaurus 3.9)
- nvm Node: v24.2.0 (recommended)

**CRITICAL**: Before running any npm commands, you MUST activate Node 24 using nvm:

```bash
# Load nvm (if not already in your shell)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Switch to Node 24
nvm use 24.2.0

# Verify (should show v24.2.0)
node --version
```

**Why this matters**: If you run commands with the system Node (v18), you'll get an error:
```
[ERROR] Minimum Node.js version not met :(
[INFO] You are using Node.js v18.19.1, Requirement: Node.js >=20.0.
```

## Development Commands

**IMPORTANT**: Run `nvm use 24.2.0` before executing these commands!

**Local development:**
```bash
npm start
# or
yarn start
```
This starts a development server at http://localhost:3000/ with hot reload.

**Build for production:**
```bash
npm run build
# or
yarn build
```
Generates static content into the `build` directory.

**Serve production build locally:**
```bash
npm run serve
# or
yarn serve
```

**Clear cache:**
```bash
npm run clear
# or
yarn clear
```

**Deploy to GitHub Pages:**
```bash
npm run deploy
# or
yarn deploy
```

## Project Architecture

### Documentation Structure

Documentation is organized in `docs/` with two main sidebars (defined in `sidebars.js`):

1. **tutorialSidebar** - CSS framework documentation with categories:
   - Basics (variables, typography, colors)
   - Helpers (spacing, flexbox, text utilities, etc.)
   - Layout (sections, max-widths, topbar, menu, footer)
   - Forms (markup, inputs, selects, validation, dropzone)
   - Components (buttons, cards, badges, pagination, etc.)
   - Plugins (fancybox, slick-slider, selectize, sweetalert, sortable)

2. **laravelSidebar** - Laravel package documentation with:
   - Installation guides (package installation, step-by-step setup)
   - Features (Nova fields, JoliMardi features like jm-menu, jm-sections, jm-flash, jm-metas, third-party integrations)

### Git Submodule

The `jolimardi-css` framework is included as a **git submodule** at `src/css/jolimardi-css/`:
- Submodule URL: https://github.com/jolimardi/jolimardi-css.git
- Branch: `main`
- Update mode: rebase

When working with the submodule:
```bash
# Initialize/update submodule after clone
git submodule update --init --recursive

# Update submodule to latest
cd src/css/jolimardi-css
git pull origin main
cd ../..
git add src/css/jolimardi-css
```

### Custom CSS Integration

The Docusaurus theme loads three CSS files (see `docusaurus.config.js`):
1. `./src/css/custom.css` - Docusaurus custom theme overrides
2. `./src/css/jolimardi-css/dist/vars-only.css` - CSS variables from the framework
3. `./src/css/jolimardi-css/dist/jolimardi-scoped.css` - Scoped framework styles

The framework CSS is built using webpack (see `src/css/jolimardi-css/webpack.config.js`).

### Deployment

Deployment to GitHub Pages is automated via GitHub Actions (`.github/workflows/deploy.yml`):
- Triggers on push to `master` branch
- Uses Node 20 (required for Docusaurus 3.9)
- Runs `npm ci` and `npm run build`
- Deploys to `gh-pages` branch using peaceiris/actions-gh-pages
- **Important**: Requires `ACCESS_TOKEN` secret to be configured
- **Important**: Checks out submodules automatically (`submodules: true`)

Deployment config in `docusaurus.config.js`:
- URL: `https://jolimardi.github.io`
- Base URL: `/documentation/`
- Organization: `romain.cherot`
- Project: `documentation.github.io`

### Docusaurus Configuration

Key configuration points (`docusaurus.config.js`):
- **Prism syntax highlighting**: Includes PHP language support
- **Theme**: Uses VS Dark theme for both light and dark modes
- **Blog**: Disabled (`blog: false`)
- **onBrokenLinks**: Set to `ignore` (not recommended for production)
- **onBrokenMarkdownLinks**: Set to `warn`

## Working with Documentation

### Adding New Documentation Pages

1. Create a new `.md` file in the appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` if needed
3. Register the page in `sidebars.js` under the correct sidebar and category

Example:
```markdown
---
sidebar_position: 2
---

# Page Title

Content here...
```

### Editing Documentation

All documentation uses standard Markdown with MDX support. You can:
- Use React components within documentation
- Reference code with syntax highlighting (supports PHP via Prism)
- Include interactive examples

### Sidebar Structure

Sidebars are defined as JavaScript objects in `sidebars.js`:
- `type: 'doc'` - Single documentation page
- `type: 'category'` - Collapsible category with nested items
- Each doc referenced by its path relative to `docs/` (without `.md` extension)

## Package Versions

- **Docusaurus**: 3.9.2
- **React**: 18.2.0
- **MDX**: 3.0.0
- **prism-react-renderer**: 2.4.0
- **Node.js version**: >= 20.0 (specified in `package.json`)
- The project uses npm (package-lock.json present)
- **IMPORTANT**: Use nvm to activate Node 24.2.0 (see "Node.js Setup" section above)

## Important Notes

- When updating the `jolimardi-css` submodule, remember to commit the submodule reference change
- The deployment workflow requires submodules to be checked out
- Blog functionality is disabled but blog files still exist in the repo
- The site is in French (many docs and labels use French)
