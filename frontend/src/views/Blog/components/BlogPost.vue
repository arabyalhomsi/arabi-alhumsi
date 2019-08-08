<template>
    <div class="BlogPost">
        <h1>{{ post.title }}</h1>
        <span>{{ computedPubDate }}</span>
        <p>{{ post.content }}</p>
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
    }
}
</script>

<style lang="scss" src="./BlogPost.scss" scoped></style>

