"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppTour = (function () {
    function AppTour(stops, handlers) {
        this.stops = stops;
        this.defaults = {
            view: null,
            title: 'title',
            titleTextSize: 25,
            titleTextColor: 'white',
            description: 'description',
            descriptionTextSize: 20,
            descriptionTextColor: 'white',
            outerCircleOpacity: 0.96,
            outerCircleColor: 'black',
            innerCircleColor: 'white',
            rippleColor: 'white',
            innerCircleRadius: 50,
            dismissable: false
        };
        this.defaultHandlers = {
            finish: function () { },
            onStep: function (lastStepNative) { },
            onCancel: function (lastStepNative) { }
        };
        if (handlers) {
            handlers.finish = handlers.finish || this.defaultHandlers.finish;
            handlers.onStep = handlers.onStep || this.defaultHandlers.onStep;
            handlers.onCancel = handlers.onCancel || this.defaultHandlers.onCancel;
        }
        this.stops = stops;
        this.handlers = handlers || this.defaultHandlers;
        this.reset();
        this.buildNativeTour(stops, this.handlers);
    }
    AppTour.prototype.updateStops = function (stops) {
        this.stops = stops;
        this.reset();
        this.buildNativeTour(stops, this.handlers);
    };
    AppTour.prototype.buildNativeTour = function (stops, handlers) { };
    AppTour.prototype.show = function () { };
    AppTour.prototype.reset = function () { };
    return AppTour;
}());
exports.AppTour = AppTour;
//# sourceMappingURL=app-tour.common.js.map