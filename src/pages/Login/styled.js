/* Styled-components
    necessario instalar a extensão para ter sintax high-ligth,
    necessário importar a biblioteca styled-components.
*/

import styled from 'styled-components';

export const Title = styled.h1`
  //checa as props de Title, ou seja, o isRed = true?
  /* color: ${(props) => (props.isRed ? 'red' : 'blue')}; */

  small {
    font-size: 12pt;
    margin-left: 15pt;
    color: #999;
  }
`;

export const Paragrafo = styled.p``;

/* Sintaxe do style components
importe o styled de 'styled-components';

export const (titulo, paragrafo, imagem, etc...) = styled.elementHTML`
  estilo: aqui;

  //ex:
  background: blue;
`

*/
