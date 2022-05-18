import Helmet from 'react-helmet'
import {
  Header,
  Title,
  ContenedorHeader,
} from '../Elements/Header'
import Button from '../Elements/Button'
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from '../Elements/FormElements'
import {ReactComponent as SvgLogin} from '../imagenes/login.svg'
import styled from 'styled-components'

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Create Account</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Title>Create Account</Title>
          <div>
            <Button to='/signup'>Signup</Button>
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
          <ContenedorBoton>
            <Button as='button' primario type='submit'>Login</Button>
          </ContenedorBoton>
      </Formulario>
    </>
   );
}

export default Signin;