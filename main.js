const checkExist = setInterval(() => {
    const bodyApp = document.querySelector("._1XkO3");
    const headerIconsContainer = document.querySelector("._1QVfy._3UaCz");

    if (bodyApp != null) {
        bodyApp.id = 'maximize-wpp';
        headerIconsContainer.classList.add('config-container');

        // toggle button
        const newDiv = document.createElement("div");
        const newButton = document.createElement("a");
        newButton.onclick = () => maximize();
        newButton.style = 'padding: 8px 16px 8px 8px; display: flex; justify-items: center; cursor: pointer;';
        newButton.setAttribute("type", "button");
        newButton.setAttribute("class", "maximize-wpp-main-button");
        const newImage = document.createElement("img");
        newImage.setAttribute("src", "https://github.com/CleoMenezesJr/fullscreen-wpp/blob/main/icons/maximize-button.png?raw=true");
        newImage.setAttribute("height", "24px");
        headerIconsContainer.insertBefore(newDiv, headerIconsContainer.children[0]).appendChild(newButton).appendChild(newImage);


        maximize();
        clearInterval(checkExist);
    };
}, 100);


function maximize() {
    var maximizeWppId = document.querySelector("._1XkO3");
    switch (maximizeWppId.id) {
        case 'maximize-wpp':
            maximizeWppId.id = 'maximize-wpp-on';
            break;
        case 'maximize-wpp-on':
            maximizeWppId.id = 'maximize-wpp-off';
            break;
        case 'maximize-wpp-off':
            maximizeWppId.id = 'maximize-wpp-on';
            break;
        default:
            break;
    };
};


const style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(`
    #maximize-wpp-on, ._1iwk6 {
        width: 100% !important;
        height: 100% !important;
        position: unset !important;
    }
`);
