<template>
  <div class="sidebar-menu">
    <div class="menu-var logo" @click='goToUrl({path:""})'>中科crm</div>
    <div class="menu-var div-menu">
      <!-- <a-menu
        @click="handleClick"
        mode="inline"
      >
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="mail" />
            <span>Navigation One</span>
          </span>
          <a-menu-item-group key="g1">
            <template slot="title">
              <a-icon type="qq" />
              <span>Item 1</span>
            </template>
            <a-menu-item key="1">Option 1</a-menu-item>
            <a-menu-item key="2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group key="g2" title="Item 2">
            <a-menu-item key="3">Option 3</a-menu-item>
            <a-menu-item key="4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="appstore" />
            <span>Navigation Two</span>
          </span>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title">
            <a-icon type="setting" />
            <span>Navigation Three</span>
          </span>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-menu>-->
      <a-menu @click="handleClick" mode="inline">
        <template v-for="item in menuTree">
          <a-sub-menu v-if="item.children&&!item.hidden" v-bind:key="item.id">
            <span slot="title">
              <a-icon type="appstore" />
              <span>{{item.meta.title}}</span>
            </span>
            <template v-for="itemtag in item.children">
            <a-menu-item
              @click="goToUrl(itemtag)"
              v-bind:key="itemtag.id"
              v-if="!itemtag.flShow"
            >{{itemtag.meta.title}}</a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
// import { mapState } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      menuTree: "",
      current: ["mail"]
      // openKeys: ['sub1'],
    };
  },
  computed: {
    // ...mapState({
    //   menuTree: state => state.menuTree
    // })
  },
  methods: {
    handleClick(e) {
    },
    goToUrl(itemTag) {
      var surl = itemTag.path;
      // 通过菜单URL跳转至指定路由
      this.$router.push("/" + surl);
    }
  },
  mounted() {
    this.menuTree = JSON.parse(Cookies.get("menuTree"));
  }
};
</script>

<style lang="scss" scoped>
.sidebar-menu {
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: 999;
}
.sidebar-menu .logo {
  position: absolute;
  top: 0px;
  height: 60px;
  line-height: 60px;
  background: #FFF;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 10;
  text-align: center;
  font-size: 22px;
}
.sidebar-menu .menu-var {
  width: 256px;
}
.sidebar-menu .div-menu {
  position: absolute;
  top: 60px;
  bottom: 0px;
  text-align: left;
  border-right: 1px solid #ccc;
}
.div-menu .ant-menu-inline {
  border-right-color: transparent;
}
</style>