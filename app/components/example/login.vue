<template>
  <Page class="page" navigatingTo="onNavigatingTo">
    <ActionBarSecond :title="title" />
    <FlexboxLayout class="page page-login" backgroundImage="res://mesh">
      <StackLayout class="flexbox-item company-name-container">
        <Label class="t-30 company-name" text="你的公司名称【Your Company Name】"></Label>
      </StackLayout>
      <Image src="res://company_logo" stretch="none" class="company-logo" />
      <StackLayout class="flexbox-item">
        <Label class="t-18 login-text" text="登录您的组织帐户"></Label>
        <Label class="t-18 login-text" text="Log in with your organizational account"></Label>
        <Button
          class="btn btn-login btn-rounded-sm font-weight-bold t-18"
          @tap="login"
          text="登录【Log in】"
        ></Button>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
import Counter from './counter';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '模拟登录',
      msg: 'Hello World!'
    };
  },
  mounted() {},
  methods: {
    login: function() {
      this.$navigateTo(Counter, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'spring'
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
/* Common */
.fa {
  font-family: 'FontAwesome';
}
.page {
  background-color: #ffffff;
  color: #000000;
  flex-direction: column;
  align-items: center;
}

.btn {
  color: #ffffff;
  background-color: #3c59fd;
  margin: 20 0 30 0;
}

.btn:highlighted {
  background-color: #2241f0;
}

.flexbox-item {
  width: 95%;
  text-align: center;
}

.action-bar {
  background-color: #3c59fd;
  color: #ffffff;
  padding-right: 10;
}
.hr {
  background-color: #3c59fd;
  width: 95%;
  margin-top: 21;
  height: 1;
}

/* Login */
.page-login-container {
  background-color: #3c59fd;
  android-status-bar-background: #3c59fd;
}
.page-login {
  background-color: #3c59fd;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
}
.company-name-container {
  height: 30%;
}
.company-name {
  margin-top: 60;
}

.company-logo {
  flex-grow: 1;
}

.login-text {
  margin-top: 60;
  white-space: normal;
}

.btn-login {
  color: #000000;
  background-color: #ffffff;
}

.btn-login:highlighted {
  background-color: #eaeaea;
  color: #000000;
}

/*  Welcome */

.title {
  color: #3c59fd;
  margin-top: 20;
}
.flexbox-item label {
  margin-bottom: 4;
}

.menu-container {
  width: 90%;
}

.menu-item {
  vertical-align: top;
  width: 50%;
  margin-bottom: 16;
}
.menu-icon {
  width: 90;
  height: 90;
  vertical-align: top;
  border-width: 1;
  border-radius: 50%;
  font-size: 36;
  color: #3c59fd;
  background-color: #ffffff;
  border-color: #d8d8d8;
}

.action-button {
  font-size: 20;
}
</style>

