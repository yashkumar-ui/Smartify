import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SliderProvider } from './context/SliderContext.tsx'

createRoot(document.getElementById('root')!).render(

  <SliderProvider>
        <StrictMode>
           <App />
       </StrictMode>,
  </SliderProvider>
)
