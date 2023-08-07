import './App.css';
import Contacts from './contacts/contacts';
import Contact from './contact/contact';
import {Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/contact/:id" element={<Contact />} />
    </Routes>
  );
}

export default App;
