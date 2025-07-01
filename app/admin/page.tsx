"use client";
import React, { useState } from 'react';

export default function AdminPage() {
  const [users, setUsers] = useState([
    { email: 'admin@globaldome.com', role: 'admin' },
    { email: 'user1@globaldome.com', role: 'user' }
  ]);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call API to reset password
    setMessage(`Lösenordet för ${resetEmail} har återställts!`);
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Adminpanel</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Användare</h2>
        <table className="w-full border rounded mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">E-post</th>
              <th className="p-2 text-left">Roll</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t">
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Återställ lösenord</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            className="border rounded px-3 py-2 w-full"
            placeholder="Användarens e-post (@globaldome.com)"
            value={resetEmail}
            onChange={e => setResetEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border rounded px-3 py-2 w-full"
            placeholder="Nytt lösenord"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Återställ lösenord</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </section>
    </main>
  );
}
