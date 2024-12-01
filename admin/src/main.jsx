import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import AppContexProvider from './context/AppContex.jsx'
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContexProvider>
          <App />
        </AppContexProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
  </BrowserRouter>


)
