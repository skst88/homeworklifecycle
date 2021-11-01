import Counter from './components/Counter';
import Ingredients from './components/Ingredients';
import Receipts from './components/Receipts';
import { useState } from 'react'
import Email from './components/Email';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact';
import ContactContextProvider from './Context/ContactContext'
import ContactList from './components/ContactList';


function App() {
  const [meal, setMeal] = useState("")
  return (
    <>
      <ContactContextProvider>
        <Counter />
        <Receipts meal={meal} setMeal={setMeal} />
        <Ingredients meal={meal} setMeal={setMeal} />
        <Email />
        <AddContact />
        <ContactList />
      </ContactContextProvider>
    </>

  );
}

export default App;
