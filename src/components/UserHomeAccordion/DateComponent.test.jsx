import React from 'react';
import { shallow } from 'enzyme';
import DateComponent from './DateComponats';
import "../../setupTests"

describe('DateComponent', () => {
    it('should render', () => {
        const component = (
            <DateComponent />
        );
        const wrapper = shallow(component);
        expect(wrapper).toMatchSnapshot();
    });
    it('should contain date container', () => {
        const component = (
            <DateComponent />
        );
        const wrapper = shallow(component).dive();
        expect(wrapper.find({ 'data-test': 'date-container' }).length).toBe(1);
    });
    it('date container should contain field named day', () => {
        const component = (<DateComponent />);
        const wrapper = shallow(component).dive();
        expect(wrapper.find({ 'data-test': 'date-container' }).dive().find({ 'name': 'day' }).length).toBe(1);
    })
    it('date container should contain field named month', () => {
        const component = (<DateComponent />);
        const wrapper = shallow(component).dive();
        //expect(wrapper.find({ 'data-test': 'date-container' }).dive().find({ 'name': 'month' }).length).toBe(1);
        console.log(wrapper.find({ 'data-test': 'date-container' }).dive().find({ 'name': 'month' }).length);
    })
    it('date container should contain field named year', () => {
        const component = (<DateComponent />);
        const wrapper = shallow(component).dive();
        expect(wrapper.find({ 'data-test': 'date-container' }).dive().find({ 'name': 'year' }).length).toBe(1);
    })

});
