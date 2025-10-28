import "./App.css";
import "./index.css";
import Blogpage from "./components/Blogs/Blogpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Footer from "./components/Home/Footer";
import Beginner from "./components/Beginner'sGuide/Beginner";
import Data2Knowledge from "./components/datathon/Data2Knowledge";
import AboutUs from "./components/AboutUs/AboutUs";
import Main from "./components/Projects/Main";
import Achievements from "./components/Achievements/Achievements";
import PageNotFound from "./components/PageNotFound";
import Events from "./components/Events/Events";
import D2k_2024 from "./components/Events/d2k_2024";
import Layout from "./components/Team_old/Layout";
import Technical from "./components/Team_old/Technical";
import Logistics from "./components/Team_old/Logistics";
import Publicity from "./components/Team_old/Publicity";
import Creatives from "./components/Team_old/Creatives";
import Marketing from "./components/Team_old/Marketing";
import Blogdetail from "./components/Blogs/Blogdetail";
import Editorial from "./components/Team_old/Editorial";
import Research from "./components/Team_old/Research";
import Home from "./components/matrix/Home"
function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* <div className="mt-[53px]"></div> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs/all" element={<Blogpage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path={`/blogs/:id`} element={<Blogdetail />} />
          <Route path="/ourteam/" element={<Layout />}>
            <Route path="" element={<Technical />} />
            <Route path="Technical" element={<Technical />} />
            <Route path="Creatives" element={<Creatives />} />
            <Route path="Publicity" element={<Publicity />} />
            <Route path="Logistics" element={<Logistics />} />
            <Route path="Marketing" element={<Marketing />} />
            <Route path="Editorial" element={<Editorial></Editorial>} />
            <Route path="Research" element={<Research></Research>}></Route>
          </Route>
          <Route path="/beginner's-guide" element={<Beginner />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/2023" element={<Data2Knowledge />}></Route>
          <Route path="/events/2024" element={<D2k_2024 />}></Route>
          <Route path="/events/2025" element={<Home />}></Route>
          <Route path="/single-project" element={<Main />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
