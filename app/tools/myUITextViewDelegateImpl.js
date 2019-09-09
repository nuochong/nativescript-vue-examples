var onTextViewShouldBeginEditing;
var onTextViewDidBeginEditing;
var onTextViewDidEndEditing;

var MyUITextViewDelegateImpl = (function (_super) {
    __extends(MyUITextViewDelegateImpl, _super);
    function MyUITextViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    MyUITextViewDelegateImpl.initWithOwner = function (options) {
        var impl = MyUITextViewDelegateImpl.new();
        impl._owner = options.owner;
        impl._originalDelegate = options.owner.get().ios.delegate;
        onTextViewShouldBeginEditing = options.onTextViewShouldBeginEditing;
        onTextViewDidBeginEditing = options.onTextViewDidBeginEditing;
        onTextViewDidEndEditing = options.onTextViewDidEndEditing;
        return impl;
    };
    MyUITextViewDelegateImpl.prototype.textViewShouldBeginEditing = function (textView) {
        if (onTextViewShouldBeginEditing) {
            onTextViewShouldBeginEditing()
        }

        return this._originalDelegate.textViewShouldBeginEditing(textView);
    };
    MyUITextViewDelegateImpl.prototype.textViewDidBeginEditing = function (textView) {
        if (onTextViewDidBeginEditing) {
            onTextViewDidBeginEditing()
        }

       // return this._originalDelegate.textViewDidBeginEditing(textView);
    };
    MyUITextViewDelegateImpl.prototype.textViewDidEndEditing = function (textView) {
        console.log('textViewDidEndEditing Juan NEW ONE');
        if (onTextViewDidEndEditing) {
            onTextViewDidEndEditing()
        }
        return this._originalDelegate.textViewDidEndEditing(textView);
    };
    MyUITextViewDelegateImpl.prototype.textViewDidChange = function (textView) {
        return this._originalDelegate.textViewDidChange(textView);
    };
    MyUITextViewDelegateImpl.prototype.textViewShouldChangeTextInRangeReplacementText = function (textView, range, text) {
        // console.log("MyUITextViewDelegateImpl.textViewShouldChangeTextInRangeReplacementText(" + text + ")");
        // if (text === "\n") {
        //     console.log("textView.resignFirstResponder();");
        //     textView.resignFirstResponder();
        //     return false;
        // }
        return true;
    };
    MyUITextViewDelegateImpl.ObjCProtocols = [UITextViewDelegate];
    return MyUITextViewDelegateImpl;
})(NSObject);

exports.myUITextViewDelegateImpl = MyUITextViewDelegateImpl;