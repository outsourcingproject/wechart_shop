/**
 * Created by zl on 2015/9/4.
 */
function previousSibling(n){
    var x=n.previousSibling;
    while (x.nodeType!=1)
    {
        x=x.previousSibling;
    }
    return x;
}
function nextSibling(n){
    var x=n.nextSibling;
    while (x.nodeType!=1)
    {
        x=x.nextSibling;
    }
    return x;
}
function childNode(node,n){
    var x=node.childNodes;
    var j=0;
    for(var i=0;i<x.length;i++){
        if(x[i].nodeType==1){
            if(j==n){
                return x[i];
            }
            j++;
        }
    }
}

function hasClass(obj, cls) {
    return !!obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    }else{
        addClass(obj, cls);
    }
}