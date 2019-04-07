import React from 'react';
import Box from 'grid-styled/dist/Box';
import { SearchContainer } from '../../style/style';
import { UserHomeComponent } from './UserHome.component';

export const UserHome = ({}) => (
  <Box>
    <SearchContainer>
      <UserHomeComponent />
    </SearchContainer>
  </Box>
);



export default UserHome;
