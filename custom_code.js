(()=>{ let css=`
.app-wrapper-web .app {
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
}
`;

var ss = document.createElement("style");
ss.type = "text/css"; ss.innerHTML = css;
document.getElementsByTagName("head")[0].appendChild(ss); })();