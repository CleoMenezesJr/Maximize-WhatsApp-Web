const checkExist = setInterval(() => {
    const removableClass = document.getElementsByClassName("app-wrapper-web")[0];
    const classElement = document.getElementsByClassName("_1XkO3")[0];

    if (classElement != null) {
        removableClass.className="_1ADa8 _3Nsgw";
        classElement.style = 'width: 100vw; height: 100vh'
        clearInterval(checkExist);
    }
}, 100);
