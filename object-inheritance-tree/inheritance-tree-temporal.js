

function inheritanceTree(object) {
    object = object.__proto__;
    while (object != null) {
        var objectName = object.constructor.name;
        console.group(objectName);
        console.groupEnd();
        object = object.__proto__;
    }
}

function inheritanceTree(object) {
    if (object.__proto__ === null) {
        return;
    }
    object = object.__proto__;
    var objectName = object.constructor.name;
    if (object.__proto__ !== null) {
        console.group(objectName);
        inheritanceTree(object);
        console.groupEnd();
    } else {
        console.log(object.constructor.name);
    }
}

function inheritanceTree(object, depth) {
    depth = depth || 0;
    // important no declare the globalDepth variable here,
    // as we need to use it from external scope (window)
    globalDepth = 0;
    if (object !== null) {
        var objectName = object.constructor.name;
        inheritanceTree(object.__proto__, depth+1);
        console.log(" ".repeat(globalDepth - depth) + objectName + " - " + depth + " - "+ globalDepth);
    } else {
        globalDepth = depth;
    }
}


function inheritanceTree(object, depth) {
    // Default value for depth
    depth = depth || 0;

    // IMPORTANT not declare the globalDepth variable here,
    // as we need to use it from external scope (window)
    globalDepth = 0;

    if (object !== null) {
        // Recursive call with next inheritance level
        inheritanceTree(object.__proto__, depth+1);
        console.group(object.constructor.name);
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
