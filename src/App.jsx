import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Getstarted from './Getstarted/Getstarted';
import Loginpage from './Loginpage/Loginpage';
import CreateAccount from './Createaccount/CreateAccount';
import UserSelection from './Userselection/UserSelection';
import Farmer from './Farmar/Farmer';
import Student from './Student/Student';
import General from './General/General';
import Iconspage from './Iconspage/Iconspage';
import FarmerInformation from './Farmar/FarmerInformation';
import StudentInformation from './Student/StudentInformation';
import GeneralInformation from './General/GeneralInformation';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Getstarted />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/farmer" element ={<Farmer />} />
        <Route path="/student" element ={<Student />} />
        <Route path ="/general" element ={<General />} />
        <Route path ="/iconspage" element ={<Iconspage />} />
        <Route path = "/farmerinformation" element = {<FarmerInformation />} />
        <Route path = "/studentinformation" element = {<StudentInformation />} />
        <Route path = "/generalinformation" element = {<GeneralInformation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;