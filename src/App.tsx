import Form from "./components/Form/Form"
import Todos from "./components/Todos/Todos"
import './App.css'

const App:React.FC = () => {


  return(
    <div>
      <h1>Don't forget to plan your day.Planning is the best way to save time...</h1>
      <Form/>
      <Todos/>
    </div>
  )
}

export default App