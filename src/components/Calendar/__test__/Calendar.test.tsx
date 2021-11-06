import { fireEvent, render } from 'config/custom-render';

import Calendar from '..';
import React from 'react';

describe(`<Calendar />`, () => {
  test('Test selected', async () => {
    const { container } = render(<Calendar />);

    fireEvent.click(container.querySelector(`[data-date="7-15-2021"]`));

    const selected = container.querySelector(`[data-date="7-15-2021"]`);
    expect(selected).toHaveClass('selected');
  });
});
