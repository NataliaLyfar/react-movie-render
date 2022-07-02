import styled from 'styled-components';
import BackPic from 'asset/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100vw;
  height: 100vh;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  background-image: url(${BackPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.l}
  `;
