
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./screens/LandingPage";
import MyNotes from "./components/MyNotes";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  const router=createBrowserRouter([{
    path:"/",
    element:<LandingPage/>
    },{
    path:"/mynotes",
    element:<MyNotes/>
    },
  ])
  return (
    <div className="App">
      <Header/>
        <main  style={{minHeight: "93vh",background:"background1.jpg" }} >
          <RouterProvider router={router}/>
        </main>

        <Footer/>
    </div>
  );
}

export default App;
