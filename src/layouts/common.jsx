import styled from 'styled-components';
import { Flex } from 'grid-styled';

export const Container = styled(Flex)`
  width: 100%;
`;

export const Backdrop = Container.extend`
  background-color: ${({ theme }) => theme.color.background};
  height: 100%;
`;
export const ProfileBackdrop = Container.extend`
  background-color: #6f4160;
  height: 100%;
`;
