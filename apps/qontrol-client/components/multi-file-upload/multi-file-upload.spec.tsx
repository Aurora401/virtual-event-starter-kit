import { render } from '@testing-library/react';

import MultiFileUpload from './multi-file-upload';

describe('MultiFileUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultiFileUpload />);
    expect(baseElement).toBeTruthy();
  });
});
