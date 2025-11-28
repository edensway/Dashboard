import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import QuoteBox from "./pages/QuoteBox";
import "./styles/App.css"

function App() {
  return (
    <div className="main_container">
      <Navigation />
      <QuoteBox />
      <Dashboard />
    </div>
  )
}

export default App
