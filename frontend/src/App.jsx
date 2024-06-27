import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Authentication from './pages/Authentication';
import Fields from './pages/fields';
import Login from './pages/login';
import Signup from './pages/signup';
import Role from './pages/role';
import Role_desc from './pages/Role_desc';
import Profile from './pages/Profile';
import About from './pages/About';
// import Blogs from './components/Blogs/Blogs';
// import Assesment from './components/Assessment/Assesment';
// import { BlogForm } from './components/Blogs/BlogForm'
// import React from 'react';
// import { RoadmapForm } from './components/Roadmaps/RoadmapForm';
// import { Checkout } from './components/Checkout/Checkout';
// import ShowRoadmap from './components/Roadmaps/RoadmapTemplate';
// import ProDashboard from './pages/weGuidePro';
// import Community from './components/ProVersion/Community';
// import WeGuide from './pages/weGuide';


function App() {
  return (
    // <div className="">
    //   <Home/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Authentication />} /> */}
        <Route path="/fields" element={<Fields/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/roles/:field" element={<Role/>} />
        <Route path="/role_desc/:role" element={<Role_desc/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='about' element={<About/>}/>
        {/* <Route path="/blogs" element={<Blogs />} />
        <Route path="/myassessment" element={<Assesment />} />
        <Route path="/admin/addRoadmap" element={<RoadmapForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myRoadmap" element={<ShowRoadmap />} />
        <Route path="/weGuide" element={<WeGuide />} />
        <Route path="/user/weGuidePro" element={<ProDashboard />} />
        <Route path="/proweguide/addBlog" element={<BlogForm />} />
        <Route path='/proweguide/community' element={<Community />} />
        <Route path='/myreport' element={<ShowRoadmap />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
