import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./Modal";

describe(Modal.name, () => {
  it("renders a button with `Et après?` label", () => {
    render(<Modal />);
    expect(
      screen.getByRole("button", { name: "Et après ?" })
    ).toBeInTheDocument();
  });

  describe("on `What's the next?` button click", () => {
    beforeEach(() => {
      render(
        <Modal>
          <div data-testid="content" />
        </Modal>
      );
      fireEvent.click(screen.getByRole("button", { name: "Et après ?" }));
    });

    it("does not render a button with `What's the next?` label", () => {
      expect(
        screen.queryByRole("button", { name: "Et après ?" })
      ).not.toBeInTheDocument();
    });

    it("renders a specific element", () => {
      expect(screen.getByTestId("content")).toBeInTheDocument();
    });

    it("renders a button with `OK, je vais être patient...` label", () => {
      expect(
        screen.getByRole("button", { name: "OK, je vais être patient..." })
      ).toBeInTheDocument();
    });
  });

  describe("on `OK, je vais être patient...` button click", () => {
    beforeEach(() => {
      render(<Modal />);
      fireEvent.click(screen.getByRole("button", { name: "Et après ?" }));
      fireEvent.click(
        screen.getByRole("button", { name: "OK, je vais être patient..." })
      );
    });

    it("does not render a button with `OK, je vais être patient...` label", () => {
      expect(
        screen.queryByRole("button", { name: "OK, je vais être patient..." })
      ).not.toBeInTheDocument();
    });

    it("renders a button with `What's the next?` label", () => {
      expect(
        screen.queryByRole("button", { name: "Et après ?" })
      ).toBeInTheDocument();
    });
  });
});
