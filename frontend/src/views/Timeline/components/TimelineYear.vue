<template>
      <h2 class="timeline__item timeline__item--year">{{ this.date }}</h2>    
</template>

<script>
export default {
    name: 'TimelineYear',
    props: ['date'],
    computed: {
    }
}
</script>


<style lang="scss" src="./TimelineYear.scss" scoped></style>
