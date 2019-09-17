"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var builder_1 = require("tns-core-modules/ui/builder");
var types_1 = require("tns-core-modules/utils/types");
var enums_1 = require("tns-core-modules/ui/enums");
var carousel_common_1 = require("./carousel.common");
__export(require("./carousel.common"));
var Carousel = (function (_super) {
    __extends(Carousel, _super);
    function Carousel() {
        var _this = _super.call(this) || this;
        _this.onOrientationChanged = function (evt) {
            carousel_common_1.Log.D("OrientationChanged to ", evt.newValue);
            if (_this.currentOrientation != evt.newValue) {
                _this.currentOrientation = evt.newValue;
                _this.refresh();
            }
        };
        carousel_common_1.CarouselUtil.debug = _this.debug;
        _this.currentOrientation = enums_1.DeviceOrientation.unknown;
        app.on('orientationChanged', _this.onOrientationChanged);
        return _this;
    }
    Object.defineProperty(Carousel.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    Carousel.prototype[carousel_common_1.autoPagingIntervalProperty.setNative] = function (value) {
        if (this.nativeView instanceof DKCarouselView) {
            this.nativeView.setAutoPagingForInterval(value);
        }
    };
    Carousel.prototype[carousel_common_1.selectedPageProperty.setNative] = function (value) {
        this.selectedPage = value;
        this.nativeView.selectedPage = value;
    };
    Carousel.prototype[carousel_common_1.showIndicatorProperty.setNative] = function (value) {
        this.nativeView.indicatorIsVisible = value;
    };
    Carousel.prototype[carousel_common_1.finiteProperty.setNative] = function (value) {
        this.nativeView.finite = value;
    };
    Carousel.prototype[carousel_common_1.bounceProperty.setNative] = function (value) {
        this.nativeView.bounce = value;
    };
    Carousel.prototype[carousel_common_1.scrollEnabledProperty.setNative] = function (value) {
        this.nativeView.scrollEnabled = value;
    };
    Carousel.prototype[carousel_common_1.indicatorColorProperty.setNative] = function (value) {
        this.nativeView.indicatorTintColor = value ? value.ios : '#fff';
    };
    Carousel.prototype[carousel_common_1.indicatorColorUnselectedProperty.setNative] = function (value) {
        this.nativeView.indicatorTintColorUnselected = value.ios;
    };
    Carousel.prototype[carousel_common_1.indicatorOffsetProperty.setNative] = function (value) {
        var ar = value.split(',');
        var x = ar[0] ? ar[0] : 0;
        var y = ar[1] ? ar[1] : 0;
        this.nativeView.indicatorOffset = CGPointMake(x, y);
    };
    Carousel.prototype.createNativeView = function () {
        var viewWidth = this.getActualSize().width === 0 ? platform_1.screen.mainScreen.widthDIPs : this.getActualSize().width;
        var viewHeight = this.getActualSize().height === 0 ? platform_1.screen.mainScreen.heightDIPs : this.getActualSize().height;
        carousel_common_1.Log.D('createNativeView size', viewWidth, viewHeight);
        this.nativeView = DKCarouselView.alloc().initWithFrame(CGRectMake(0, 0, viewWidth, viewHeight));
        carousel_common_1.Log.D('createNativeView', this.nativeView);
        return this.nativeView;
    };
    Carousel.prototype.initNativeView = function () {
        var _this = this;
        var nativeView = this.nativeView;
        this._isDirty = true;
        nativeView.setDidSelectBlock(function (item, index) {
            var data = {
                eventName: carousel_common_1.CarouselCommon.pageTappedEvent,
                object: _this,
                view: item,
                index: index
            };
            _this.notify(data);
        });
        nativeView.setDidChangeBlock(function (view, index) {
            var data = {
                eventName: carousel_common_1.CarouselCommon.pageChangedEvent,
                object: _this,
                view: view,
                index: index
            };
            _this.selectedPage = index;
            _this.notify(data);
        });
        nativeView.setDidScrollBlock(function (view, offset) {
            var data = {
                eventName: carousel_common_1.CarouselCommon.pageScrollingEvent,
                object: _this,
                view: view,
                state: {
                    offset: offset
                }
            };
            _this.notify(data);
        });
        carousel_common_1.Log.D('initNativeView', this.nativeView);
    };
    Carousel.prototype.disposeNativeView = function () {
        var nativeView = this.nativeView;
        nativeView.setDidChangeBlock(null);
        nativeView.setDidScrollBlock(null);
        nativeView.setDidSelectBlock(null);
        nativeView.setItems(NSMutableArray.new());
        this.removeChildren();
    };
    Carousel.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this._isDirty) {
            this.refresh();
            carousel_common_1.Log.D("onLoaded()");
        }
    };
    Carousel.prototype.refresh = function () {
        var _this = this;
        carousel_common_1.Log.D("refresh()");
        if (!this.isLoaded || !this.nativeView) {
            this._isDirty = true;
            return;
        }
        this._isDirty = false;
        this.nativeView.setItems(NSMutableArray.new());
        if (types_1.isNullOrUndefined(this.itemTemplate)) {
            carousel_common_1.Log.D("Using generic-mode");
            var nsArray_1 = NSMutableArray.new();
            carousel_common_1.Log.D("children count: ", this.getChildrenCount());
            this.eachChildView(function (staticView) {
                if (staticView instanceof carousel_common_1.CarouselItem) {
                    staticView.width = _this.width;
                    staticView.height = _this.height;
                    var dkCarouselViewItem1 = new DKCarouselViewItem();
                    dkCarouselViewItem1.view = staticView.ios;
                    nsArray_1.addObject(dkCarouselViewItem1);
                }
                return true;
            });
            this.nativeView.setItems(nsArray_1);
            carousel_common_1.Log.D("items set: ", nsArray_1.count);
        }
        else {
            carousel_common_1.Log.D("Using template-mode");
            if (types_1.isNullOrUndefined(this.items)) {
                carousel_common_1.Log.D("Items list is null...");
                return;
            }
            this.removeChildren();
            var nsArray_2 = NSMutableArray.new();
            var length_1 = this.items.length;
            carousel_common_1.Log.D("items length: ", length_1);
            for (var i = 0; i < length_1; i++) {
                var viewToAdd = !types_1.isNullOrUndefined(this.itemTemplate) ? builder_1.parse(this.itemTemplate, this) : null;
                if (!viewToAdd)
                    continue;
                var dataItem = this._getDataItem(i);
                viewToAdd.bindingContext = dataItem;
                this.addChild(viewToAdd);
            }
            this.eachChildView(function (view) {
                if (view instanceof carousel_common_1.CarouselItem) {
                    view.width = _this.width;
                    view.height = _this.height;
                    var dkCarouselViewItem = new DKCarouselViewItem();
                    dkCarouselViewItem.view = view.ios;
                    nsArray_2.addObject(dkCarouselViewItem);
                }
                return true;
            });
            this.nativeView.setItems(nsArray_2);
            carousel_common_1.Log.D("items set: ", nsArray_2.count);
        }
    };
    Carousel.prototype.onItemsChanged = function (data) {
        carousel_common_1.Log.D('onItemsChanged', data);
        if (!types_1.isNullOrUndefined(this.items) && types_1.isNumber(this.items.length)) {
            this.refresh();
        }
    };
    Carousel.prototype._getDataItem = function (index) {
        return this.items.getItem ? this.items.getItem(index) : this.items[index];
    };
    return Carousel;
}(carousel_common_1.CarouselCommon));
exports.Carousel = Carousel;
//# sourceMappingURL=carousel.ios.js.map