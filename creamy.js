const Creamy = {
    toHTML: (function(body) {
    this.b = body
    this.ele = []
    var e = this.b;
    var ret = ""
    //body building
    for (i = 0; i < this.b.length; i++) {
        var e = this.b[i]
            this.ele.push(structure(e))
    }
    for (i = 0; i < this.ele.length; i++) {
        ret = ret + this.ele[i].outerHTML
    }
    return ret
    function structure(e) {
        var ele = document.createElement(e.tag)
        if (e.id !== undefined) {
            ele.id = e.id
        }
        if (e.class !== undefined) {
            for (i = 0; i < e.class.length; i++) {
                ele.classList.add(e.class[i])
            }
        }
        if (e.attributes !== undefined) {
            for (i = 0; i < e.attributes.length; i++) {
                ele.setAttribute(e.attributes[i].att, e.attributes[i].value)
            }
        }
        if (e.css !== undefined) {
            ele.setAttribute("style", e.css)
        }
        for (i = 0; i < e.child.length; i++) {
            var c = e.child
            if(c[i].tag === undefined) {
                ele.innerHTML = c[i]
            } else if(c[i].tag !== undefined) {
                ele.appendChild(structure(c[i]))
            }
        }
        return ele
    }
})}