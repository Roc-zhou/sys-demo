<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>菜单一
          </template>
          <MenuItem name="1-1" to="/">one</MenuItem>
          <MenuItem name="1-2" to="/b">two</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>菜单二
          </template>
          <MenuItem name="2-1">one</MenuItem>
          <MenuItem name="2-2">two</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header
        :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"
        class="justify-end items-center"
      >
        <Button>退出</Button>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
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
export default {};
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
</style>