<template>
    <div v-katex:display="this.latex" :alt="this.name"></div>
</template>
<script>

import { getEquations } from './../equations'

export default {

    props: {
        name: String,
        label: String,
        units: String,
    },
    data: () => ({
        
    }),
    methods: {
        test: () => {
            alert('test')
        }
    },
    computed: {
        equation() { return getEquations()[this.name] },
        latex() {
            // If equation is null, return empty string
            // If label is null, return equation without label
            // If units is not null, return equation with units
            if (this.equation == null)
                return String.raw``

            let tag = (this.label != null) ? String.raw`\tag{${this.label}}` : String.raw``
            let equation = (this.units != null) ? this.equation[this.units] : this.equation

            return String.raw`${tag}${equation}`
        },
    },
    created() {
        //
    }
}
</script>