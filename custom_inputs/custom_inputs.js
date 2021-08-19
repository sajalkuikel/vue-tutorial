Vue.component('coupon' , {
    props : [
        'value'
    ],

    template : `
        <!-- same as v-model-->
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input" > 
    `,
    data () {
        return {
            invalids: ['NOTSAJAL', 'HEYY']
        }
    },
    methods: {
        updateCode(code){
            // checks for the invalid codes in invalids attribute.
            if ( this.invalids.includes(code) ){
                alert(" coupon is invalid ");

                //clears the input field and the code attribute.
                this.$refs.input.value = code = '';
            }


            this.$emit('input', code);
        }
    }

});

new Vue({
    el : '#root',

    data : {
        //no value initially.
        coupon: ''
    }

});
