import React from 'react';
import App from '../../app';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const wrapper = shallow(<App />);

test('getCountryOfOrigin method', () => {
  expect(wrapper.instance().getCountryOfOrigin('hi')).toBe('Unknown');
  expect(wrapper.instance().getCountryOfOrigin('')).toBe('Unknown');
  expect(wrapper.instance().getCountryOfOrigin(123)).toBe('Unknown');
  expect(wrapper.instance().getCountryOfOrigin('Danaos (Greece)')).toBe('Greece');
  expect(wrapper.instance().getCountryOfOrigin('Hapag Lloyd (Germany)')).toBe('Germany');
});