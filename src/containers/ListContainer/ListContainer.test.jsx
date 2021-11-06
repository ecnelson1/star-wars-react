import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import ListContainer from './ListContainer'
import mockData from '../../../fixtures/mock-data.json'

const server = setupServer(rest.get('https://swapi.dev/api/people', (req, res, ctx)=> {
    return res(ctx.json(mockData))
}));

describe('ListContainer', () => {
    beforeAll(()=> server.listen());
    afterAll(()=> server.close());

    it('renders a loading element', async () => {
        render(<ListContainer/>);
        const loading = screen.getByText('LOADING...');
        expect(loading).toMatchSnapshot();
       
    });
    
    it('renders a list of Star Wars characters', async ()=>{
        render(<ListContainer/>);
        const ul = await screen.findByRole('list', {name: 'character-list'});
        expect(ul).toMatchSnapshot();
    });
});
