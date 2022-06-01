// jM5

/*********************/
/*                   */
/* jM5 official code */
/*                   */
/*********************/

class __jm5__{

    name = "jM5"
    version = "1.0.1"
    description = ""

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
    xmlHttp.open( "GET", requestURL, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }
    BETA_devtools(){
    var status = ""
    status = "False";
    if ((window.outerHeight - window.innerHeight) > 100) {
        status = "True"
    }
    return status
    }
    removenewlines(string){
        var string = string.replace('\n', '').trim();
        return string
    }
    tryhistoryadd(url){
    var title = ''
    var add_URL = chrome.history.pushState(url)
    return "True"
    }
    islocal(){
    var PROTOCOL = location.protocol
    if (PROTOCOL == 'file:'){
        return "True"
    } else if (PROTOCOL == 'localhost:'){
        return "True"
    } else {
        return "False"
    }
    }
    isstringequalstostring(string1, string2){
    if (string1 == string2) {
            return "True"
        } else {
            return "False"
        }
    }
    isstringnotequalstostring(string1, string2){
    if (string1 != string2) {
            return "True"
        } else {
            return "False"
        }
    }
    isvaluebiggerthanvalue(int1, int2){
    if (int1 > int2){
        return "True"
    } else{
        return "False"
    }
    }
    isvaluesmallerthanvalue(int1, int2){
    if (int1 < int2){
            return "True"
        } else{
            return "False"
        }
    }
    trygetbrowserusername(){
        var NAME = sessionStorage.getItem("SessionName")
        return NAME
    }
    protocol_get(){
        var PROTOCOL = location.protocol
        return PROTOCOL
    }
    protocol_set(PROTOCOL){
        var NEW_TEMPORARY_VARIABLE__PROTOCOL = location.protocol(PROTOCOL)
        return "True"
    }
    trydownload(URL, NAME) {
        const elementmain = document.createElement("lnktmpdwnldjm5");
        elementmain.href = URL;
        elementmain.download = NAME;
        document.body.appendChild(elementmain);
        elementmain.click();
        document.body.removeChild(elementmain);
    }
    __getcode__(version){
        var URLGET = ""
        var URLGET = 'https://raw.githubusercontent.com/VBPROGER/jm5/main/'+ version +'/CODE-MINIFIED.js'
        var CODE = this.get(URLGET);
        return CODE
    }
    __getversion__(){
        var VERSION = this.get('https://raw.githubusercontent.com/VBPROGER/jm5/main/VER.data')
        VERSION = VERSION.replace('\n', '').trim();
        return VERSION
    }
    __isuptodate__(){
        var VERSION = this.__getversion__()
        var ISUPTODATE = ""
        if (VERSION==this.version) {
            var ISUPTODATE = "True"
        } else{
            var ISUPTODATE = "False"
        }
        return ISUPTODATE
    }
    __log__(content){
    console.log("jM5: "+content)
    }
    __info__(content){
        console.info("jM5: "+content)
    }
    __warn__(content){
        console.warn("jM5: "+content)
        }
    __update__(){
        var ISUPTODATE = ""
        var CODE = ""
        var VERSION = ""
        var ISUPTODATE = this.__isuptodate__()
        var VERSION = this.version
        if (ISUPTODATE == "False") {
            this.__warn__('outdated jm5 version: updating')
            this.__log__('updating...')
            this.__log__('getting code...')
            var CODE = this.__getcode__(VERSION)
            this.__log__('got code:')
            this.__log__(CODE)
            return "True"
        } else{
            return "False"
        }
    }
}
let jm5 = new __jm5__();