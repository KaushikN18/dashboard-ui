import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import Mail from "./pages/Mail";
import Chat from "./pages/Chat";
import FileManager from "./pages/FileManager";
import Notes from "./pages/Notes";
import Contacts from "./pages/Contacts";
import Task from "./pages/Task";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />

          <Route path="calendar" element={<Calendar />} />
          <Route path="mail" element={<Mail />} />
          <Route path="chat" element={<Chat />} />
          <Route path="file-manager" element={<FileManager />} />
          <Route path="notes" element={<Notes />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="task" element={<Task />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="profile" element={<Profile />} />
          <Route index element={<Dashboard />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;