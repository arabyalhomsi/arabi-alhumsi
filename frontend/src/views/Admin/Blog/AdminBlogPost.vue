<template>
    <div class="AdminBlogPost">

        <input
            type="text"
            v-model="post.title">

        <quill-editor v-model="post.content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
        </quill-editor>

        <input
            type="text"
            @change="handleDateChange()"
            v-model="post.pubDate">

        <button @click="save()">save</button>
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

import getPost from '@/graphql/getPost.gql'
import editPost from '@/graphql/editPost.gql'

export default {
    name: 'AdminBlogPost',
    components: {
        quillEditor
    },
    mounted () {
    },
    data() {
        return {
            editorOption: {

            },
            post: {
                title: '',
                content: '',
                pubDate: ''
            },
            postID: this.$route.params.id
        }
    },
    apollo: {
        post:{
            query: getPost,
            variables () {
                return {
                    id: this.postID
                }
            }
        }
    },
    methods: {
        handleDateChange() {

        },
        onEditorBlur(quill) {
            console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            console.log('editor ready!', quill)
        },
        async save() {
            const post = this.post

            let res = await this.$apollo.mutate({
                mutation: editPost,
                variables:{ 
                    id: this.postID,
                    title: post.title,
                    content: post.content,
                    pubDate: post.pubDate
                }
            })

            console.log(res)
        }
        // onEditorChange({ quill, html, text }) {
        //     console.log('editor change!', quill, html, text)
        // },
    }
}
</script>

<style lang="scss" src="./AdminBlogPost.scss" scoped></style>

