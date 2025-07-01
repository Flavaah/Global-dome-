import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center">Logga in</h1>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-post</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Lösenord</label>
          <input type="password" id="password" name="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition">Logga in</button>
        <p className="text-center text-sm text-gray-500">Har du inget konto? <a href="/signup" className="text-blue-600 hover:underline">Registrera dig</a></p>
      </form>
    </div>
  );
}
