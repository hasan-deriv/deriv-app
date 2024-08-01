import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { routes } from '@deriv/shared';
import ErrorComponent from '../error-component';

const mockErrorData = {
    header: 'Error Occurred',
    message: 'An unexpected error has occurred.',
    redirect_label: 'Go to Home',
    should_show_refresh: true,
};

describe('ErrorComponent', () => {
    it('should render as a dialog when is_dialog is true', () => {
        render(<ErrorComponent is_dialog={true} />);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should render as a standard message when is_dialog is false', () => {
        render(<ErrorComponent is_dialog={false} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should render correctly with provided mock data', () => {
        render(
            <MemoryRouter>
                <ErrorComponent {...mockErrorData} />
            </MemoryRouter>
        );
        expect(screen.getByText(mockErrorData.header)).toBeInTheDocument();
        expect(screen.getByText(mockErrorData.message)).toBeInTheDocument();
        expect(screen.getByText(/refresh/i)).toBeInTheDocument();
        const linkEl = screen.getByRole('link', { name: mockErrorData.redirect_label });
        expect(linkEl).toBeInTheDocument();
        expect(linkEl).toHaveAttribute('href', routes.trade);
    });
});
