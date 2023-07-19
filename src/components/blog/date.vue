<template>
    <time :datetime="date.toISOString()">
        {{
            date.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })
        }}
    </time>
</template>

<script lang="ts">
import * as Vue from 'vue';
import consts from '../../consts/index';

export default Vue.defineComponent({
    props: {
        date: consts.vue.mandatory.date,
    },
});
</script>
