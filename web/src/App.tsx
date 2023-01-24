import './styles/global.css'

import { Habit } from './components/Habit'

function App() {
  return (
    <div>
    <Habit completed = {3}/>
    <Habit completed = {2}/>
    <Habit completed = {5}/>
    <Habit completed = {30}/>
    <Habit completed = {40}/>

    </div>
  )
}

export default App

// Componente: Reaproveitar / Isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou corportamental
