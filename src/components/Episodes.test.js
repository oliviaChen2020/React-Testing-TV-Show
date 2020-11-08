import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test('episode content runtime is rendered', () => {
  const { queryByTestId } = render(<Episodes episodes={Episodes} />);
  const episodeContents = queryByTestId(/episode-runtime-id/i);
  expect(episodeContents).toHaveTextContent('60 minutes');
});
