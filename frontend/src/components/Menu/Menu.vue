<template>
    <div>
        <router-link
            v-for="(value, name) in this.SettingPoints.menu_items"
            v-bind:key="name"
            :to="value"
            >{{name}} | </router-link>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    created () {
    }    
}
</script>

