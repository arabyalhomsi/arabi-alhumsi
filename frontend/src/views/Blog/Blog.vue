<template>
    <div class="Blog">
        <BlogPost
            v-for="post in posts"
            :key="post.id"
            :post="post"/>
    </div>
</template>

<script>
import getPosts from '../../graphql/getPosts.gql'
import BlogPost from './components/BlogPost'

export default {
    name: 'Blog',
    components: {
        BlogPost
    },
    apollo: {
        posts: getPosts
    },
}
</script>


<style lang="scss" src="./Blog.scss" scoped></style>
