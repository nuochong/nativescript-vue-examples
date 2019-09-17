"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color/color");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var view_1 = require("tns-core-modules/ui/core/view");
var weak_event_listener_1 = require("tns-core-modules/ui/core/weak-event-listener/weak-event-listener");
var label_1 = require("tns-core-modules/ui/label");
var grid_layout_1 = require("tns-core-modules/ui/layouts/grid-layout");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var types_1 = require("tns-core-modules/utils/types");
var CarouselUtil = (function () {
    function CarouselUtil() {
    }
    CarouselUtil.debug = false;
    return CarouselUtil;
}());
exports.CarouselUtil = CarouselUtil;
var Log = (function () {
    function Log() {
    }
    Log.D = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (CarouselUtil.debug === true) {
            console.log.apply(console, ['NativeScript-Carousel DEBUG: '].concat(args));
            console.log('---------------------------------------------------');
        }
    };
    return Log;
}());
exports.Log = Log;
var CarouselCommon = (function (_super) {
    __extends(CarouselCommon, _super);
    function CarouselCommon() {
        return _super.call(this) || this;
    }
    Object.defineProperty(CarouselCommon.prototype, "debug", {
        get: function () {
            return CarouselUtil.debug;
        },
        set: function (value) {
            CarouselUtil.debug = value;
        },
        enumerable: true,
        configurable: true
    });
    CarouselCommon.prototype._getDefaultItemContent = function (index) {
        var lbl = new label_1.Label();
        lbl.bind({
            targetProperty: 'text',
            sourceProperty: '$value'
        });
        return lbl;
    };
    CarouselCommon.pageChangedEvent = 'pageChanged';
    CarouselCommon.pageTappedEvent = 'pageTapped';
    CarouselCommon.pageScrollingEvent = 'pageScrolling';
    CarouselCommon.pageScrollStateChangedEvent = 'pageScrolled';
    return CarouselCommon;
}(grid_layout_1.GridLayout));
exports.CarouselCommon = CarouselCommon;
var CarouselItem = (function (_super) {
    __extends(CarouselItem, _super);
    function CarouselItem() {
        return _super.call(this) || this;
    }
    CarouselItem.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
    };
    return CarouselItem;
}(stack_layout_1.StackLayout));
exports.CarouselItem = CarouselItem;
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.itemTemplate = 'itemTemplate';
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
exports.debugProperty = new view_1.Property({
    name: 'debug',
    defaultValue: false,
    valueConverter: view_1.booleanConverter,
    valueChanged: function (view, oldValue, newValue) {
        CarouselUtil.debug = newValue;
    }
});
exports.debugProperty.register(CarouselCommon);
exports.itemTemplateProperty = new view_1.Property({
    name: 'itemTemplate',
    affectsLayout: true,
    valueChanged: function (view, oldValue, newValue) {
        view.refresh(true);
    }
});
exports.itemTemplateProperty.register(CarouselCommon);
exports.itemsProperty = new view_1.Property({
    name: 'items',
    affectsLayout: true,
    valueChanged: onItemsChanged
});
exports.itemsProperty.register(CarouselCommon);
exports.selectedPageProperty = new view_1.Property({
    name: 'selectedPage',
    defaultValue: 0,
    valueConverter: function (value) {
        return +value;
    },
    valueChanged: function (view, oldValue, newValue) {
        view.selectedPage = newValue;
    }
});
exports.selectedPageProperty.register(CarouselCommon);
exports.showIndicatorProperty = new view_1.Property({
    name: 'showIndicator',
    defaultValue: true,
    valueConverter: view_1.booleanConverter,
    valueChanged: function (view, oldValue, newValue) {
        view.showIndicator = newValue;
    }
});
exports.showIndicatorProperty.register(CarouselCommon);
exports.indicatorColorProperty = new view_1.Property({
    name: 'indicatorColor',
    equalityComparer: color_1.Color.equals,
    valueConverter: function (value) {
        return new color_1.Color(value);
    },
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorColor = newValue;
    }
});
exports.indicatorColorProperty.register(CarouselCommon);
exports.indicatorColorUnselectedProperty = new view_1.Property({
    name: 'indicatorColorUnselected',
    equalityComparer: color_1.Color.equals,
    valueConverter: function (value) {
        return new color_1.Color(value);
    },
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorColorUnselected = newValue;
    }
});
exports.indicatorColorUnselectedProperty.register(CarouselCommon);
exports.indicatorOffsetProperty = new view_1.Property({
    name: 'indicatorOffset',
    defaultValue: '0,0',
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorOffset = newValue;
    }
});
exports.indicatorOffsetProperty.register(CarouselCommon);
exports.autoPagingIntervalProperty = new view_1.Property({
    name: 'autoPagingInterval',
    defaultValue: 0,
    valueConverter: function (value) {
        return +value;
    },
    valueChanged: function (view, oldValue, newValue) {
        view.autoPagingInterval = newValue;
    }
});
exports.autoPagingIntervalProperty.register(CarouselCommon);
exports.finiteProperty = new view_1.Property({
    name: 'finite',
    valueConverter: view_1.booleanConverter,
    valueChanged: function (view, oldValue, newValue) {
        view.finite = newValue;
    }
});
exports.finiteProperty.register(CarouselCommon);
exports.bounceProperty = new view_1.Property({
    name: 'bounce',
    valueConverter: view_1.booleanConverter,
    valueChanged: function (view, oldValue, newValue) {
        view.bounce = newValue;
    }
});
exports.bounceProperty.register(CarouselCommon);
exports.scrollEnabledProperty = new view_1.Property({
    name: 'scrollEnabled',
    valueConverter: view_1.booleanConverter,
    valueChanged: function (view, oldValue, newValue) {
        view.scrollEnabled = newValue;
    }
});
exports.scrollEnabledProperty.register(CarouselCommon);
exports.indicatorAnimationProperty = new view_1.Property({
    name: 'indicatorAnimation',
    affectsLayout: true,
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorAnimation = newValue;
    }
});
exports.indicatorAnimationProperty.register(CarouselCommon);
exports.indicatorAnimationDurationProperty = new view_1.Property({
    name: 'indicatorAnimationDuration',
    affectsLayout: true,
    valueConverter: function (value) {
        return +value;
    },
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorAnimationDuration = newValue;
    }
});
exports.indicatorAnimationDurationProperty.register(CarouselCommon);
exports.indicatorAlignmentProperty = new view_1.Property({
    name: 'indicatorAlignment',
    defaultValue: 'BOTTOM',
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorAlignment = newValue.toUpperCase();
    }
});
exports.indicatorAlignmentProperty.register(CarouselCommon);
exports.indicatorRadiusProperty = new view_1.Property({
    name: 'indicatorRadius',
    affectsLayout: true,
    valueConverter: function (value) {
        return +value;
    },
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorRadius = newValue;
    }
});
exports.indicatorRadiusProperty.register(CarouselCommon);
exports.indicatorPaddingProperty = new view_1.Property({
    name: 'indicatorPadding',
    affectsLayout: true,
    valueConverter: function (value) {
        return +value;
    },
    valueChanged: function (view, oldValue, newValue) {
        view.indicatorPadding = newValue;
    }
});
exports.indicatorPaddingProperty.register(CarouselCommon);
function onItemsChanged(view, oldValue, newValue) {
    if (oldValue instanceof observable_array_1.ObservableArray) {
        weak_event_listener_1.removeWeakEventListener(oldValue, observable_array_1.ObservableArray.changeEvent, view.refresh, view);
    }
    if (newValue instanceof observable_array_1.ObservableArray) {
        weak_event_listener_1.addWeakEventListener(newValue, observable_array_1.ObservableArray.changeEvent, view.refresh, view);
    }
    if (!types_1.isNullOrUndefined(view.items) && types_1.isNumber(view.items.length)) {
        view.refresh(false);
    }
}
var IndicatorAnimation;
(function (IndicatorAnimation) {
    IndicatorAnimation["NONE"] = "NONE";
    IndicatorAnimation["COLOR"] = "COLOR";
    IndicatorAnimation["SLIDE"] = "SLIDE";
    IndicatorAnimation["WORM"] = "WORM";
    IndicatorAnimation["FILL"] = "FILL";
    IndicatorAnimation["SCALE"] = "SCALE";
    IndicatorAnimation["SCALE_DOWN"] = "SCALE_DOWN";
    IndicatorAnimation["THIN_WORM"] = "THIN_WORM";
    IndicatorAnimation["DROP"] = "DROP";
    IndicatorAnimation["SWAP"] = "SWAP";
})(IndicatorAnimation = exports.IndicatorAnimation || (exports.IndicatorAnimation = {}));
//# sourceMappingURL=carousel.common.js.map