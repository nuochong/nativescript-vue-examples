<template>
  <Page class="page" actionBarHidden="true">
    <ActionBarFirst :title="title" />
    <GridLayout>
      <GridLayout class="background" ref="bg" scaleX="1.4" scaleY="1.4" @loaded="startBackgroundAnimation" />
      <ScrollView>
        <StackLayout class="hello-world">
          <Button class="btn btn-primary" text="示例" @tap="example" />
          <Button class="btn btn-primary" text="实例" @tap="project" />
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import Example from './example/main';
import Project from './project/main';
import ActionBarFirst from './example/public/action-bar-first';

export default {
  components: {
    ActionBarFirst
  },
  data() {
    return {
      title: 'Welcome to NativeScript-Vue!'
    };
  },
  created() {},
  mounted() {},
  methods: {
    init() {
      if (application.ios) {
        var MyDelegate = (function(_super) {
          __extends(MyDelegate, _super);
          function MyDelegate() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function(application, launchOptions) {
            var gglDelegate = false;
            try {
              var errorRef = new interop.Reference();
              GGLContext.sharedInstance().configureWithError(errorRef);
              var signIn = GIDSignIn.sharedInstance();
              gglDelegate = true;
            } catch (error) {
              console.log(error);
            }
            var fcbDelegate = FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions); // facebook login delegate
            return gglDelegate || fcbDelegate;
          };
          MyDelegate.prototype.applicationOpenURLSourceApplicationAnnotation = function(application, url, sourceApplication, annotation) {
            var fcbDelegate = FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(
              application,
              url,
              sourceApplication,
              annotation
            ); // facebook login delegate
            var gglDelegate = GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation); // google login delegate
            return fcbDelegate || gglDelegate;
          };
          return MyDelegate;
        })(UIResponder);
        MyDelegate.ObjCProtocols = [UIApplicationDelegate];
        application.ios.delegate = MyDelegate;
      }
    },
    example: function() {
      this.navigateTo(this, Example, 'left');
      //this.$setStatusBarFontColors('black');
    },
    project: function() {
      this.navigateTo(this, Project, 'left');
      //this.$setBarFontColor('black');
    },
    startBackgroundAnimation: function() {
      this.$refs.bg.nativeView.animate({
        scale: { x: 1.0, y: 1.0 },
        duration: 10000
      });
    }
  }
};
</script>

<style scoped lang="scss">
.background {
  background-image: url('res://bg_login_rabbit');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
