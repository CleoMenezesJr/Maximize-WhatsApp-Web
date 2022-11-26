const checkExist = setInterval(() => {
  const bodyApp = document.querySelector("._1jJ70");
  const firstMenuItem = document.querySelector(
    "[data-testid=menu-bar-community-tab]"
  );

  if (bodyApp != null) {
    bodyApp.id = "maximize-wpp-on";

    // Toggle button
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "_2cNrC _1l5K0 _26lC3");
    newDiv.setAttribute("title", "Toggle View");
    const newButton = document.createElement("a");
    newButton.onclick = () => maximize();
    newButton.setAttribute("type", "button");
    newButton.setAttribute("class", "maximize-wpp-main-button");
    const newImage = document.createElement("object");

    firstMenuItem.parentNode
      .insertBefore(newDiv, firstMenuItem)
      .appendChild(newButton)
      .appendChild(newImage);

    clearInterval(checkExist);
  }
}, 100);

function maximize() {
  let maximizeWppId = document.querySelector("._1jJ70");

  if (maximizeWppId.id === "maximize-wpp-on") {
    maximizeWppId.id = "maximize-wpp-off";
  } else {
    maximizeWppId.id = "maximize-wpp-on";
  }
}


// Set StyleSheet
const style = document.createElement("style");
style.setAttribute("type", "text/css");
style.innerHTML = `
  /* Maximize WhatsApp Extension */
  #maximize-wpp-on, ._1iwk6 {
      max-width: initial !important;
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      position: unset !important;
  }

  .maximize-wpp-main-button {
    display: flex;
    justify-items: center;
    cursor: pointer
  }

  .maximize-wpp-main-button > object {
    height: 24px;
    width: 24px;
    transition: .2s;
  }

  #maximize-wpp-on .maximize-wpp-main-button > object {
    background: url(${browser.runtime.getURL(
      "icons/minimize-button-light.svg"
    )}) no-repeat;
  }

  #maximize-wpp-off .maximize-wpp-main-button > object {
    background: url(${browser.runtime.getURL(
      "icons/maximize-button-light.svg"
    )}) no-repeat;
  }

  @media (prefers-color-scheme: dark) {
    #maximize-wpp-on .maximize-wpp-main-button > object {
      background: url(${browser.runtime.getURL(
        "icons/minimize-button-dark.svg"
      )}) no-repeat;
    }
    #maximize-wpp-off .maximize-wpp-main-button > object {
      background: url(${browser.runtime.getURL(
        "icons/maximize-button-dark.svg"
      )}) no-repeat;
    }
  }
`;
document.head.appendChild(style);
