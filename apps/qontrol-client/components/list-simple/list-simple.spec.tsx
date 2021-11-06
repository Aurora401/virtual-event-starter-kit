import { render } from '@testing-library/react';

import ListSimple from './list-simple';

describe('ListSimple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListSimple />);
    expect(baseElement).toBeTruthy();
  });
});
