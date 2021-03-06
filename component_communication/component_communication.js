Vue.component('coupon' , {
    template: '<input type="text" placeholder="Enter you coupon code." @blur="onCouponApplied">',
    methods: {
        onCouponApplied(){
            this.$emit('applied');
        }
    }
});

new Vue({
    el : '#root',

    data: {
        couponApplied : false
    },

    methods: {
        onCouponApplied(){
           this.couponApplied = true;
        }
    }

});
