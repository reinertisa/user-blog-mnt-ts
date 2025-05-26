import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
      <div className="App">
          <Navbar />
          <div className="content">
              <Home />
          </div>
      </div>

  )
}

export default App
