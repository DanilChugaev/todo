<template>
  <div class="todos">
    название списка
    <br>
    id списка = {{ $route.params.id }}
    <br>
    сам список
  </div>
</template>

<script lang="ts">
export default {
  name: 'todos',
};
</script>

<style scoped lang="stylus">
  .todos
    --top-page-indent: 60px

    max-width: var(--content-max-width)
    width: var(--full-size)
    height: var(--full-size)
    margin: 0 auto
    padding-top: var(--top-page-indent)
</style>