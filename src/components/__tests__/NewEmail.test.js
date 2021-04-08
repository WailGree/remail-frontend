import {render, screen} from "@testing-library/react";
import NewEmail from "../NewEmail";

test('should render NewEmail component', () => {
    render(<NewEmail/>);
    const containerElement = screen.getByTestId("email-container");
    expect(containerElement).toBeInTheDocument();
})