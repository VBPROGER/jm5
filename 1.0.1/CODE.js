// jM5 1.0.1

/*********************/
/*                   */
/* jM5 official code */
/*                   */
/*********************/

jm5 = new class jm5class{

    name = "jM5"
    version = "1.0.1"
    description = ""

    constructor(){}
    getbrowser(){
        const { userAgent } = navigator
        var incl = userAgent.includes
        if (incl('Firefox/')) {
            return 'firefox'
        } else if (incl('Edg/')) {
            return 'edge'
        } else if (incl('Chrome/')) {
            return 'chrome'
        } else if (incl('Safari/')) {
            return 'safari'
        } else {
            return undefined
        }
    }
    getbrowserversion() {
        const { userAgent } = navigator
        var incl = userAgent.includes
        if (incl('Firefox/')) {
            return userAgent.split('Firefox/')[1]
        } else if (incl('Edg/')) {
            return userAgent.split('Edg/')[1]
        } else if (incl('Chrome/')) {
            return userAgent.split('Chrome/')[1]
        } else if (incl('Safari/')) {
            return userAgent.split('Safari/')[1]
        } else {
            return undefined
        }
    }
    get(requestURL){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', requestURL, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
    }
    post(requestURL){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', requestURL, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    request(type = "GET", req){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(type, requestURL, false);
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    devtools(){
    return (window.outerHeight - window.innerHeight > 100)
    }
    removenewlines(string){
        return string.replace('\n', '').trim();
    }
    pushstate(url){
    try {
        return chrome.history.pushState(url)
    } catch(e){
        try {
            return firefox.history.pushState(url)
        } catch(e){
            try {
                return browser.history.pushState(url)
            } catch(e){
                // Firefox bug: Call New ( ][<>throw jm5.pushstate()[0]))
                // `throw jm5.pushstate()[0]`
                return [false, e]
            }
        }
    }
    }
    islocal(){
    return (location.protocol.includes('file') || location.protocol.includes('localhost'))
    }
    string_eq(string1, string2){
    return (string1 === string2)
    }
    int_greater(int1, int2){
    return (int1 > int2)
    }
    is_not_greater(int1, int2){
    return (int1 < int2)
    }
    session_name(){
        return sessionStorage.getItem("SessionName")
    }
    get_protocol(){
        return location.protocol
    }
    download(url, name) {
        const elementmain = document.createElement("lnktmpdwnldjm5");
        elementmain.href = url;
        elementmain.download = name;
        document.body.appendChild(elementmain);
        elementmain.click();
        document.body.removeChild(elementmain);
    }
    __getcode__(version){
        return (this.get(`https://raw.githubusercontent.com/VBPROGER/jm5/main/${version}/CODE-MINIFIED.js`))
    }
    __getversion__(){
        return (this.get('https://raw.githubusercontent.com/VBPROGER/jm5/main/VER.data').replace('\n', '').trim())
    }
    __isuptodate__(){
        return (this.__getversion__() == this.version)
    }
    protocol_set(protocol){
        return this.__deprecated__()
    }
    __update__(){
        return this.__deprecated__()
    }
    isstringequalstostring(string1, string2){
    return this.__deprecated__()
    }
    __deprecated__(){
        throw new Error("This function have been deprecated.")
    }
}

// Alias
__jm5proto__ = jm5
// Detect
__jm5__ = true
// Deprecated
__depr__ = jm5.__deprecated__
