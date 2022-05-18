import Helmet from 'react-helmet'
import {
  Header,
  Title,
  ContenedorHeader,
  ContenedorBotones,
} from './Elements/Header'
import Button from './Elements/Button'

function App() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Title>Agregar Gasto</Title>
          <ContenedorBotones>
            <Button to='/category'>Category</Button>
            <Button to='/expenses-list'>Spend List</Button>
            <Button to='/'>X</Button>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  )
}

export default App
