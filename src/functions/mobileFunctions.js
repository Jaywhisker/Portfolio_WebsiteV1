export function isMobile() {
    if (window.innerWidth < 1000 && window.innerHeight < 1000) {
        return true
    } else {
        return false
    }
}

export function needRotation() {
    if (window.innerWidth < window.innerHeight) {
        return true
    } else {
        return false
    }
}

export function renderCorrectScreen(navigate, location, setRotate, setMobile) {
    if (isMobile() && location.pathname !== ('/')) {
        navigate("/")
    } else if (isMobile()) {
        setMobile(true)
        setRotate(false)
    } else if (needRotation() ) {
        setRotate(true)
    } else {
        setRotate(false)
        setMobile(false)
    }
}