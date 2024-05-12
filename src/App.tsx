import { Button } from "@/components/ui/button"
import './App.css'
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom"
import{Carousel} from "@/components/ui/carousel"

function App() {
  
  

  
    return (
      <>
      <div>
        <Button>Click me</Button>
      </div>

      <div>
        <BrowserRouter>
          <Route path="/" component={Carousel} />
        </BrowserRouter>
      </div>
      </>
    )
  
  
}

export default App
