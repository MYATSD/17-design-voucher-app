export const urlToParamObj= (url) =>{
    const currentUrl = new URL(url)
    const newSearchParams = new URLSearchParams(currentUrl.search)
    return Object.fromEntries(newSearchParams)

}