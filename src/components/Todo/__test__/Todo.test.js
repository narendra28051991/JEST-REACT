import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Todo from "../Todo"

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

describe('Todo', () => {

    const addTask = (tasks) => {
        const input = screen.getByPlaceholderText(/Add a new task here.../i)
        const button = screen.getByRole("button", { name: /Add/i })
        tasks.forEach((task) => {
            fireEvent.change(input, { target: { value: task } })
            fireEvent.click(button)
        })
    }

    beforeEach(() => {
        render (
            <MockTodo />
        )
    })

    it('should be able to type into input', () => {
        addTask(["Go Groceries Shopping"])
        const div = screen.getByText(/Go Groceries Shopping/i)
        expect(div).toBeInTheDocument()
    })

    it('should render multiple items', () => {
        addTask(["Go Groceries Shopping", "Go Groceries Shopping", "Go Groceries Shopping"])
        const divs = screen.getAllByText(/Go Groceries Shopping/i)
        expect(divs.length).toBe(3)
    })

    it('task should not have complete class when initally rendered', () => {
        addTask(["Go Groceries Shopping"])
        const div = screen.getByText(/Go Groceries Shopping/i)
        expect(div).not.toHaveClass("todo-item-active")
    })

    it('task should have complete class when clicked', () => {
        addTask(["Go Groceries Shopping"])
        const div = screen.getByText(/Go Groceries Shopping/i)
        fireEvent.click(div)
        expect(div).toHaveClass("todo-item-active")
    })
})