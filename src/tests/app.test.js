import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../app/app';
import ButtonBar from "../app/appNavBar";

it('renders without crashing', () => {
  expect(shallow(<App/>)).toHaveLength(1);
  expect(mount(<ButtonBar classes={{}}/>)).toHaveLength(1);
});
