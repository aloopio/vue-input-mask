<style lang="scss" src="./style.scss" scoped></style>
<script src="./script"></script>
<template>
  <input type="text" v-model="val" @focus="focus = true" @blur="focus = false"/>
</template>