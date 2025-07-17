import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-gray-700">404 - Page Not Found</h1>
      <p className="text-gray-500">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;


// ✅ vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
