/* Menu desplegable Mobile */
(function() {
    var t, s, e, n, a = function(t, s) {
        return function() {
            return t.apply(s, arguments)
        }
    };
    s = function() {
        function t(t) {
            this.element = t,
            this._clickEvent = a(this._clickEvent, this),
            this.element = $(this.element),
            this.dropdown = this.element.parent().find(".dropdown-menu"),
            this.element.on("click", this._clickEvent)
        }
        return t.prototype._clickEvent = function(t) {
            return this.dropdown.hasClass("shown") || t.preventDefault(),
            this.dropdown.toggleClass("shown"),
            this.element.parent().toggleClass("active")
        }, t
    }(), e = function() {
        function t(t, s, e) {
            this.element = t,
            this.location = s,
            this.offcanvas = e,
            this._clearCss = a(this._clearCss, this),
            this._getFade = a(this._getFade, this),
            this._getCss = a(this._getCss, this),
            this._touchEnd = a(this._touchEnd, this),
            this._touchMove = a(this._touchMove, this),
            this._touchStart = a(this._touchStart, this), this.endThreshold = 130, this.startThreshold = this.element.hasClass("navbar-offcanvas-right") ? $("body").outerWidth() - 60 : 20, this.maxStartThreshold = this.element.hasClass("navbar-offcanvas-right") ? $("body").outerWidth() - 20 : 60, this.currentX = 0, this.fade = this.element.hasClass("navbar-offcanvas-fade") ? !0 : !1, $(document).on("touchstart", this._touchStart), $(document).on("touchmove", this._touchMove), $(document).on("touchend", this._touchEnd)
        }
        return t.prototype._touchStart = function(t) {
            return this.startX = t.originalEvent.touches[0].pageX
        }, t.prototype._touchMove = function(t) {
            var s;
            if ($(t.target).parents(".navbar-offcanvas").length > 0) return !0;
            if (this.startX > this.startThreshold && this.startX < this.maxStartThreshold) {
                if (t.preventDefault(), s = t.originalEvent.touches[0].pageX - this.startX, s = this.element.hasClass("navbar-offcanvas-right") ? -s : s, Math.abs(s) < this.element.outerWidth()) return this.element.css(this._getCss(s)), this.element.css(this._getFade(s))
            } else if (this.element.hasClass("in") && (t.preventDefault(), s = t.originalEvent.touches[0].pageX + (this.currentX - this.startX), s = this.element.hasClass("navbar-offcanvas-right") ? -s : s, Math.abs(s) < this.element.outerWidth())) return this.element.css(this._getCss(s)), this.element.css(this._getFade(s))
        }, t.prototype._touchEnd = function(t) {
            var s, e;
            return $(t.target).parents(".navbar-offcanvas").length > 0 ? !0 : (e = t.originalEvent.changedTouches[0].pageX, s = this.element.hasClass("navbar-offcanvas-right") ? Math.abs(e) > this.endThreshold + 50 : e < this.endThreshold + 50, this.element.hasClass("in") && s ? (this.currentX = 0, this.element.removeClass("in").css(this._clearCss())) : Math.abs(e - this.startX) > this.endThreshold && this.startX > this.startThreshold && this.startX < this.maxStartThreshold ? (this.currentX = this.element.hasClass("navbar-offcanvas-right") ? -this.element.outerWidth() : this.element.outerWidth(), this.element.toggleClass("in").css(this._clearCss())) : this.element.css(this._clearCss()), this.offcanvas.bodyOverflow())
        }, t.prototype._getCss = function(t) {
            return t = this.element.hasClass("navbar-offcanvas-right") ? -t : t, {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-webkit-transition-duration": "0s",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transition": "0s",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transition": "0s",
                transform: "translate3d(" + t + "px, 0px, 0px)",
                transition: "0s"
            }
        }, t.prototype._getFade = function(t) {
            return this.fade ? {
                opacity: t / this.element.outerWidth()
            } : {}
        }, t.prototype._clearCss = function() {
            return {
                "-webkit-transform": "",
                "-webkit-transition-duration": "",
                "-moz-transform": "",
                "-moz-transition": "",
                "-o-transform": "",
                "-o-transition": "",
                transform: "",
                transition: "",
                opacity: ""
            }
        }, t
    }(), t = function() {
        function t(t) {
            var n, i;
            this.element = t, this.bodyOverflow = a(this.bodyOverflow, this), this._sendEventsAfter = a(this._sendEventsAfter, this), this._sendEventsBefore = a(this._sendEventsBefore, this), this._documentClicked = a(this._documentClicked, this), this._clicked = a(this._clicked, this), i = this.element.attr("data-target") ? this.element.attr("data-target") : !1, i ? (this.target = $(i), this.target.length && !this.target.hasClass("js-offcanas-done") && (this.element.addClass("js-offcanvas-has-events"), this.location = this.target.hasClass("navbar-offcanvas-right") ? "right" : "left", this.target.addClass(transform ? "offcanvas-transform js-offcanas-done" : "offcanvas-position js-offcanas-done"), this.target.data("offcanvas", this), this.element.on("click", this._clicked), $(document).on("click", this._documentClicked), this.target.hasClass("navbar-offcanvas-touch") && (n = new e(this.target, this.location, this)), this.target.find(".dropdown-toggle").each(function() {
                var t;
                return t = new s(this)
            }))) : console.warn("Offcanvas: `data-target` attribute must be present.")
        }
        return t.prototype._clicked = function(t) {
            return t.preventDefault(), this._sendEventsBefore(), $(".navbar-offcanvas").removeClass("in"), this.target.toggleClass("in"), this.bodyOverflow()
        }, t.prototype._documentClicked = function(t) {
            var s;
            return s = $(t.target), s.hasClass("offcanvas-toggle") || 0 !== s.parents(".offcanvas-toggle").length || 0 !== s.parents(".navbar-offcanvas").length || s.hasClass("navbar-offcanvas") || !this.target.hasClass("in") ? void 0 : (t.preventDefault(), this._sendEventsBefore(), this.target.removeClass("in"), this.bodyOverflow())
        }, t.prototype._sendEventsBefore = function() {
            return this.target.trigger(this.target.hasClass("in") ? "show.bs.offcanvas" : "hide.bs.offcanvas")
        }, t.prototype._sendEventsAfter = function() {
            return this.target.trigger(this.target.hasClass("in") ? "shown.bs.offcanvas" : "hidden.bs.offcanvas")
        }, t.prototype.bodyOverflow = function() {
            return this._sendEventsAfter(), $("body").css({
                overflow: this.target.hasClass("in") ? "hidden" : "",
                position: this.target.hasClass("in") ? "relative" : ""
            })
        }, t
    }(), n = function(t) {
        return function() {
            var s, e, n, a;
            return e = document.createElement("div"), a = "translate3d(0px, 0px, 0px)", n = /translate3d\(0px, 0px, 0px\)/g, e.style.cssText = "-webkit-transform: " + a + "; -moz-transform: " + a + "; -o-transform: " + a + "; transform: " + a, s = e.style.cssText.match(n), t.transform = null != s.length
        }
    }(this), $(function() {
        return n(), $('[data-toggle="offcanvas"]').each(function() {
            var s;
            return s = new t($(this))
        }), $(".offcanvas-toggle").each(function() {
            return $(this).on("click", function() {
                var t, s;
                return !$(this).hasClass("js-offcanvas-has-events") && (s = $(this).attr("data-target"), t = $(s)) ? (t.removeClass("in"), $("body").css({
                    overflow: "",
                    position: ""
                })) : void 0
            })
        })
    })
}).call(this);