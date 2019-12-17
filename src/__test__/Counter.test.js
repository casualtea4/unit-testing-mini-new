 import React from 'react';
 import {render, fireEvent} from '@testing-library/react';
 import Counter from '../components/Counter';
import { isTSAnyKeyword } from '@babel/types';

 it('checks starting text of the p tag', () => {
     const {container} = render(<Counter/>);
     expect(container.textContent).toContain(`You've clicked 0 times!`)
 })
 it('button works', () => {
     const {getByTestId,container} = render(<Counter/>);
     const button = getByTestId('counter-button');
     expect(container.textContent).toContain(`You've clicked 0 times!`);
     fireEvent.click(button);
     expect(container.textContent).toContain(`You've clicked 1 times!`)
 })