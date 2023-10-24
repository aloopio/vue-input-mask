export default {
    props: ['modelValue', 'format'],

    data(){
        return {
            focus: false
        };
    },

    computed: {
        val: {
            get(){
                if (this.focus) return this.modelValue;
                if (this.format) return this.format.replace(':value', this.$filters.comma(this.modelValue));
                
                return this.$filters.comma(this.modelValue);
            },

            set(val){
                this.$emit("update:modelValue", val.replaceAll(',', ''));
            }
        }
    }
}