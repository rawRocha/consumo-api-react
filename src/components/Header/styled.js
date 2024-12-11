import styled from 'styled-components';
import { lightColor, primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${lightColor};
  }

  > * {
    padding: 5px;
  }
`;
