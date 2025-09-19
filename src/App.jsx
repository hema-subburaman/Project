import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './Loginpage';
import CreateAccount from './CreateAccount';
import UserSelection from './UserSelection';
import Farmer from './Farmer';
import Student from './Student';
import General from './General';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/farmer" element ={<Farmer />} />
        <Route path="/student" element ={<Student />} />
        <Route path ="/general" element ={<General />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;