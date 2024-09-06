export default {
    install(vue){
        console.log('插件执行了', vue)

        // 定义全局过滤器
        vue.filter('mySlice', function(value){
            return value.slice(0, 4)
        })

        // 定义全局指令
        vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
            }
        })

        // 定义混入
        vue.mixin({
            data(){
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 给Vue原型上添加一个方法(vm和vc就都能用了)
        vue.prototype.hello = function(){
            alert('你好啊')
        }
    }
}