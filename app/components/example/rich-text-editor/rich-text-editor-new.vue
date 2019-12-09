<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <TextView textWrap="true" text="文字文字文字文字文字文字文字文字文字文字文字文字文字文字" ref="text">
        </TextView>
        <Button class="btn btn-primary -primary" text="添加图片" @tap=" addImageSpan" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const imageSourceModule = require('tns-core-modules/image-source');
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '自定义富文本编辑器'
    };
  },
  mounted() {},
  methods: {
    addImageSpan: function() {
      let tv = this.$refs.text.nativeView;
      if (this.$application.android) {
        console.log('这是安卓');
        let spanString = new android.text.SpannableString(' ');
        let d = this.$application.android.context.getResources().getDrawable(android.R.drawable.ic_menu_save);
        d.setBounds(0, 0, d.getIntrinsicWidth(), d.getIntrinsicHeight());
        let span = new android.text.style.ImageSpan(d, android.text.style.ImageSpan.ALIGN_BASELINE);
        spanString.setSpan(span, 0, 1, android.text.Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
        //tv.append(spanString);
        let text = tv.android.getText();
        let start = tv.android.getSelectionStart(); //获取光标位置
        text.insert(start, spanString); //添加图片

        //Bitmap imgInfo = BitmapCompressUtil.getBitmap(imgPath);//通过图片地址获取到Bitmap
        // //配置 SpannableString
        // SpannableString spannableString = new SpannableString(imgPath);
        // Drawable drawable = new BitmapDrawable(editText.getContext().getResources(), imgInfo);
        // drawable.setBounds(0, 0, imgInfo.getWidth(), imgInfo.getHeight());
        // ImageSpan span = new ImageSpan(drawable);
        // spannableString.setSpan(span, 0, imgPath.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);

        // Editable text = editText.getText();
        // int start = editText.getSelectionStart();//获取光标位置
        // text.insert(start, spannableString);//添加图片
      } else {
        console.log('这是ios');
        //创建你的 UIImage
        // let image = UIImage(change_arr[indexPath.row]);
        let image = imageSourceModule.fromResource('beer');
        //创建和NSTextAttachment并将图像添加到其中
        let attachment = NSTextAttachment();
        attachment.image = image;
        //将NSTextAttachment放入和attributedString中
        let attString = NSAttributedString(attachment);
        //将此带属性字符串添加到当前位置
        tv.ios.textStorage.insertAttributedString(attString, tv.ios.selectedRange.location);
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
