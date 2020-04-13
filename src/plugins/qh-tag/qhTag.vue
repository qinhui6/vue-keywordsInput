<template>
    <div :class="classes" :style="`backgroundColor:${color}`">
    <span @click="handleClick" :title="text">
    {{text}}</span>
    <i class="iconfont iconguanbi" @click="handleClose"></i>
    </div>
</template>
<script>
import '@assets/iconfont/iconfont.css'
import '@assets/iconfont/iconfont.js'
export default {
    name:'qh-tag',
    data(){
        return {
            classes: []
        }
    },
    props:{
        text:String,
        closable:Boolean,
        type:String,
        hit:Boolean,
        color:String,
        size:String,
        effect:{
            type:String,
            default:'light',
            validator(val){
                return ['dark', 'light', 'plain'].indexOf(val) !== -1
            }
        }
    },
    methods:{
        handleClose(event){
            event.stopPropagation();
            this.$emit('close',event);
        },
        handleClick(event){
            this.$emit('click',event);
        }
    },computed:{
        tagSize() {
            return this.size || (this.$VUEQH || {}).size;
        },
               
    },
    mounted(){
        const {type,tagSize,hit,effect} = this
        this.classes = ['qh-tag',
                type ? `qh-tag--${type}` : '',
                tagSize ? `qh-tag--${tagSize}` : '',
                effect ? `qh-tag--${effect}` : '',
                hit && 'is-hit'
            ];
        
    }
}
</script>
<style scoped>
.qh-tag {
    display: inline-block;
    border: 1px solid rgb(198, 226, 255);
    background-color: rgb(232, 245, 255);
    border-radius: 3px;    
    margin:2px 3px;
    padding: 3px;
    font-size: 12px;   
    color: #409EFF;
}
.qh-tag:hover {
    border: 1px solid rgb(198, 226, 255);
    background-color: rgb(217, 236, 255);
 
}
.qh-tag > span{
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
}
.iconfont {
    font-size: 12px;
}
.iconguanbi{
    cursor: pointer;
    vertical-align: middle;
}
</style>




