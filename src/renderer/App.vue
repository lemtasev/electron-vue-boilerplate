<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-boilerplate'
  }
</script>

<style lang="less">
    @import 'common.less';

    /* CSS */
    body {
        margin: 0;
        user-select: none;
        font-size: @fontSizeTiny;
        color: @fontColorBlack;
        font-family: "MicrosoftYaHei";
    }

    #app {
        height: 100vh;
    }

    .down {
        transform: rotate(180deg);
    }

    .rotate90 {
        transform: rotate(90deg);
    }

    .border-top-none {
        border-top: 0 !important;
    }

    .border-none {
        border: none !important;
    }

    .help-info {
        padding: 20px;
        color: #777;
        font-size: 20px;
    }

    .t-indent-2 {
        text-indent: 2em;
    }

    .visibility-hidden {
        visibility: hidden !important;
    }

    .visibility-visible {
        visibility: visible !important;
    }

    .pd-0 {
        padding: 0 !important;
    }

    .ml-5 {
        margin-left: 5px !important;
    }

    .ml-10 {
        margin-left: 10px !important;
    }

    .ml-20 {
        margin-left: 20px !important;
    }

    .mt-10 {
        margin-top: 10px !important;
    }

    .mt-20 {
        margin-top: 20px !important;
    }

    .mt-40 {
        margin-top: 40px !important;
    }

    .mt-80 {
        margin-top: 80px !important;
    }

    .mr-10 {
        margin-right: 10px !important;
    }

    .jc-c {
        justify-content: center !important;
    }

    .jc-fe {
        justify-content: flex-end !important;
    }

    .jc-sa {
        justify-content: space-around !important;
    }

    .jc-sb {
        justify-content: space-between !important;
    }

    .jc-se {
        justify-content: space-evenly !important;
    }

    .font-weight-lighter {
        font-weight: lighter !important;
    }

    .font-weight-bold {
        font-weight: bold !important;
    }

    .font-size-32 {
        font-size: @fontSize32 !important;
    }

    .font-size-28 {
        font-size: @fontSize28 !important;
    }

    .font-size-big {
        font-size: @fontSizeBig !important;
    }

    .font-size-normal {
        font-size: @fontSizeNormal !important;
    }

    .font-size-small {
        font-size: @fontSizeSmall !important;
    }

    .font-size-tiny {
        font-size: @fontSizeTiny !important;
    }

    /*==========自定义element UI样式==========*/
    .el-drawer {
        outline: 0 !important;
    }

    .setting-drawer > section {
        height: 100%;
    }

    /*==========自定义element UI样式==========*/
</style>
