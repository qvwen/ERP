<template>
  <el-container style="height:100vh">
    <!--    height="50%"
    v-loading="flas"
    element-loading-text="努力加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"-->
    <el-header>
      <!-- Aside content -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-menu-item>

        <!-- disabled -->
        <el-menu-item
          v-for="(temp,index) in this.$store.state.user.role.jurisdiction"
          :index="index"
          @click="atpresents(temp.jurisdiction)"
          v-bind:key="(temp,index)"
        >
          <i :class="temp.icon"></i>
          {{temp.name}}
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document el-icon-left"></i>我的工作台
          </template>

          <el-menu-item index="2-1">
            <i class="el-icon-chat-dot-round"></i>消息中心
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-key"></i>修改密码
          </el-menu-item>
          <el-menu-item index="2-3">
            <i class="el-icon-lock"></i>锁屏
          </el-menu-item>
          <el-menu-item index="2-4">
            <i class="el-icon-switch-button"></i>注销
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside height="30%">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu
            width="400"
            v-for="(temp,index) in atpresent"
            :index="index"
            v-bind:key="(temp,index)"
          >
            <template slot="title">
              <i class="el-icon-folder-checked"></i>
              <span slot="title">{{temp.name}}</span>
            </template>
            <el-menu-item
              v-for="(temp1,index1) in temp.jurisdiction"
              :index="index+'-'+index1"
              @click="addTab('dull','stock')"
              v-bind:key="(temp1,index1)"
            >{{temp1.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <!-- Main content -->
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            <router-view :name="item.content" />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <el-footer width="200px">
      <!-- Aside content -->
      底部
    </el-footer>
  </el-container>
</template>

<style>
.el-icon-left {
  margin-bottom: 3px;
  margin-right: 6px;
}
.el-menu-vertical-demo {
  margin-left: 30px;
}
.el-radio-group {
  margin-left: 30px;
  margin-top: 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 290px;
  min-height: 600px;
}
.el-container {
  background-colo: #fff;
}
.el-main {
  background-color: #fff;
}
.el-footer {
  background-color: black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
 <script>
import $ from "jquery";
export default {
  data() {
    return {
      atpresent: [],
      editableTabsValue: "2",
      editableTabs: [],
      tabIndex: 2,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      isCollapse: false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addTab(targetName, name) {
      let _this = this;
      let boo = true;
      $.each(_this.editableTabs, function(i, obj) {
        if (obj.content == targetName) {
          _this.editableTabsValue = obj.name;
          boo = false;
        }
      });
      if (boo) {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: name,
          name: newTabName,
          content: targetName
        });
        this.editableTabsValue = newTabName;
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    atpresents(obj) {
      this.atpresent = obj;
    }
  }
};
</script>