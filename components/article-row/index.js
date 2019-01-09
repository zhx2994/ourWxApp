Component({
    properties: {
        id: Number,
        program: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        image: {
            type: String,
            value: ''
        },
        click: {
            type: String,
            value: ''
        }
    },
    externalClasses: ['my-class'],
    data(){
        return {
            isActive:false
        }
    },
    methods:{
        addCart() {
            this.setData({isActive: !this.data.isActive})
        }
    }
})