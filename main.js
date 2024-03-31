const checkExist = setInterval(() => {
  const bodyApp = document.evaluate(
    "/html/body/div[1]/div/div/div[2]",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;

  if (bodyApp != null) {
    bodyApp.id = "maximize-wpp";
    clearInterval(checkExist);
  }
}, 100);

const style = document.createElement("style");
style.setAttribute("type", "text/css");
style.innerHTML = `
  /* Maximize WhatsApp Extension */
  #maximize-wpp {
      max-width: initial !important;
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      position: unset !important;
  }
`;
document.head.appendChild(style);
