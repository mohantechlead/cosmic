import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Landing from './components/Landing';
import Login from './pages/Login';
import SideBar from './components/SideBar';
import CustomerForm from "./pages/CreateCustomer";
import CreateUser from "./pages/CreateUser";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/login' element={<Login />} />
    <Route
          path="/sidebar"
          element={
            <ProtectedRoute>
              <SideBar />
            </ProtectedRoute>
          }
        /> 
    <Route path='/customer/create' element={<CustomerForm />} />
    <Route path='/user/create' element={<CreateUser />} />
    </Routes>
   </BrowserRouter>
    </div>
  
  );
}

export default App;
