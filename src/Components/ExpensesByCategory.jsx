import Helmet from 'react-helmet'
import { Header, Title } from '../Elements/Header'
import BtnReturn from '../Elements/BtnReturn'

const ExpensesByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Expenses by Category</title>
      </Helmet>
      <Header>
          <BtnReturn/>
          <Title>Expenses by Category</Title>
      </Header>
    </>
  )
}

export default ExpensesByCategory
