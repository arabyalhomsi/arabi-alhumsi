<template>
    <div class="timeline__item">
      <h3 class="timeline__title">{{ this.title }}</h3>
      <p class="timeline__description">{{ this.content }}</p>
    </div>
</template>

<script>
export default {
  name: 'TimelineEntry',
  props: ['title', 'content']
}
</script>



<style lang="scss" src="./TimelineEntry.scss" scoped></style>
