import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes';
import { Route } from 'react-router';
import {
  Error,
  CustomerProfile,
  CustomerSearch,
  DashBoard,
  CreateCustomer,
  ProfileDetails,
} from '../layouts';
import "../setupTests"

describe('Routes', () => {
  it('should render routes', () => {
    const component = <Routes />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct routes', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    expect(pathMap['/home']).toBe(DashBoard);
    expect(pathMap['/create']).toBe(CreateCustomer);
    expect(pathMap['/search']).toBe(CustomerSearch);
    expect(pathMap['/profiledata']).toBe(ProfileDetails);
    expect(pathMap['/']).toBe(DashBoard);
  });
});
