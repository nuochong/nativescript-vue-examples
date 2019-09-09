'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var menu_common_1 = require('./menu.common');
var app = require('tns-core-modules/application');
var Types = require('tns-core-modules/utils/types');
var utils_1 = require("tns-core-modules/utils/utils");
var Menu = (function(_super) {
  __extends(Menu, _super);
  function Menu() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Menu.popup = function(options) {
    return new Promise(function(resolve, reject) {
      try {
        console.dir('eeeeee',app.android.foregroundActivity)
        console.dir('eeeeee',options.view.android.view)
        var popupMenu_1 = new android.widget.PopupMenu(app.android.foregroundActivity, options.view.android);
        if (options.actions[0] !== undefined) {
          if (Types.isString(options.actions[0])) {
            for (var i = 0; i < options.actions.length; i++) {
                var action = options.actions[i];
                console.log('菜单值',action);
                popupMenu_1.getMenu().add(action).setIcon();
            }
            // console.log('测试开始',android.R.menu)
            // popupMenu_1.getMenuInflater().inflate(android.R.menu, popupMenu_1.getMenu());
            // console.log('测试结束')
            // popupMenu_1.show();
            popupMenu_1.setOnMenuItemClickListener(
              new android.widget.PopupMenu.OnMenuItemClickListener({
                onMenuItemClick: function(item) {
                  resolve({
                    id: options.actions.indexOf(item.getTitle()),
                    title: item.getTitle()
                  });
                  return true;
                }
              })
            );
          } else {
            for (var i = 0; i < options.actions.length; i++) {
              var action = options.actions[i];
              if (action.title !== undefined) {
                popupMenu_1.getMenu().add(action.title);
              }
            }
            popupMenu_1.setOnMenuItemClickListener(
              new android.widget.PopupMenu.OnMenuItemClickListener({
                onMenuItemClick: function(item) {
                  resolve(
                    Object.assign(
                      {
                        id:
                          options.actions.find(function(actionItem) {
                            return actionItem.title === item.getTitle();
                          }).id ||
                          options.actions.indexOf(
                            options.actions.find(function(actionItem) {
                              return actionItem.title === item.getTitle();
                            })
                          )
                      },
                      options.actions.find(function(actionItem) {
                        return actionItem.title === item.getTitle();
                      })
                    )
                  );
                  return true;
                }
              })
            );
          }
        }
        popupMenu_1.setOnDismissListener(
          new android.widget.PopupMenu.OnDismissListener({
            onDismiss: function() {
              resolve(false);
            }
          })
        );
        setTimeout(function() {
          popupMenu_1.show();
        }, 1);
      } catch (error) {
        reject(error);
      }
    });
  };
  return Menu;
})(menu_common_1.Common);
exports.Menu = Menu;
//# sourceMappingURL=menu.android.js.map
