# TO-DO-list-web

A small to-do list front end written in plain JavaScript. It runs in the browser and has no dependencies, no package manifest, and no build step. The project is unfinished: it contains working task logic but no HTML page, so nothing happens if you open the repository in a browser as it stands.

## Current state

The repository holds one source file, `frontend/app.js`, plus configuration for CI, SonarCloud, Dependabot, Renovate, and pre-commit hooks. There is no `index.html`, no tests, and no styling. The files `frontend/.cc` and `frontend/.css` are empty placeholders, probably leftovers from a rename or save.

## What the code does

`frontend/app.js` manages list items directly in the DOM through three functions:

- `addtask()` reads the value of an input with id `taskInput`, ignores empty or whitespace-only text, creates an `<li>` with the task text, assigns it a unique id based on the current timestamp, attaches a click handler, appends it to a `<ul>` with id `tasklist`, and clears the input.
- `toggleComplete()` toggles the `completed` class when you click a task.
- `deletetask()` removes a task element by id. Nothing calls this function yet, so deletion is not reachable from the interface.

Tasks live only in the DOM. There is no localStorage and no backend, so every reload wipes the list.

## How to run it

There is no entry point, so you need a small HTML page that loads the script and provides the elements it expects. Save this as `index.html` inside `frontend/`, then open it in a browser:

```html
<!DOCTYPE html>
<html>
<body>
  <input id="taskInput">
  <button onclick="addtask()">Add</button>
  <ul id="tasklist"></ul>
  <script src="app.js"></script>
</body>
</html>
```

With that page in place, adding tasks and marking them complete works without any server or install step.

## Known gaps

- No persistence. Tasks disappear on reload.
- No delete control. `deletetask()` exists but nothing invokes it.
- No styles. The `.css` placeholder is empty and nothing references it.
- Two readme files are tracked, `README.md` and `readme.md`. They collide on case-insensitive filesystems such as Windows and should be merged into one.
- `sonar-project.properties` sets `sonar.python.version=3`, which does nothing useful for a JavaScript-only project.
- No tests exist.

## Repository tooling

- GitHub Actions runs `node --check` over every `.js` file and parses every `.html` file on each push and pull request.
- SonarCloud scans the repository on pushes and pull requests, except from dependabot accounts.
- Pre-commit hooks run gitleaks secret scanning, ESLint, and end-of-file and trailing-whitespace fixes. The other readme file documents setup with `pip install pre-commit` followed by `pre-commit install`.
- Dependabot updates GitHub Actions versions daily, and Renovate automerges minor and patch updates.

## License

MIT. See [LICENSE](LICENSE).
