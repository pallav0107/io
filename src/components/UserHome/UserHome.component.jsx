import React from 'react';
import { Flex } from 'grid-styled';
import { UserHomeAccordionContainer } from '../../containers/UserHomeAccordionContainer';
import { UserHomeModalContainer } from '../../containers/UserHomeModalContainer';
import { Searchcontainer } from '../../style/style';

export const UserHomeComponent = () => (
  <Searchcontainer>

    <UserHomeModalContainer formName="UserHome" />

    <Flex
      direction={['column', 'column', 'row']}
      ml={[0, 0, '6px']}
      mt={['6px', '6px', 0]}
    >
      <UserHomeAccordionContainer
        className="displayNone"
      />
    </Flex>

  </Searchcontainer>
);



export default UserHomeComponent;
