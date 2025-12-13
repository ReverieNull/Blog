---
outline: deep
---

# Vue

## 引入Vue
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
```

### 具体结构
``` 页面结构

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">

    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>

    <script>
    </script>
</body>
</html>
```
## 插值表达式
 <pre> 
 插值表达是Vue的模板语法
 </pre>
``` 插值表达式案例
    <div id="app">
        {{ msg}} 
        他是{{ age >= 18 ? '成年' : '未成年'}}
    </div>
```
 <pre>作用：利用表达式进行插值，渲染到页面中</pre>
 <pre>表达式： 可求值的代码，JS引擎将其计算并得出结果</pre>
 <pre>注意点：</pre>
 <pre>1.使用的数据必须存在
2.支持的是表达式而不是语句，类似if或者for之类
3.不能在标签属性中使用 {{}} 插值，例如 </pre>

```
<p title="{{username}}"></p>
```

## 响应式特性
<pre>
 Vue的核心特性就是响应式，即数据变化时，视图自动更新

 例如我们创造一个实例叫做data，其中有属性是name，data.name = '张三'
 访问数据  data.name
 修改数据  data.name = '李四'</pre>


## Vue开发者工具

## Vue 指令
<pre>
Vue会根据不同指令针对标签实现不同功能
 常用指令:
 v-html/v-show/v-if/v-else/v-on/v-bind/v-for/v-model</pre>


### v-html 可以动态设置元素 innnerHTML
``` v-html
<!-- Vue指令： v- 前缀的标签属性-->
<div v-html='str'> </div>
```

### v-show  v-if
<pre>
v-show
1.作用；控制元素显示隐藏
2.使用： v-show = "表达式"
3.原理：切换 dispaly:none
4.场景：频繁切换显示隐藏
</pre>

<pre>
v-if
1.作用；控制元素显示隐藏(条件渲染)
2.使用： v-if = "表达式"
3.原理: 基于条件判断，是否创建或移除元素节点
4.场景：要么显示，要么隐藏，不频繁切换的场景
</pre>

### v-else / v-else-if
<pre>
v-else
1.作用；辅助v-if进行判断渲染
2.使用： v-else v-else-if = "表达式"
3.注意： 需要紧挨v-if使用

</pre>

### v-on
<pre>
v-on
1.作用；注册事件 = 添加监听及提供处理逻辑
2.使用： 
    v-on: 事件名="内联语句"  
    v-on: 事件名="methods中的函数名"
3.简写: @事件名
4.methods中函数内的this指向vue实例
</pre>
```
<button v-on:click="count++">按钮</button>
<button @click="count++">按钮</button>

```
```v-on 调用传参
 const app = new Vue({
            el:'#app',
            methods:{
                fn(){
                    console.log('这是一个fn函数')
                }
            }
 })
```
## 注意事项
<pre>在methods，computed，watch灯选项的函数中
    必须用 this.属性名访问data里面的变量
    只有在模板指令中，才能直接写属性名
 </pre>

### v-bind
<pre>
1.作用：动态设置html的标签属性，例如src url title
2.语法：v-bind:属性名="表达式"
3.注意：简写为  :属性名="表达式"
</pre>

### v-for
<pre>
1. 基于数据循环，多次渲染整个元素，包括数组，对象，数字之类
2. 遍历数组语法:
    v-for = "(item,index) in 数组"
    item 是每一项，index下标
</pre>
```案例
        <p v-for="(book,index) in booksList" :key=""book.id>· {{book.name}} {{book.author}}
            <button @click="deleteBook(book.id)">删除</button>
        </p> 
    
     booksList:[
                    {id:1,name:"《红楼梦》",author:"曹雪芹"},
                    {id:2,name:"《西游记》",author:"吴承恩"},
                    {id:3,name:"《水浒传》",author:"施耐庵"},
                    {id:4,name:"《三国演义》",author:"罗贯中"},
                ]
```

#### 基本渲染 v-for/ 删除功能 filter
``` 删除方法
        <div> 小黑的书架</div>
        <p v-for="(book,index) in booksList" :key=""book.id>· {{book.name}} {{book.author}}
            <button @click="deleteBook(book.id)">删除</button>
        </p> 
        // 这里为每个渲染出的元素绑定了key ，也就是book.id
        //然后将其传入click，由methods方法删除，不要忘了methods中的数据要加this
  deleteBook(bookId){
                    this.booksList = this.booksList.filter(book =>book.id !== bookId)
                }
```
<pre>
key作用：
    给元素添加唯一标识，用于vue进行列表项的正确排序复用
注意点：
1.key值只能是字符串或数字类型
2.key的值必须具有唯一性
3.推荐用id 作为key，而不是index，因为index会变化，不对应
</pre>

### v-model
<pre>
1.作用： 给表单元素使用，双向数据绑定，可以快速获取或者设置表单元素内容
  数据变化-》视图自动更新
  视图变化-》数据自动更新
2.语法： v-model="变量"
</pre>

### 指令修饰符

<pre>
1.按键修饰符
    @keyup.enter    键盘回车监听
2.v-model修饰符
    v-model.trim  去除首尾空格
    v-model.number  转数字
3.事件修饰符
    @事件名.stop  阻止冒泡
    @事件名.prevent  阻止默认行为
</pre>

### 指令补充 v-bind
<pre>
为了方便开发者进行样式控制，vue扩展了v-bind的语法
可以针对class类名和style行内样式进行控制
操作class 
对象：
    :class ="{类名1:布尔值，类名2:布尔值}"  为true就是有这个类
    适用类型是一个类名来回切换
数组：
    :class="[类名1,类名2,类名3]"
    使用场景是批量添加或删除类
</pre>


## 案例：京东秒杀tab导航高亮
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        <style>
        /* 给根容器加class（原id是app，建议统一用class，也可以用#app） */
        #app {
            box-sizing: border-box;
            display: flex;
            /* 可选：让子元素横向排列并换行，避免溢出 */
            flex-direction: row;
            flex-wrap: wrap;
            /* 可选：子元素之间加间距 */
            gap: 20px;
            /* 可选：内边距，让内容不贴边 */
            padding: 10px;
        }
        .box {
            box-sizing: border-box; /* 关键：边框不撑大盒子 */
            display: flex;
            /* 核心：红色下边框（可调整宽度/样式） */
            border-bottom: 2px solid red;
            /* 可选：内边距，让文字和边框有间距 */
            padding: 8px 12px;
            /* 可选：垂直居中文字（flex特性） */
            align-items: center;
        }
        .box.active {
            border-bottom: 2px solid red;
            color: red;
            font-weight: bold; /* 可选：高亮时文字加粗 */
        }
    </style>
</head>

<body>
    <div id="app" >
        <div 
        class="box"
        :key="item.id"  //绑定id
        :class="{active: activeTabId === item.id}" //高亮对应id的盒子 
        v-for="item of lists" //循环
        @click="activeTabId = item.id" //点击事件，被点击后将该盒id设为高亮id
         >{{item.name}}</div>





    </div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data:{
            lists:[
                {id:1,name:'京东秒杀'},
                {id:2,name:'每日特价'},
                {id:3,name:'品类秒杀'}
            ],
            activeTabId:1,

        },    
    
    })
      </script>
</body>
</html>
```

### v-model应用于其他表单元素
<pre>
常见表单元素可用v-model绑定关联
可以快速获取或者设置表单元素的值
其会根据控件类型自动选取正确方法来更新元素
</pre>
 
Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
