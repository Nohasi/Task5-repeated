import React from 'react';
import { render, screen } from '@testing-library/react';
import { RepeatsPage } from '../components/RepeatsPage';
import { getRepeatedLetter } from '../services/getRepeatedLetter';
import { ResultPanel } from '../components/ResultPanel';

describe('RepeatsPage', () => {
    it('renders header properly', () => {
        render(<RepeatsPage />);
        const headerElement = screen.getByText('Find Most Repeated Letter');
        expect(headerElement).toBeInTheDocument();
    });

    it('renders text input panel correctly', () => {
        render(<RepeatsPage />);
        const textPanel = screen.getByText('Enter Sentence');
        expect(textPanel).toBeInTheDocument();
    });
})