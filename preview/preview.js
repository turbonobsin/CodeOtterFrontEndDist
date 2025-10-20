console.log("preview loaded");
const iframe = document.querySelector("iframe");
let isOver = true;

let currentURL = "";
window.addEventListener("message",e=>{
    if(!iframe){
        console.warn("couldn't set url in preview iframe, no iframe found");
        return;
    }
    // console.log("previewer got message:",e.data);

    let id = e.data?.id;
    if(!id) return;
    if(id == "setURL"){
        currentURL = e.data.url;
        iframe.contentWindow.location.replace(currentURL);
    }
    else if(id == "setOver"){
        isOver = e.data.over;
    }
});

function init(){
    iframe.onload = e=>{
        window.parent.postMessage({id:"load"},"*");
    };
    iframe.onerror = e=>{
        window.parent.postMessage({id:"load",err:e.toString()},"*");
    };
    
    if(false) window.addEventListener("beforeunload",e=>{
        if(!isOver){
            console.error("NO LONGER OVER");
            return;
        }
        
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();

        window.parent.postMessage({id:"refresh"},"*");
        
        return false;
    });
}
init();