import * as application from 'tns-core-modules/application';
import * as platform from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color';

let defaultColor;

function setStatusBarColors() {
  // Make the Android status bar transparent.
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // for details on the technique used.
  if (application.android && platform.device.sdkVersion >= '21') {
    application.android.on('activityStarted', () => {
      const View = android.view.View;
      const window = application.android.startActivity.getWindow();
      // window.addFlags(android.view.WindowManager.LayoutParams.FlAG_TRANSLUCENT_STATUS);
      // window.addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
      // window.setStatusBarColor(0x000000);//设置导航栏为透明颜色

      //const decorView = window.getDecorView();
      //var color = android.graphics.Color.parseColor('#f0f0f0');
      setStatusBarFontColors('black');
      //以下操作隐藏导航栏
      // decorView.setSystemUiVisibility(
      //   View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
      //     View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
      //     View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
      //     View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      // );
    });
  }
}
//设置安卓顶部导航背景颜色并根据亮色和暗色自动切换导航字体颜色
function setStatusBarFontColors(color = 'default') {
  if (application.android) {
    const View = android.view.View;
    const window = application.android.startActivity.getWindow();
    if (color == 'default') {
      window.setStatusBarColor(defaultColor);
    } else {
      //存储默认背景色
      defaultColor = window.getStatusBarColor();
      const argb = new Color(color);
      window.setStatusBarColor(argb._argb);
    }

    // window.setStatusBarColor(0x008000);
    // window.setStatusBarColor(0xff0000ff);
    // 以下都将被转化为argb颜色
    // console.log('自己的颜色：', new Color('#FF0000'));
    // console.log('自己的颜色：', new Color(0xff0000ff));
    // console.log('自己的颜色：', new Color('blue'));
    // console.log('安卓的颜色', android.graphics.Color.parseColor('#000000'));

    //判断亮色暗色，设置导航栏字体颜色
    const colorChange = window.getStatusBarColor();
    console.log('现在的颜色：', colorChange);
    const v = androidx.core.graphics.ColorUtils.calculateLuminance(colorChange);
    console.log('亮度处理后的值是：', v);
    const decorView = window.getDecorView();
    if (v >= 0.5) {
      console.log('是亮色,设置导航栏为黑色字体');
      decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
      //设置黑色状态栏字体
    } else {
      console.log('是暗色，设置导航栏为白色字体');
      decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
    }
  }
}

export { setStatusBarColors, setStatusBarFontColors };
