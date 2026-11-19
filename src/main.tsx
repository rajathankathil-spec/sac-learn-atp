import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Analytics } from '@vercel/analytics/react'
import App from './App'

const VERCEL_HOST = 'https://sac-learn-atp.vercel.app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* The site is shown under saclearn.ksucet.in/courses/atp/, so send analytics to this project's own Vercel address, not the main site's. */}
    <Analytics {...(import.meta.env.PROD ? { scriptSrc: `${VERCEL_HOST}/_vercel/insights/script.js`, eventEndpoint: `${VERCEL_HOST}/_vercel/insights/event`, viewEndpoint: `${VERCEL_HOST}/_vercel/insights/view` } : {})} />
  </StrictMode>,
)
