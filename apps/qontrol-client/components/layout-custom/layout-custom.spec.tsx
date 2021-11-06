import { render } from '@testing-library/react';

import LayoutCustom from './layout-custom';

describe('LayoutCustom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutCustom />);
    expect(baseElement).toBeTruthy();
  });
});
