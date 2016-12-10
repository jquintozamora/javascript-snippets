// IE9 - 11 Polyfill for object.constructor.name
// It is not a polyfill because in the case have the constructor
// of HTML object, then the name property is not implemented in 
// Function.prototype.name because in that case the constructor itself
// is not a function, it is an object. 
function getPolyfilledName(constructor){
    // No Polyfill needed
    if (constructor.hasOwnProperty("name")){
        return constructor.name;
    }
    if (typeof constructor === "function") {
        return constructor.toString().match(/^\s*function ([^ (]*)/)[1];
    }
    if (typeof constructor === "object") {
        return constructor.toString().match(/\[object ([^ \]]*)/)[1];
    }
}

var array = [1,2];
inheritanceTree(array);     // Object -> array
inheritanceTree(document);   // Object -> EventTarget -> Node -> Document -> HTMLDocument


function inheritanceTree(object, depth) {
    // Default value for depth
    depth = depth || 0;

    // IMPORTANT not declare the globalDepth variable here,
    // as we need to use it from external scope (window)
    globalDepth = 0;

    if (object !== null) {
        // Recursive call with next inheritance level
        inheritanceTree(object.__proto__, depth+1);
        var name = getPolyfilledName(object.constructor);
        console.group(name);
        // Check the last recursion call to close all the groups
        if (globalDepth === (globalDepth - depth)) {
            for (var i = 0 ; i < globalDepth ; i+=1) {
                console.groupEnd();
            }
        }
    } else {
        // this is the end of the recursion, we set the global scoped
        // variable globalDepth to the deepest level, the we could use it
        // to close all the groups (console.groupEnd)
        globalDepth = depth;
    }
}