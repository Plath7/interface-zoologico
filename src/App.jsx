import './App.css'
import Atracao from './components/Atracao/Atracao'
import Navegacao from './components/Navegacao/Navegacao'


function App() {

  const componentes = [];
  for(let i = 0; i <= 2; i++){
    componentes.push(<Atracao key={i}/>)
  }

  return (
    <>
      <Navegacao></Navegacao>
      <div className='cnt-atracoes'>
        {componentes}
      </div>
      
    </>
  )
}

export default App