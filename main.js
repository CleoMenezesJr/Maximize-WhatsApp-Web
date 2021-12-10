const checkExist = setInterval(() => {
    const classElement = document.getElementsByClassName("_1XkO3");
    const setBgColor = document.querySelector('.dark')

    if (classElement != null) {
        classElement[0].style = 'width: 100vw; height: 98vh'
        setBgColor.style.setProperty('--app-background', '#009688');
        clearInterval(checkExist);
    }
}, 100);
