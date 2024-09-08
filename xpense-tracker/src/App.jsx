import Housing from "./components/categories/Housing"
import Header from "./components/Header"
import Totals from "./components/Totals"


function App() {
  

  return (
    <div className="h-full bg-gradient-to-br from-blue-500 to-orange-500">
      <Header />
      <Totals />
      <Housing />
    </div>
  )
}

export default App
