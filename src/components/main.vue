<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" class="menu">
      <Menu :active-name="activeName" theme="dark" width="auto" :open-names="openNames">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>菜单一
          </template>
          <MenuItem name="1-1" to="/main">one</MenuItem>
          <MenuItem name="1-2" to="/main/b">two</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header
        :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"
        class="justify-between items-center"
      >
        <span class="header_name">后台管理系统</span>
        <Button @click.stop="$goto('/')">退出</Button>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem to="/main">首页</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 700px">
            <router-view></router-view>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {
      vm.activeName = vm.$route.meta.activeName;
      vm.openNames = vm.$route.meta.openNames;
    });
  },
  name: "home",
  data() {
    return {
      activeName: "1-1",
      openNames: ["1"]
    };
  },
  watch: {
    ["$route"](n, o) {
      this.activeName = n.meta.activeName;
      this.openNames = n.meta.openNames;
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.header_name {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
  background: #000c17;
}
.menu >>> .ivu-menu-dark {
  background: #001529;
}
.ivu-layout-sider {
  background: #001529;
}
.menu >>> .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
  background: #001529;
}
.menu >>> .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  background: #001529;
  color: #fff;
}
</style>