import React, { useEffect, useState, useRef } from "react";

const STORAGE_KEY = "skeuo_todos_v1";
const THEME_KEY = "skeuo_theme_v1";

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export default function App() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [text, setText] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "day");
  const inputRef = useRef(null);

  // Keep body data-theme for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // persist todos
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Add a new task (trimmed); maintain ascending order (case-insensitive)
  const addTodo = () => {
    const v = text.trim();
    if (!v) return; // nothing to add
    const newTodos = [...todos, { id: Date.now(), text: v }];
    // sort by text ascending (case-insensitive)
    newTodos.sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()));
    setTodos(newTodos);
    setText("");
    inputRef.current?.focus();
  };

  // Delete by id
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Delete all
  const deleteAll = () => {
    if (todos.length === 0) return;
    if (!confirm("Delete all tasks?")) return;
    setTodos([]);
  };

  // allow Enter key to add
  const onKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  // Toggle theme
  const toggleTheme = () => setTheme(prev => (prev === "day" ? "night" : "day"));

  return (
    <div className="app-shell">
      <header className="app-header glass">
        <div className="brand">
          <div className="logo">Sahil</div>
          <div>
            <h1>Todo — Assignment-9 Skeuomorphic</h1>
            <p className="subtitle">Black · Green · Silver theme with day/night toggle</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="toggle-btn"
            aria-pressed={theme === "night"}
            onClick={toggleTheme}
            title="Toggle day / night"
          >
            {theme === "day" ? "Night" : "Day"}
          </button>
        </div>
      </header>

      <main className="app-main">
        <section className="input-panel glass">
          <div className="input-row">
            <input
              ref={inputRef}
              className="task-input"
              placeholder="Add a new task..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="New task"
            />
            <div className="buttons">
              <button className="btn primary" onClick={addTodo} aria-label="Add task">Add</button>
              <button className="btn danger" onClick={deleteAll} aria-label="Delete all tasks">Delete All</button>
            </div>
          </div>
          <div className="hint">Tasks are automatically sorted ascending (A → Z)</div>
        </section>

        <section className="list-panel glass">
          <h2 className="list-head">To-Do List ({todos.length})</h2>

          <ul className="todo-list" aria-live="polite">
            {todos.length === 0 ? (
              <li className="empty">No tasks — add one above</li>
            ) : (
              todos.map(todo => (
                <li key={todo.id} className="todo-item">
                  <span className="todo-text">{todo.text}</span>
                  <button className="btn icon delete" onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>

      <footer className="app-footer glass">
        <div>Made By Sahil Potale — Skeuomorphic Assignment 6</div>
        <div className="muted">LocalStorage persisted • Sorted A→Z</div>
      </footer>
    </div>
  );
}
