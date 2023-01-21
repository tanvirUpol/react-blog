import { BrowserRouter,Switch,Route } from 'react-router-dom';


// page components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/blog'
import Navbar from './components/Navbar';

//styles
import './App.css'
import ThemeSelector from './components/ThemeSelector';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <ThemeSelector></ThemeSelector>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/create">
            <Create></Create>
          </Route>
          <Route  path="/blog/:id">
            <Recipe></Recipe>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
   
  )
}

export default App
