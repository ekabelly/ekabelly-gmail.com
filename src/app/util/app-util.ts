export const setPageAttrs = (name: string, faviconSrc: string) => {
    document.title = name;
    document.querySelector('#favicon').href = faviconSrc;
}