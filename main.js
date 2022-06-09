import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

// {/* <button id="dragBtn">拖我</button> */}
function letElementDragble(selector) {
  const dEl = document.querySelector(selector);

  let differX = 0;
  let differY = 0;

  function mouseMoveHandler(e) {
    dEl.style.cssText = `
        position: fixed;
        left: ${e.clientX - differX}px;
        top: ${e.clientY - differY}px;
      `;
  }

  dEl.addEventListener("mousedown", (e) => {
    const { left, top } = dEl.getBoundingClientRect();

    dEl.style.cssText = `
        cursor: move;
        position: fixed;
        left: ${left}px;
        top: ${top}px;
      `;

    differX = e.clientX - left;
    differY = e.clientY - top;

    window.removeEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousemove", mouseMoveHandler);
  });

  window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", mouseMoveHandler);
  });

  window.addEventListener("mouseleave", () => {
    window.removeEventListener("mousemove", mouseMoveHandler);
  });

  window.addEventListener("focus", () => {
    window.removeEventListener("mousemove", mouseMoveHandler);
  });
}

// {/* // <button id="dragBtn">按</button> */}
// {/* letElementDragble('#dragBtn') */}
