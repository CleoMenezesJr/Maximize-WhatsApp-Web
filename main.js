const checkExist = setInterval(() => {
    const bodyApp = document.querySelector("._1XkO3");
    const headerIconsContainer = document.querySelector("._1QVfy._3UaCz");
    
    if (bodyApp != null) {
        bodyApp.classList.add('maximize-wpp');
        headerIconsContainer.classList.add('config-container');
        
        
        const newDiv = document.createElement("div")
        const newButton = document.createElement("a")
        newButton.onclick = () => maximize(); 
        newButton.style = 'padding: 8px 16px 8px 8px; display: flex; justify-items: center; cursor: pointer;'
        newButton.setAttribute("type", "button")
        newButton.setAttribute("class", "maximize-wpp-main-button")
        const newImage = document.createElement("img")
        newImage.setAttribute("src", "https://github.com/CleoMenezesJr/fullscreen-wpp/blob/main/icons/maximize-whatsapp-48.png?raw=true")
        newImage.setAttribute("height", "24px")
        headerIconsContainer.insertBefore(newDiv, headerIconsContainer.children[0]).appendChild(newButton).appendChild(newImage)

        maximize();
        clearInterval(checkExist);
    }
}, 100);


function maximize() {
    document.querySelector("._1XkO3").classList.forEach((e) => {
        switch (e) {
            case 'maximize-wpp':
                let maximizeStartup = document.querySelector('.maximize-wpp')
                maximizeStartup.classList.remove('maximize-wpp');
                maximizeStartup.classList.add('maximize-wpp-on');
                break;
            case 'maximize-wpp-on':
                let maximizeOn = document.querySelector('.maximize-wpp-on')
                maximizeOn.classList.remove('maximize-wpp-on');
                maximizeOn.classList.add('maximize-wpp-off');
                break;
            case 'maximize-wpp-off':
                let maximizeOff = document.querySelector('.maximize-wpp-off')
                maximizeOff.classList.remove('maximize-wpp-off');
                maximizeOff.classList.add('maximize-wpp-on');
                break;
            default:
                break;
        }
    })
    
}

function appendConfig() {

}

const style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(`
    .maximize-wpp-on {
        width: 100% !important;
        height: 100% !important;
        position: unset !important;
    }
`)


function showSideBarInformation(status) {
    const sidebarBlock = document.getElementsByClassName('ldL67 _1bLj8')[0]
    let sideBarDiv = document.createElement('div');
    sideBarDiv.setAttribute('class', 'post block bc2');
    sideBarDiv.innerHTML = html;
    console.log(status)
    if (status == 'on') {
        sidebarBlock.appendChild(sideBarDiv);
    }
    if (status == 'off') {
        document.getElementsByClassName('post block bc2')[0].remove()
    }
}

function showSideBar() {
    const bodyElement = document.body;
    if (bodyElement.classList.contains('two')) {
        bodyElement.classList.remove('two')
        bodyElement.classList.add('three')
        showSideBarInformation('on')
    }else if (bodyElement.classList.contains('three')) {
        bodyElement.classList.remove('three')
        bodyElement.classList.add('two')
        showSideBarInformation('off')
    }else {
        bodyElement.classList.add('three')
        showSideBarInformation('on')
    }
}

function show() {
    console.log('show')
}