function receivesAFunction(spy) {
    spy();
};

function returnsANamedFunction() {
    return function named() {
        console.log("mclovin likes mcmuffins")
    }
};

function returnsAnAnonymousFunction(fn) {
    return function() {
        returnsAnAnonymousFunction(fn)
    }
};

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }