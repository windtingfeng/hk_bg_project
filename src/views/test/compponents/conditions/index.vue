<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper__item"><span>昵称</span> <el-input /></div>
    <div class="conditions-wrapper__item"><span>昵称2</span> <el-input /></div>
    <div class="conditions-wrapper__item"><span>昵称3</span> <el-input /></div>
    <div class="conditions-wrapper__item"><span>昵称4</span> <el-input /></div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conditions-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
}
</style>
