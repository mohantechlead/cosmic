import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Landing from './components/Landing';
import Login from './pages/Login';
import SideBar from './components/SideBar';
import CustomerForm from "./pages/CreateCustomer";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/login' element={<Login />} />
    <Route path='/sidebar' element={<SideBar />} />
    <Route path='/customer/create' element={<CustomerForm />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
