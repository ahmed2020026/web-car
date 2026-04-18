import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Store from './redux/Store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const page = document.getElementById('root')
if (!page) throw Error('element not found')
createRoot(page).render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
)
