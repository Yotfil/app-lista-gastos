import styled from 'styled-components'
import { ReactComponent as Puntos } from '../imagenes/puntos.svg'

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
    fill: rgba(135, 182, 194, 0.15);
  }
`

const PuntosArriba = styled(Puntos)`
  position: fixed;
  z-index: 1;
  top: 2.5rem; /* 40px */
  left: 2.5rem; /* 40px */
`

const PuntosAbajo = styled(Puntos)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem; /* 40px */
  right: 2.5rem; /* 40px */
`

const Background = () => {
  return (
    <>
      <PuntosArriba />
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        preserveAspectRatio='none'>
        <path
          fill='#0099ff'
          fillOpacity='1'
          d='M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,202.7C672,171,768,117,864,133.3C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </Svg>
      <PuntosAbajo />
    </>
  )
}

export default Background
