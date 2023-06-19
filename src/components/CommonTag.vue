<template>
    <div class="tags">
        <el-tag
            v-for="item in tags"
            :key="item.path"
            :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'Plain'"
        >
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "CommonTag",
    data() {
        return {};
    },
    computed: {
        ...mapState({
            tags: (state) => state.tab.tabList,
        }),
    },
};
</script>

<style>
</style>