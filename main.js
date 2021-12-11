const checkExist = setInterval(() => {
    const classElement = document.getElementsByClassName("app-wrapper-web")[0];

    if (classElement != null) {
        classElement.className="_1ADa8 _3Nsgw";
        clearInterval(checkExist);
    }
}, 100);
