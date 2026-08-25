# 📝 Clean & Minimal To-Do Web App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Security: Gitleaks](https://img.shields.io/badge/Security-Gitleaks-green.svg)](https://github.com/gitleaks/gitleaks)

A clean, responsive, dependency-free To-Do List web application built with vanilla HTML5, modern CSS3, and ES6 JavaScript.

---

## 🌟 Features

- **Task Management:** Add, complete, and delete tasks instantly.
- **Local Persistence:** Automatically synchronizes and saves tasks to browser `localStorage`.
- **Responsive Dark Theme:** Modern card UI optimized for desktop and mobile browsers.
- **Zero Dependencies:** Pure browser technologies — zero runtime frameworks, zero build steps.

---

## 🚀 Quickstart

Open `frontend/index.html` directly in any web browser, or serve it locally:

```bash
# Using Python
cd frontend
python -m http.server 3000

# Using Node / npx
npx serve frontend
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```text
TO-DO-list-web/
├── frontend/
│   ├── index.html   # Main application markup & embedded stylesheet
│   └── app.js       # Task state management & localStorage persistence
├── .github/         # CI validation workflows
└── LICENSE          # MIT license
```

---

## 🔒 Security

- Secret scanning via `gitleaks` pre-commit hooks.
- XSS-safe DOM node creation and HTML escaping for task inputs.
