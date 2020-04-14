<template>
  <div>
    <el-menu default-active="1" class="menu" @select="handleSelect">
      <el-submenu v-for="i in menuList" :key="i.index" :index="i.index">
        <template slot="title">
          <i :class="i.icon"></i>
          <span>{{i.name}}</span>
        </template>
        <el-menu-item v-for="j in i['children']" :key="j.index" :index="j.index">{{j.name}}</el-menu-item>
      </el-submenu>

      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">canvas</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import menuList from './menuConfig.js'
export default {
  name: "basicMenu",
  components: {},
  data() {
    return {
      menuList
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      let levelIndex = keyPath[0];
      let levelItem = this.menuList.filter(i=> {
        return i.index == levelIndex
      })
      let item = {}
      if(levelItem[0].children) {
        item = levelItem[0].children.filter(i => {
          return i.index == keyPath[1]
        })
      } else {
        item = levelItem
      }
      this.$emit('selectItem',item[0])
    }
  }
};
</script>

<style scoped>
.menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
