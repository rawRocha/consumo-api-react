import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
    margin-bottom: 15px;

    &:focus {
      border-radius: 4px;
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 25px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 35px;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
