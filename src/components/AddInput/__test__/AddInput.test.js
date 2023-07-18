import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn()

describe('AddInput', () => {

    beforeEach(() => {
        render (
            <AddInput 
                todos={[]}
                setTodos={ mockedSetTodo }
            />
        )
    })

    it('should render input element', () => {
        const input = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(input).toBeInTheDocument()
    })

    it('should be able to type into input', () => {
        const input = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.click(input)
        fireEvent.change(input, { target: { value: "Displays the text" } })
        expect(input.value).toBe("Displays the text")
    })

    it('should be able to type into input and setTodo to be called on button click', () => {
        const input = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.click(input)
        fireEvent.change(input, { target: { value: "Displays the text" } })
        const button = screen.getByText(/Add/i)
        fireEvent.click(button)
        expect(mockedSetTodo).toBeCalled()
    })

    it('should have empty input when button is clicked', () => {
        const input = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.click(input)
        fireEvent.change(input, { target: { value: "Displays the text" } })
        const button = screen.getByText(/Add/i)
        fireEvent.click(button)
        expect(input.value).toBe("")
    })
})