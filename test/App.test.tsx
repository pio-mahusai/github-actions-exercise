import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("Render Github Actions Exercise", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Github Actions Exercise"
    );
  });
  it("Fails Test", () => {
    expect(true).toBe(false);
  });
});
