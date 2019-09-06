<template>
  <!-- 适用于系统右侧弹框，显示通知消息列表，未完全完成 -->
  <div class="">
    <transition name="slide-fade">
      <div class="message"
        v-show="show">
        <div
          class="clear"
          @click=" show = !show ">
          <i class="el-icon-close"></i>
        </div>
        <div class="message_title">
          <p>消息列表</p>
        </div>
        <ul>
          <li>
            <p>预警列表：</p>
            <div class="items">
              <div
                class="item"
                v-for="(item, index) in alertData"
                :key="index">
                <i class="el-icon-warning"></i>
                <el-tooltip
                  effect="dark"
                  :content="item.name"
                  placement="left">
                  <div class="text">{{ item.name }}</div>
                </el-tooltip>
              </div>
            </div>
          </li>
          <li>
            <p>状态列表：</p>
            <div class="items">
              <div
                class="status"
                v-for="(item, index) in alertData"
                :key="index">
                <el-tooltip
                  effect="dark"
                  :content="item.name"
                  placement="left">
                  <div
                    class="text">
                    {{ item.name }}
                  </div>
                </el-tooltip>
                <div
                  class="stausText">
                  <div
                    class="statusIcon"
                    :style="{ background: item.id === 1 ? upColor : downColor }">
                  </div>
                  {{ item.id === 1 ? '开机' : '关机'}}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="slide-fade">
      <div
        class="message_button"
        @click=" show = !show "
        v-show="!show">
        <i
          class="el-icon-collection-tag">
        </i>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      upColor: '#29BF8E',
      downColor: '#E6394E',
      alertData: [
        { name: '十三盘区运输机-1号电机温度过高', id: 1 },
        { name: '十三盘区运输机-1号电机温度过高', id: 2 },
        { name: '十三盘区运输机-1号电机温度过高', id: 1 },
        { name: '十三盘区运输机-1号电机温度过高', id: 1 }
      ]
    }
  },
  mounted () {
    this.show = true
  }
}
</script>
<style lang="scss" scoped>
.message {
  width: 320px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  .message_title {
    height: 50px;
    text-align: left;
    line-height: 50px;
    p {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      padding-left: 20px;
      font-weight: 500;
      letter-spacing: 0.86px;
    }
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    li {
      flex:1;
      height: 50%;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      p {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
      }
      .items {
        overflow-y: auto;
        height: 100%;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        letter-spacing: 0.67px;
        .status {
          display: flex;
          justify-content: space-between;
          width: 288px;
          height: 38px;
          line-height: 38px;
          margin-left: 10px;
          margin-top: 5px;
          .text {
            width: 180px;
            overflow: hidden;/*超出部分隐藏*/
            text-overflow:ellipsis;/* 超出部分显示省略号 */
            white-space: nowrap;/*规定段落中的文本不进行换行 */
          }
          .stausText {
            width: 50px;
            font-family: PingFangSC-Regular;
            align-items: center;
            display: flex;
            justify-content: space-between;
            .statusIcon {
              width: 10px;
              height: 10px;
              border-radius: 10px;
            }
          }
        }
        .item {
          display: flex;
          width: 288px;
          height: 48px;
          line-height: 48px;
          margin-left: 10px;
          margin-top: 10px;
          i {
            width: 20px;
            font-size: 18px;
            line-height: 48px;
            margin-right: 10px;
            padding-left: 10px;
          }
          .text {
            width: 230px;
            overflow: hidden;/*超出部分隐藏*/
            text-overflow:ellipsis;/* 超出部分显示省略号 */
            white-space: nowrap;/*规定段落中的文本不进行换行 */
          }
        }
      }
    }
  }
  .clear {
    width: 42px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: -42px;
    //background-color: aqua;
    border-radius: 2px 0 0 2px;
    text-align: center;
    i {
      font-size: 28px;
      line-height: 40px;
      cursor: pointer;
    }
  }
}
.message_button {
  width: 42px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 0;
  border-radius: 2px 0 0 2px;
  text-align: center;
  i {
    font-size: 28px;
    line-height: 40px;
    cursor: pointer;
  }
}
.slide-fade-enter-active {
  transition: all 1s;
}
.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(320px);
  opacity: 0;
}
</style>
<style lang="scss">
.message {
  background: #FFFFFF;
  box-shadow: -2px 0 12px 0 rgba(0,0,0,0.20);
  ul {
    li:first-child {
      border-bottom: 1px solid #e9e9e9;
      .items {
        color: #666666;
        .item {
          background: rgba(213,0,0,0.10);
          i {
            color: #D50000;
          }
        }
      }
    }
  }
  .clear {
    background: #3D54CD;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.50);
    i {
      color: #FFFFFF;
    }
  }
  .message_title {
    border-bottom: 1px solid #e9e9e9;
    p {
      color: #333333;
    }
  }
}
.message_button {
  background: #3D54CD;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.50);
  i {
    color: #FFFFFF;
  }
}
</style>
