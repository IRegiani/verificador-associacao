import reducers from './index';

describe('Reducers', () => {
  test('Middlewares are added in dev', () => {
    expect(reducers()).toBeDefined();
  });
});
