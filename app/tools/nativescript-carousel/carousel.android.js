'use strict';
function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, '__esModule', { value: true });
var builder_1 = require('tns-core-modules/ui/builder');
var view_1 = require('tns-core-modules/ui/core/view');
var grid_layout_1 = require('tns-core-modules/ui/layouts/grid-layout');
var types_1 = require('tns-core-modules/utils/types');
var utils_1 = require('tns-core-modules/utils/utils');
var carousel_common_1 = require('./carousel.common');
var VIEWS_STATES = '_viewStates';
var PagerNamespace = androidx.viewpager.widget;
var POSITION_UNCHANGED = -1;
var POSITION_NONE = -2;
__export(require('./carousel.common'));
var Carousel = (function(_super) {
  __extends(Carousel, _super);
  function Carousel() {
    var _this = _super.call(this) || this;
    _this._androidViewId = -1;
    _this._indicatorViewId = -1;
    carousel_common_1.CarouselUtil.debug = _this.debug;
    carousel_common_1.Log.D('Carousel constructor');
    _this.CarouselPagerAdapterClass = new CarouselPagerAdapterClassInner(new WeakRef(_this));
    _this.CarouselPageChangedListenerClass = new CarouselPageChangedListener(new WeakRef(_this));
    carousel_common_1.Log.D(
      'this.CarouselPagerAdapterClass = ' + _this.CarouselPagerAdapterClass,
      'this.CarouselPageChangedListenerClass = ' + _this.CarouselPageChangedListenerClass
    );
    return _this;
  }
  Object.defineProperty(Carousel.prototype, 'android', {
    get: function() {
      return this.nativeView;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Carousel.prototype, 'adapter', {
    get: function() {
      return this.android.getAdapter();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Carousel.prototype, 'pageIndicatorCount', {
    set: function(value) {
      if (value) {
        this.adapter.notifyDataSetChanged();
        this._pageIndicatorView.setCount(value);
      }
    },
    enumerable: true,
    configurable: true
  });
  Carousel.prototype[carousel_common_1.indicatorColorProperty.setNative] = function(value) {
    carousel_common_1.Log.D('indicatorColorProperty.setNative value = ' + value);
    if (!value) {
      return;
    }
    this._pageIndicatorView.setSelectedColor(value.android);
  };
  Carousel.prototype[carousel_common_1.indicatorColorUnselectedProperty.setNative] = function(value) {
    carousel_common_1.Log.D('indicatorColorUnselectedProperty.setNative value = ' + value);
    if (!value) {
      return;
    }
    this._pageIndicatorView.setUnselectedColor(value.android);
  };
  Carousel.prototype[carousel_common_1.selectedPageProperty.setNative] = function(value) {
    carousel_common_1.Log.D('selectedPageProperty.setNative value = ' + value);
    this.selectedPage = value;
    this.nativeView.setCurrentItem(value);
  };
  Carousel.prototype[carousel_common_1.autoPagingIntervalProperty.setNative] = function(value) {
    console.log('当前页', this.selectedPage);
    console.log('总页数', this.getItemCount());
    let time = setInterval(() => {
      try {
        console.log('定时');
        let currentpage = this.selectedPage;
        let totalpage = this.getItemCount();
        if (currentpage == totalpage - 1) {
          currentpage = 0;
        } else {
          currentpage = currentpage + 1;
        }
        this.nativeView.setCurrentItem(currentpage);
      } catch (err) {
        console.log('销毁');
        clearInterval(time);
      }
    }, 5000);
  };
  Carousel.prototype[carousel_common_1.indicatorAnimationProperty.setNative] = function(value) {
    carousel_common_1.Log.D('indicatorAnimationProperty.setNative value = ' + value);
    if (!value) {
      return;
    }
    var animationType = com.rd.animation.type.AnimationType.NONE;
    switch (value.toUpperCase()) {
      case 'NONE':
        animationType = com.rd.animation.type.AnimationType.NONE;
        break;
      case 'COLOR':
        animationType = com.rd.animation.type.AnimationType.COLOR;
        break;
      case 'SLIDE':
        animationType = com.rd.animation.type.AnimationType.SLIDE;
        break;
      case 'WORM':
        animationType = com.rd.animation.type.AnimationType.WORM;
        break;
      case 'SCALE':
        animationType = com.rd.animation.type.AnimationType.SCALE;
        break;
      case 'FILL':
        animationType = com.rd.animation.type.AnimationType.FILL;
        break;
      case 'THIN_WORM':
        animationType = com.rd.animation.type.AnimationType.THIN_WORM;
        break;
      case 'DROP':
        animationType = com.rd.animation.type.AnimationType.DROP;
        break;
      case 'SWAP':
        animationType = com.rd.animation.type.AnimationType.SWAP;
        break;
      default:
        animationType = com.rd.animation.type.AnimationType.NONE;
        break;
    }
    if (this._pageIndicatorView) {
      this._pageIndicatorView.setAnimationType(animationType);
    }
  };
  Carousel.prototype[carousel_common_1.indicatorAnimationDurationProperty.setNative] = function(value) {
    carousel_common_1.Log.D('indicatorAnimationDurationProperty.setNative value = ' + value);
    if (!value) {
      return;
    }
    if (this._pageIndicatorView) {
      this._pageIndicatorView.setAnimationDuration(value);
    }
  };
  Carousel.prototype[carousel_common_1.indicatorRadiusProperty.setNative] = function(value) {
    carousel_common_1.Log.D('indicatorRadiusProperty.setNative value = ' + value);
    if (!value) {
      return;
    }
    if (this._pageIndicatorView) {
      this._pageIndicatorView.setRadius(value);
    }
  };
  Carousel.prototype[carousel_common_1.indicatorPaddingProperty.setNative] = function(value) {
    carousel_common_1.Log.D('indicatorPaddingProperty.setNative value = ' + value);
    if (!value) {
      return;
    }
    if (this._pageIndicatorView) {
      this._pageIndicatorView.setPadding(value);
    }
  };
  Carousel.prototype.createNativeView = function() {
    carousel_common_1.Log.D('createNativeView');
    if (this._androidViewId < 0) {
      this._androidViewId = android.view.View.generateViewId();
    }
    if (this._indicatorViewId < 0) {
      this._indicatorViewId = android.view.View.generateViewId();
    }
    this.nativeView = new PagerNamespace.ViewPager(this._context);
    this.nativeView.setId(this._androidViewId);
    carousel_common_1.Log.D('this.nativeView = ' + this.nativeView);
    this._pageIndicatorView = new com.rd.PageIndicatorView(this._context);
    this._pageIndicatorView.setId(this._indicatorViewId);
    this._pagerIndicatorLayoutParams = new org.nativescript.widgets.CommonLayoutParams();
    this.nativeView.setAdapter(this.CarouselPagerAdapterClass);
    this.nativeView.setOnPageChangeListener(this.CarouselPageChangedListenerClass);
    return this.nativeView;
  };
  Carousel.prototype.onLoaded = function() {
    _super.prototype.onLoaded.call(this);
    carousel_common_1.Log.D('onLoaded');
    if (this.showIndicator !== false) {
      this._pagerIndicatorLayoutParams.height = -2;
      this._pagerIndicatorLayoutParams.width = -1;
      var ar = this.indicatorOffset.split(',');
      var x = ar[0] ? Number(ar[0]) : 0;
      var y = ar[1] ? Number(ar[1]) : 0;
      var defaultVerticalMargin = 25;
      var verticalOffset = utils_1.layout.toDevicePixels(defaultVerticalMargin + (y < 0 ? Math.abs(y) : -Math.abs(y)));
      var horizontalOffset = utils_1.layout.toDevicePixels(x);
      if (this.indicatorAlignment === 'TOP') {
        this._pagerIndicatorLayoutParams.setMargins(horizontalOffset, verticalOffset, 0, 0);
        this._pagerIndicatorLayoutParams.gravity = android.view.Gravity.TOP | android.view.Gravity.CENTER;
      } else {
        this._pagerIndicatorLayoutParams.setMargins(horizontalOffset, 0, 0, verticalOffset);
        this._pagerIndicatorLayoutParams.gravity = android.view.Gravity.BOTTOM | android.view.Gravity.CENTER;
      }
      if (this._pageIndicatorView.getParent()) {
        this.parent.android.removeView(this._pageIndicatorView);
      }
      if (this.parent instanceof grid_layout_1.GridLayout) {
        this.parent.android.addView(this._pageIndicatorView, this._pagerIndicatorLayoutParams);
      } else {
        this.parent.android.addView(this._pageIndicatorView);
      }
      this._pageIndicatorView.setViewPager(this.nativeView);
      this._pageIndicatorView.setCount(this._childrenCount);
      this._pageIndicatorView.setSelection(this.selectedPage);
    }
  };
  Carousel.prototype.initNativeView = function() {
    carousel_common_1.Log.D('initNativeView');
    this.refresh();
  };
  Carousel.prototype.getItemCount = function() {
    var itemCount;
    if (!types_1.isNullOrUndefined(this.items) && types_1.isNumber(this.items.length)) {
      itemCount = this.items.length;
    } else {
      itemCount = this.getChildrenCount();
    }
    return itemCount;
  };
  Carousel.prototype.refresh = function() {
    carousel_common_1.Log.D('refresh()');
    if (!this.nativeView) {
      return;
    }
    var itemsCount = this.getItemCount();
    carousel_common_1.Log.D('Items count: ', itemsCount);
    if (types_1.isNullOrUndefined(itemsCount)) {
      return;
    }
    if (!types_1.isNullOrUndefined(this.itemTemplate)) {
      carousel_common_1.Log.D('Using template mode');
      this.removeChildren();
      for (var i = 0; i < itemsCount; i++) {
        var viewToAdd = !types_1.isNullOrUndefined(this.itemTemplate) ? builder_1.parse(this.itemTemplate, this) : this._getDefaultItemContent(i);
        var dataItem = this._getDataItem(i);
        viewToAdd.bindingContext = dataItem;
        this.addChild(viewToAdd);
      }
    }
    if (this.adapter) {
      carousel_common_1.Log.D('notifyDataSetChanged');
      this.adapter.notifyDataSetChanged();
      this.nativeView.setCurrentItem(this.selectedPage);
      this._pageIndicatorView.setCount(itemsCount);
      this._pageIndicatorView.setSelection(this.selectedPage);
    }
    if (types_1.isNullOrUndefined(this.itemTemplate)) {
      carousel_common_1.Log.D('setOffscreenPageLimit');
      this.nativeView.setOffscreenPageLimit(itemsCount);
    }
  };
  Carousel.prototype.onLayout = function(left, top, right, bottom) {
    view_1.View.layoutChild(this, this, 0, 0, right - left, bottom - top);
  };
  Carousel.prototype._getDataItem = function(index) {
    return this.items.getItem ? this.items.getItem(index) : this.items[index];
  };
  Carousel.prototype.onItemsChanged = function(data) {
    carousel_common_1.Log.D('_onItemsChanged()', data);
    this.refresh();
  };
  return Carousel;
})(carousel_common_1.CarouselCommon);
exports.Carousel = Carousel;
var CarouselPagerAdapterClassInner = (function(_super) {
  __extends(CarouselPagerAdapterClassInner, _super);
  function CarouselPagerAdapterClassInner(owner) {
    var _this = _super.call(this) || this;
    _this.owner = owner;
    return global.__native(_this);
  }
  CarouselPagerAdapterClassInner.prototype.getCount = function() {
    return this.owner.get().getItemCount();
  };
  CarouselPagerAdapterClassInner.prototype.getItemPosition = function(item) {
    return POSITION_NONE;
  };
  CarouselPagerAdapterClassInner.prototype.isViewFromObject = function(view, _object) {
    return view === _object;
  };
  CarouselPagerAdapterClassInner.prototype.instantiateItem = function(container, index) {
    carousel_common_1.Log.D('-------> CarouselPagerAdapter instantiateItem()', index);
    carousel_common_1.Log.D('-------> PagerAdapter: Collection count: ', container.getChildCount());
    carousel_common_1.Log.D('-------> PagerAdapter: Carousel count: ', this.owner.get().getChildrenCount());
    carousel_common_1.Log.D('-------> PagerAdapter: Items count: ', this.getCount());
    var item = this.owner.get().getChildAt(index);
    if (types_1.isNullOrUndefined(item)) {
      carousel_common_1.Log.D('-------> PagerAdapter: Could not find Carousel(Grid) child item at index: ', index);
      return null;
    }
    if (item.parent !== this.owner.get()) {
      this.owner.get().addChild(item);
    } else {
      item.parent.android.removeView(item.android);
    }
    if (this[VIEWS_STATES]) {
      item.nativeView.restoreHierarchyState(this[VIEWS_STATES]);
    }
    container.addView(item.nativeView, 0, android.view.ViewGroup.LayoutParams.MATCH_PARENT);
    return item.nativeView;
  };
  CarouselPagerAdapterClassInner.prototype.destroyItem = function(container, index, object) {
    carousel_common_1.Log.D('PagerAdapter destroyItem()', index);
    container.removeView(object);
  };
  CarouselPagerAdapterClassInner.prototype.saveState = function() {
    carousel_common_1.Log.D('CarouselPagerAdapterClassInner saveState()');
    if (!this[VIEWS_STATES]) {
      this[VIEWS_STATES] = new android.util.SparseArray();
    }
    var mViewStates = this[VIEWS_STATES];
    var mViewPager = this.owner.get().android;
    var count = mViewPager.getChildCount();
    for (var i = 0; i < count; i++) {
      var c = mViewPager.getChildAt(i);
      if (c.isSaveFromParentEnabled()) {
        c.saveHierarchyState(mViewStates);
      }
    }
    var bundle = new android.os.Bundle();
    bundle.putSparseParcelableArray(VIEWS_STATES, mViewStates);
    return bundle;
  };
  CarouselPagerAdapterClassInner.prototype.restoreState = function(state, loader) {
    carousel_common_1.Log.D('CarouselPagerAdapterClassInner restoreState()', state, loader);
    var bundle = state;
    bundle.setClassLoader(loader);
    this[VIEWS_STATES] = bundle.getSparseParcelableArray(VIEWS_STATES);
  };
  return CarouselPagerAdapterClassInner;
})(PagerNamespace.PagerAdapter);
var CarouselPageChangedListener = (function(_super) {
  __extends(CarouselPageChangedListener, _super);
  function CarouselPageChangedListener(owner) {
    var _this = _super.call(this) || this;
    _this.owner = owner;
    return global.__native(_this);
  }
  CarouselPageChangedListener.prototype.onPageSelected = function(position) {
    carousel_common_1.Log.D('CarouselPageChangedListener onPageSelected()', position);
    this.owner.get().notify({
      eventName: carousel_common_1.CarouselCommon.pageChangedEvent,
      object: this.owner.get(),
      index: position
    });
    this.owner.get().selectedPage = position;
  };
  CarouselPageChangedListener.prototype.onPageScrollStateChanged = function(state) {
    this.owner.get().notify({
      eventName: carousel_common_1.CarouselCommon.pageScrollStateChangedEvent,
      object: this.owner.get(),
      state: state
    });
  };
  CarouselPageChangedListener.prototype.onPageScrolled = function(position, positionOffset, positionOffsetPixels) {
    var data = {
      eventName: carousel_common_1.CarouselCommon.pageScrollingEvent,
      object: this.owner.get(),
      state: {
        offset: positionOffset,
        android: {
          position: position,
          positionOffset: positionOffset,
          positionOffsetPixels: positionOffsetPixels
        }
      }
    };
    this.owner.get().notify(data);
  };
  return CarouselPageChangedListener;
})(PagerNamespace.ViewPager.SimpleOnPageChangeListener);
//# sourceMappingURL=carousel.android.js.map
