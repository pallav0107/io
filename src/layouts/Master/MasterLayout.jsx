import React from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from './_/PageWrapper';
import { Page } from './_/Page';
import { Container } from './_/Container';
import { Content } from './_/Content';
import { PageFooter } from './_/PageFooter';
import PageHeader from './_/PageHeader';

const MasterLayout = ({ children }) => (
  <PageWrapper>
    <Page>
      <PageHeader />
      <Container column flex="1 0 auto">
        <Content>{children}</Content>
      </Container>
      <PageFooter />
    </Page>
  </PageWrapper>
);

MasterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MasterLayout;
