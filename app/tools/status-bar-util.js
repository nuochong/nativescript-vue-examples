import * as application from 'tns-core-modules/application';
import * as platform from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color';

let defaultColor;

function setStatusBarColors() {
  // 使Android状态栏透明。
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // 有关所使用技术的详细信息。
  if (application.android && platform.device.sdkVersion >= '21') {
    application.android.on('activityStarted', () => {
      const View = android.view.View;
      const window = application.android.startActivity.getWindow();
      // window.addFlags(android.view.WindowManager.LayoutParams.FlAG_TRANSLUCENT_STATUS);
      // window.addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
      // 设置导航栏为透明颜色
      window.setStatusBarColor(0x000000);
      const decorView = window.getDecorView();
      // 以下操作隐藏导航栏
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_FULLSCREEN |
          //View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
          //View.SYSTEM_UI_FLAG_LAYOUT_IN_SCREEN |
          //View.SYSTEM_UI_FLAG_LAYOUT_STABLE //|
          //View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
          View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      );
    });
  }
}
//设置安卓顶部导航背景颜色并根据亮色和暗色自动切换导航字体颜色
//setStatusBarFontColors('black');
function setStatusBarFontColors(color = 'default') {
  if (application.android) {
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
    if (v >= 0.5) {
      setBarFontColor('black');
    } else {
      setBarFontColor('white');
    }
  }
}

function setBarFontColor(type = 'black') {
  const View = android.view.View;
  const window = application.android.startActivity.getWindow();
  if (application.android) {
    const decorView = window.getDecorView();
    if (type == 'black') {
      console.log('是亮色,设置导航栏为黑色字体');
      decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
      //设置黑色状态栏字体
    } else if (type == 'white') {
      console.log('是暗色，设置导航栏为白色字体');
      decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
    } else {
      console.log('颜色错误');
    }
  }
}

export { setStatusBarColors, setStatusBarFontColors, setBarFontColor };
