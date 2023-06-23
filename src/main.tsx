import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import LikeButton from './components/LikeButton/LikeButton.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <LikeButton />
  </React.StrictMode>,
)
