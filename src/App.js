import Content from "./components/content";
import Footer from "./components/footer";
import NavBar from "./components/nav_bar";
import SideBar from "./components/side_bar";

function App() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <SideBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
