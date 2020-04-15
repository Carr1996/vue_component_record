<template>
  <div>
    <el-menu :default-active="this.$router.path" class="menu" router>
      <el-submenu v-for="i in routes.filter(i => {return i.children && i.name})" :key="i.path" :index="i.path">
        <template slot="title">
          <i :class="i.icon"></i>
          <span>{{i.name}}</span>
        </template>
        <el-menu-item v-for="j in i['children']" v-show="j.name" :key="i.path+'/'+j.path" :index="i.path+'/'+j.path" :disabled="j.disabled">{{j.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-for="i in routes.filter(i => {return !i.children && i.name})" :key="i.path" :index="i.path" :disabled="i.disabled">
        <i :class="i.icon"></i>
        <span slot="title">{{i.name}}</span>
      </el-menu-item>
    </el-menu>
    
  </div>
</template>

<script>
import routes from '../router/routes'
export default {
  name: "basicMenu",
  components: {},
  data() {
    return {
      routes
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
