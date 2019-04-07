import React from 'react';
import MasterLayout from './MasterLayout';
import { shallow } from 'enzyme';
import { PageWrapper } from './_/PageWrapper';
import { Page } from './_/Page';
import PageHeader from './_/PageHeader';
import { Container } from './_/Container';
import { Content } from './_/Content';
import { PageFooter } from './_/PageFooter';
import { withTheme } from '../../../utils/jest/TestUtils';
import { Text } from '@wdpui/gel-typography';
import "../../setupTests"

describe('Master Layout', () => {
  it('should render the master layout structure', () => {
    const component = withTheme(<MasterLayout>Test Child</MasterLayout>);
    const wrapper = shallow(component).dive();

    expect(wrapper.find(PageWrapper).exists()).toBe(true);
    expect(wrapper.find(Page).exists()).toBe(true);
    expect(wrapper.find(Container).exists()).toBe(true);
    expect(wrapper.find(Content).exists()).toBe(true);
    expect(wrapper.find(PageFooter).exists()).toBe(true);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass the children into the content area', () => {
    const childElement = <Text>I am the test child.</Text>;
    const component = withTheme(<MasterLayout>{childElement}</MasterLayout>);
    const wrapper = shallow(component).dive();

    expect(wrapper.find(Content).contains(childElement)).toBe(true);
  });
});
