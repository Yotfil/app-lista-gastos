import Helmet from 'react-helmet'
import { Header, Title } from '../Elements/Header'
import BtnReturn from '../Elements/BtnReturn'

const ExpensesList = () => {
  return (
    <>
      <Helmet>
        <title>Expenses List</title>
      </Helmet>
      <Header>
        <BtnReturn />
        <Title>Expenses List</Title>
      </Header>
    </>
  )
}

export default ExpensesList
