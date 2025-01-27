import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Home from "../Home/Home";

// test("testing home component", async ()=>{
// const {findByTestId,unmount } = render(
//     <Home/>
// )
// const textOfHeader =await findByTestId('homeText');
// expect(textOfHeader.innerText).toBe('Hello from home')
// unmount()
// })

test("testing home", async () => {
  render(<Home />);

  const textElement = await screen.findByText("Hello from home");
  expect(textElement).not.to.be.null;
});
