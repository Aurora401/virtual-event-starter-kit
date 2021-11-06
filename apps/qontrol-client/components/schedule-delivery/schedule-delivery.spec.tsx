import { render } from '@testing-library/react';

import ScheduleDelivery from './schedule-delivery';

describe('ScheduleDelivery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScheduleDelivery />);
    expect(baseElement).toBeTruthy();
  });
});
