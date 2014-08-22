
myCtx = {
    doIt: function doIt() {
        window.setInterval(this.doItAgain, 3000);
        alert("Done it!");
    },
    doItAgain: function () {
        alert("Done it again!");
    }
};

window.onload(function () {
    myCtx.doIt();
}());