/* eslint-disable import/export */

import { render } from "@testing-library/react";

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed

    wrapper: ({ children }) => children,

    ...options,
  });

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

// override render export

export { customRender as render };

const complexTextSearch = (text) => (content, node) => {
  const hasText = (node) => node.textContent.includes(text);

  const nodeHasText = hasText(node);
  const childrenDontHaveText = Array.from(node.children).every(
    (child) => !hasText(child)
  );

  return nodeHasText && childrenDontHaveText;
}

export {
  complexTextSearch
}
