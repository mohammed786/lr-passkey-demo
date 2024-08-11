import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LRAuthProvider } from 'loginradius-react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LRAuthProvider
      appName={import.meta.env.VITE_LR_APP_NAME}
      apiKey={import.meta.env.VITE_LR_API_KEY}
      redirectUri={window.location.origin}
    >
      <App />
    </LRAuthProvider>
  </StrictMode>,
)
