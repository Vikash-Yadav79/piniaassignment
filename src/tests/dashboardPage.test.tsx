

import { render } from '@testing-library/react';
import DashboardPage from '../pages/DashboardPage';

describe('DashboardPage', () => {
  it('renders dashboard page with correct elements', () => {
    render(<DashboardPage />);
      });

  it('redirects to sign-in page if user is not authenticated', () => {
     });
});
