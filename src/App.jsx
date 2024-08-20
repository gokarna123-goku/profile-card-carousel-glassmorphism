import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Carousel from "./pages/carousel/Carousel"
function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-neutral-500">
          {/* Navbar */}

          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<Carousel />} />
          </Routes>

          {/* Footer */}

        </div>
      </Router>
    </>
  )
}

export default App
