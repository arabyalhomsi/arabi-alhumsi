<template>
    <div class="BlogPost">
        <h1>{{ post.title }}</h1>
        <span>{{ computedPubDate }}</span>
        <p v-html="post.content"></p>
    </div>
</template>

<script>
export default {
    name: 'BlogPost',
    props: ['post'],
    computed: {
        computedPubDate() {
            return this.readableDate(this.post.pubDate)
        }
    },
    created () {

        console.log(this.$route)
    }
}
</script>

<style lang="scss" src="./BlogPost.scss" scoped></style>

