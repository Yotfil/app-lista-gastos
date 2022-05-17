import Helmet from 'react-helmet'
import {
  Header,
  Titulo,
  ContenedorHeader,
  ContenedorBotones,
} from './Elements/Header'
import Boton from './Elements/Button'

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to='/category'>Category</Boton>
            <Boton to='/expenses-list'>Spend List</Boton>
            <Boton to='/'>X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  )
}

export default App
