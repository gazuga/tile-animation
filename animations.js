$.ender({
    toggleVisibility: function () {
        return this.toggleClass('visible').toggleClass('invisible');
    },
    visibilitySwitch: function (sel1, sel2) {
        this.find(sel1).toggleVisibility();
        return this.find(sel2).toggleVisibility();
    },
    random: function () {
        return this[Math.floor(Math.random() * this.length)]
    },
    opacityIn: function (duration, complete) {
        $(this).css('opacity', 0);
        $(this).toggleVisibility();
        $(this).fadeIn(duration);
        if (typeof (complete) != 'undefined') { complete(); }
    },
    opacityOut: function (duration, complete) {
        var sel = $(this);
        sel.fadeOut(duration, function () {
            sel.toggleVisibility();
            sel.css('opacity', 1);
            if (typeof (complete) != 'undefined') { complete(); }
        });
    },
    shrinkOut: function (duration, complete) {
        var sel = $(this);
        sel.animate({
            'margin-left': '0', height: 0, duration: duration, complete: function () {
                sel.toggleVisibility();
                sel.css('margin-left', 'auto');
                sel.css('height', 'auto');
                if (typeof (complete) != 'undefined') { complete(); }
            }
        });
    },
    slideUpIn: function (duration, compl) {
        var sel = $(this);
        sel.css('margin-top', '100%');
        sel.toggleVisibility();
        sel.animate({ 'margin-top': 0, duration: duration, complete: function () { if (typeof (compl) != 'undefined') { compl(); } } });
    },
    randomIn: function (duration, compl) {
        var sel = $(this);
        if (Math.random() > 0.5) {
            sel.slideUpIn(duration, compl);
        } else {
            sel.opacityIn(duration, compl);
        }
    },
    randomOut: function (duration, compl) {
        var sel = $(this);
        if (Math.random() > 0.5) {
            sel.shrinkOut(duration, compl);
        } else {
            sel.opacityOut(duration, compl);
        }
    }
}, true);