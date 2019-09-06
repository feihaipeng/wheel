<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
          <div v-for="(item, index) in navList" :key="index">
            <el-submenu
              :index="item.index"
              @click="abc"
              v-if="item.children"
              >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                :index="item.index"
                @click="abc"
                v-for="(item, index) in item.children"
                :key="index">
                {{ item.name }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item
              :index="item.index"
              v-if="!item.children">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
           </div>
        </el-menu>
      </el-col>
  </el-row>
  </div>
</template>

<script>
import navList from './nav.json'
export default {
  data () {
    return {
      navList: []
    }
  },
  mounted () {
    this.navList = navList.navList
    console.log(navList.navList)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    abc () {
      console.log('-----------')
    }
  }
}
</script>
