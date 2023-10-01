export function isMobile(innerWidth, innerHeight) {
    if (innerWidth < 1000 && innerHeight < 1000) {
        return false
    } else {
        return true
    }
}

export function needRotation(innerWidth, innerHeight) {
    if (innerWidth < innerHeight) {
        return true
    } else {
        return false
    }
}