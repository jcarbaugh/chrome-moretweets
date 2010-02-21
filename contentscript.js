var moreElem = document.getElementById('more');

if (moreElem) {
    window.addEventListener("scroll", function() {
        var height = document.height - window.screen.availHeight;
        if (window.scrollY >= height) {
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);
            document.getElementById('more').dispatchEvent(evt);
        }
    });
}