import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

//eslint-disable-next-line
export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      {/* props do component Title, isRed={props} */}
      <Title /* isRed={false} */>
        Login<small>Oie</small>
      </Title>
      <Paragrafo>
        Fugiat do magna ullamco exercitation minim fugiat ut amet laboris nisi
        anim.
      </Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
