export function setlanguagetolocalstorage(value){
localStorage.setItem("language", value)
}
export function getlanguagefromlocalstorage(value){
    return localStorage.getItem("language", value)
    }