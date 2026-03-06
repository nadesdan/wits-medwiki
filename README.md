# 🏥 Wits MedWiki

Clinical knowledge base for Wits medical students, interns, and junior doctors.

Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and structured using the [Diataxis framework](https://diataxis.fr).

---

## Quick Start (Local Development)

### Prerequisites
- Python 3.9+ installed ([python.org](https://python.org))
- Git installed ([git-scm.com](https://git-scm.com))

### 1. Clone the repository
```bash
git clone https://github.com/your-username/wits-medwiki.git
cd wits-medwiki
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run locally
```bash
mkdocs serve
```
Open your browser at **http://localhost:8000** — the site live-reloads as you edit.

---

## Deploying to GitHub Pages (Free Hosting)

### First-time setup
1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `wits-medwiki` (public)
3. Push this project to it:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/wits-medwiki.git
git push -u origin main
```

4. In your GitHub repository, go to **Settings → Pages → Source** and select **gh-pages branch**

### After that
Every time you push to `main`, GitHub Actions automatically builds and deploys the site.

Your site will be live at: `https://your-username.github.io/wits-medwiki/`

---

## Project Structure

```
wits-medwiki/
├── mkdocs.yml              ← Site configuration, navigation, plugins
├── requirements.txt        ← Python dependencies
├── docs/
│   ├── index.md            ← Home page
│   ├── contributing.md     ← How to write articles
│   ├── tags.md             ← Auto-generated tag index
│   ├── stylesheets/
│   │   └── extra.css       ← Wits branding + Diataxis colours
│   ├── javascripts/
│   │   └── extra.js        ← Auto type-badge injection
│   ├── internal-medicine/
│   │   ├── index.md
│   │   ├── tutorial-breathless-patient.md
│   │   ├── ref-dka-protocol.md
│   │   └── ...
│   ├── surgery/
│   ├── paediatrics/
│   ├── emergency/
│   └── ...
└── .github/
    └── workflows/
        └── deploy.yml      ← Auto-deploy on push to main
```

---

## Article Naming Convention

All article filenames must follow this pattern:
```
{type}-{short-name}.md
```

| Prefix | Diataxis Type | Use for |
|---|---|---|
| `tutorial-` | Tutorial | Learning step-by-step |
| `howto-` | How-To Guide | Performing a task |
| `ref-` | Reference | Looking up facts/protocols |
| `explanation-` | Explanation | Understanding concepts |

---

## Contributing

See [CONTRIBUTING in the docs](docs/contributing.md) for the full guide including:
- Diataxis article type selection
- Required frontmatter fields
- Article templates for each type
- The review and approval workflow

---

## Technology Stack

| Tool | Purpose |
|---|---|
| [MkDocs](https://www.mkdocs.org) | Static site generator |
| [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) | Theme |
| [GitHub Pages](https://pages.github.com) | Free hosting |
| [GitHub Actions](https://github.com/features/actions) | Auto-deploy |
| Markdown + YAML | Article format |

---

## Disclaimer

Content on Wits MedWiki is for **educational purposes only**. Always verify against current institutional guidelines and senior clinical advice before applying information to patient care.
