import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateCustomers from "./pages/Customers/CreateCusomers";
import Login from "./pages/Auth/Login";
import Landing from "./components/common/Landing"
import SideBar from "./components/common/SideBar"
import DisplayCustomers from "./pages/Customers/DisplayCustomers";
import CreateSuppliers from "./pages/Supplier/CreateSupplier"
import DisplaySuppliers from "./pages/Supplier/DisplaySupplier"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/login' element={<Login />} />
    <Route path="/sidebar" element={<ProtectedRoute> <SideBar /> </ProtectedRoute>}/> 
    <Route path='/customer/create' element={ <ProtectedRoute><CreateCustomers /></ProtectedRoute>} />
    <Route path='/customer/display' element={ <ProtectedRoute><DisplayCustomers /></ProtectedRoute>} />
    <Route path='/supplier/create' element={ <ProtectedRoute><CreateSuppliers /></ProtectedRoute>} />
    <Route path='/supplier/display' element={ <ProtectedRoute><DisplaySuppliers /></ProtectedRoute>} />
    </Routes>
   </BrowserRouter>
    </div>
  
  );
}

export default App;
