<template>
    <div :id="nameFormatted" class="fig">
        <div class="img">
            <!--<a :href="src" target="_blank"><img :src="src" :alt="nameFormatted" :style="{ 'max-width': maxWidth + 'px' }" /></a>-->
            <img :src="src" :alt="nameFormatted" :style="{ 'max-width': maxWidth + 'px' }" />
        </div>
        <span class="caption"><span class="fig-text">{{ name }}</span> {{ caption }}<slot /></span>
    </div>
</template>
<script>

export default {
    props: {
        name: String,
        src: String,
        caption: String,
        maxWidth: {type: Number, default: 510},
    },
    data: () => ({
        //  
    }),
    computed: {
        nameFormatted() {
            return this.name.toLowerCase().replace(/ /g, '-')
        }
    }
}
</script>