import RestaurentCard from "../RestaurentCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../mocks/RestaurentCardMock.json";

it("it should have restaurent card", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Domino's Pizza");

  expect(resName).toBeInTheDocument();
});
