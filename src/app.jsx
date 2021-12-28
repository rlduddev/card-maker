import Login from './components/login/login';
import styles from './app.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({FileInput, authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exast element={<Login authService={authService}/>} />
          <Route path='/maker' exast element={<Maker FileInput={FileInput} authService={authService}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
