import { render } from '@testing-library/react';

import UiButtons from './ui-buttons';

describe('UiButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiButtons />);
    expect(baseElement).toBeTruthy();
  });
});
