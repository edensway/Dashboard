import Navigation from "./components/Navigation"
import Dashboard from "./pages/dashboard"
import "./styles/App.css"

function App() {
  return (
    <div className="main_container">
      <Navigation />
      <Dashboard />
    </div>
  )
}

export default App
