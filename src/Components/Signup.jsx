import Helmet from 'react-helmet'
import {
  Header,
  Title,
  ContenedorHeader,
} from '../Elements/Header'
import Button from '../Elements/Button'
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../Elements/FormElements'
import {ReactComponent as SvgLogin} from '../imagenes/registro.svg'
import styled from 'styled-components'

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem;
  margin-bottom: 1.25rem;
`

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Create Account</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Title>Create Account</Title>
          <div>
            <Button to='/signin'>Signin</Button>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario>
        <Svg/>
        <Input
          type='email'
          name='email'
          placeholder='Email'/>
        <Input
          type='password'
          name='password'
          placeholder='Password'/>
        <Input
          type='password'
          name='password2'
          placeholder='Confirm Password'/>
          <ContenedorBoton>
            <Button as='button' primario type='submit'>Register</Button>
          </ContenedorBoton>
      </Formulario>
    </>
  )
}

export default Signup
