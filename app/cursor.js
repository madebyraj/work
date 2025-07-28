function applyTextCursor() {
  document.body.addEventListener("mouseover", function (event) {
    const target = event.target;

    // Check if the element has direct text content (ignores empty or whitespace-only elements)
    if (target.nodeType === Node.ELEMENT_NODE && hasDirectText(target)) {
      document.body.style.cursor = `var(--cursor-text), text`;
    } else {
      document.body.style.cursor = `var(--cursor-default), auto`;
    }
  });
}

// Helper function to check if an element contains direct text nodes
function hasDirectText(element) {
  // Loop through all child nodes of the element
  for (let node of element.childNodes) {
    // Check if the node is a text node and not just whitespace
    if (
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.trim().length > 0
    ) {
      return true;
    }
  }
  return false;
}

// Call the function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", applyTextCursor);
