export function setStorageItem (key, value){
    localStorage.setItem(key, JSON.stringify(value))
}


export function getStorageItem(key) {
    const data = JSON.parse(localStorage.getItem(key))
    return data
}