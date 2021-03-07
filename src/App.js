import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();
// export const catCon = createContext();

function App() {
  const [cat, setCat] = useState(0);
  return (
    <CategoryContext.Provider value={[cat, setCat]} >
      <h1>Father: App value: {cat}</h1>
      <Header></Header>
      <Shop></Shop>
    </CategoryContext.Provider>
  );
}

export default App;
