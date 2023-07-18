import { render, screen } from "@testing-library/react";
import Header from '../Header';

describe('Header', () => {

    beforeEach(() => {
        render(<Header title="new title" />)
    })

    it('should render same text passed into title prop using getByText', () => {
        const h1 = screen.getByText(/new title/i)
        expect(h1).toBeInTheDocument()
    })

    it('should render same text passed into title prop using getByRole', () => {
        const h1 = screen.getByRole("heading")
        const h1Element = screen.getByRole("heading", { name: /new title/i })
        expect(h1).toBeInTheDocument()
        expect(h1Element).toBeInTheDocument()
    })

    it('should render same text passed into title prop using getByTitle', () => {
        const h1 = screen.getByTitle("Header")
        expect(h1).toBeInTheDocument()
    })

    it('should render same text passed into title prop using getByTestId', () => {
        const h1 = screen.getByTestId("testing")
        expect(h1).toBeInTheDocument()
    })

    it('should render same text passed into title prop using findByText', async () => {
        const h1 = await screen.findByText("new title")
        expect(h1).toBeInTheDocument()
    })

    it('should render same text passed into title prop using queryByText', () => {
        const h1 = screen.queryByText("Header")
        expect(h1).not.toBeInTheDocument()
    })

    it('should render same text passed into title prop using getAllByText', () => {
        const h1 = screen.getAllByText("new title")
        expect(h1.length).toBe(1)
    })
})