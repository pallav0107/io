import styled from 'styled-components';
import { Flex } from 'grid-styled';

export const PageWrapper = styled(Flex)`
  max-width: ${props => (props.maxwidth ? props.maxwidth : '1922px')};
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;
