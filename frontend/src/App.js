import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Загрузка пользователей при запуске
  useEffect(() => {
    loadUsers();
  }, []);

  // Функция загрузки пользователей
  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();
      setUsers(data);
      setError('');
    } catch (err) {
      setError('Ошибка загрузки пользователей');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Функция добавления пользователя
  const addUser = async (e) => {
    e.preventDefault();
    if (!newUserName.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newUserName }),
      });
      
      if (response.ok) {
        setNewUserName('');
        loadUsers(); // Перезагружаем список
      }
    } catch (err) {
      setError('Ошибка добавления пользователя');
      console.error(err);
    }
  };

  // Функция удаления пользователя
  const deleteUser = async (id) => {
    if (!window.confirm('Удалить этого пользователя?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        loadUsers(); // Перезагружаем список
      }
    } catch (err) {
      setError('Ошибка удаления пользователя');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Управление пользователями</h1>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={addUser} className="add-form">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Введите имя пользователя"
          className="input"
        />
        <button type="submit" className="btn btn-add">
          Добавить
        </button>
      </form>

      <div className="users-list">
        <h2>Список пользователей</h2>
        {loading ? (
          <p>Загрузка...</p>
        ) : users.length === 0 ? (
          <p>Пользователей пока нет</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    <button 
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-delete"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;