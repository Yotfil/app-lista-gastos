import Helmet from 'react-helmet'
import { Header, Titulo, ContenedorHeader } from '../Elements/Header'

const ExpensesByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Expenses by Category</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Expenses by Category</Titulo>
        </ContenedorHeader>
      </Header>
    </>
  )
}

export default ExpensesByCategory
