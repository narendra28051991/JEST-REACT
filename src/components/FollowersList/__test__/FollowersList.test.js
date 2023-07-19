import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe('FollowersList', () => {

    beforeEach(() => {
        render (
            <MockFollowersList />
        )
    })

    it('should fetch and render input element', async () => {
        const div = await screen.findByTestId("follower-item-0")
        expect(div).toBeInTheDocument()
    })

    it('should render all the followers', async () => {
        const divs = await screen.findAllByTestId(/follower-item/i)
        expect(divs.length).toBe(5)
    })
})