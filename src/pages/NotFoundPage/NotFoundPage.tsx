import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404 — Страница не найдена</h1>
      <Link to="/">← Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;