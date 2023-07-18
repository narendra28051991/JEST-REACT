import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe('Todo Footer', () => {

    it('should render the correct amount of incomplete tasks', () => {
        render(
            <MockTodoFooter numberOfIncompleteTasks={5} />
        )
        const p = screen.getByText(/5 tasks left/i)
        expect(p).toBeInTheDocument()
    })

    beforeEach(() => {
        render(
            <MockTodoFooter numberOfIncompleteTasks={1} />
        )
    })

    it('should render "task" when the number of incomplete tasks is one', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p).toBeInTheDocument();
    });

    it('p element should be truthy when the number of incomplete tasks is one', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p).toBeTruthy();
    });

    it('"task" should be visible when the number of incomplete tasks is one', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p).toBeVisible();
    });

    it('should contain p tag with correct text', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p).toContainHTML('p');
    });

    it('should render correct text content', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p).toHaveTextContent("1 task left");
    });

    it('should render correct text content', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p).toBeTruthy();
        expect(p).not.toBeFalsy();
    });

    it('should render correct text content', () => {
        const p = screen.getByText(/1 task left/i);
        expect(p.textContent).toBe("1 task left");
        expect(p.textContent).not.toBe("1 tasks left");
    });
})