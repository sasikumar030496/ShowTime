import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppRoutes from './Pages/AppRoutes/AppRoutes';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {

  const [theme, setTheme] =useState("light")

  return (
  <div>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <AppRoutes/>
    </ThemeContext.Provider>
  </div>  
  );
}

export default App;
