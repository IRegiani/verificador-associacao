/* eslint-disable no-console */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime'; // TODO: remove this in the future

configure({ adapter: new Adapter() });

console.log = () => null;
console.error = () => null;

// TODO: add mocked global date
