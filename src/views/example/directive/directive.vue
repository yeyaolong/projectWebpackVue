<template>
  <div class="directive-content">
    <div class="VText" v-show="type === 'v-text'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VTextObj.message"></pre>
          展示内容:<div v-text="type"></div>
        </div>
        <div class="condition">
          <div>情况2</div>
          当前写法：<pre v-text="VTextObj.message2"></pre>
          展示内容:<div v-text="type">这段内容会被覆盖</div>
        </div>
        <div class="condition">
          <div>情况3</div>
          当前写法：<pre v-text="VTextObj.message3"></pre>
          展示内容:<div>当前展示的指令是: {{type}}</div>
        </div>
      </form>
      <div class="describe">
        <div class="title" v-text="VTextObj.describe.title"></div>
        <div class="value" v-text="VTextObj.describe.value"></div>
      </div>
    </div>
    <div class="VHtml" v-show="type === 'v-html'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VHtmlObj.message"></pre>
          展示内容:<div v-html="VHtmlObj.message"></div>
        </div>
        <div class="condition">
          <div>情况2</div>
          当前写法：<pre v-text="VHtmlObj.message21"></pre>
          展示内容:<div v-html="VHtmlObj.message22">这段内容会被覆盖</div>
        </div>
        <div class="condition">
          <div>情况3</div>
          展示内容:<div v-html="VHtmlObj.message21">v-html</div>
        </div>
      </form>
      <div class="describe">
        <div class="title" v-text="VHtmlObj.describe.title"></div>
        <div class="value" v-text="VHtmlObj.describe.value"></div>
      </div>
    </div>
    <div class="VShow" v-show="type === 'v-show'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VShowObj.message"></pre>
          展示内容:<div class="show-html-content" style="color: #ff0000;" v-show=true>使用v-show</div>
        </div>
        <div class="condition">
          <div>情况2</div>
          当前写法：<pre v-text="VShowObj.message2"></pre>
          展示内容:<div class="show-html-content" style="color: #ff0000;" v-show=false>使用v-show</div>
        </div>
      </form>
      <div class="describe">
        <div class="title" v-text="VShowObj.describe.title"></div>
        <div class="value" v-text="VShowObj.describe.value"></div>
      </div>
    </div>
    <div class="VIf" v-show="type === 'v-if'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VIfObj.message"></pre>
          展示内容:<div class="show-html-content" style="color: #ff0000;" v-if=true>使用v-if</div>
        </div>
        <div class="condition">
          <div>情况2</div>
          当前写法：<pre v-text="VIfObj.message2"></pre>
          展示内容:<div class="show-html-content" style="color: #ff0000;" v-if=false>使用v-if</div>
        </div>
        <div class="condition">
          <div>情况3</div>
          当前写法: <pre v-text="VIfObj.message3"></pre>
          展示内容:
          <div class="show-html-content" style="color: #ff0000;" v-if=false>使用v-if</div>
          <div class="show-html-content" style="color: #ff0000;" v-if=false>使用v-else-if</div>
          <div class="show-html-content" style="color: #ff0000;" v-else>使用v-else</div>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VIfObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VFor" v-show="type === 'v-for'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VForObj.message"></pre>
          展示内容:<span v-for="(item, index) of VForObj.array1" :key="index">{{item}} </span>
        </div>
        <div class="condition">
          <div>嵌套循环</div>
          当前写法：<pre v-text="VForObj.message2"></pre>
          展示内容:
            <div v-for="(item, index) of VForObj.array2">
              <label>{{item.name}}</label>
              <span>
                <span v-for="(item2, index2) of item.value" :key="index2">
                  {{item2}}
                </span>
              </span>
            </div>
        </div>
        <div class="condition">
          <div>数组改变</div>
          当前写法: <pre v-text="VForObj.message3"></pre>
          展示内容:
          <div>
            <span v-for="(item, index) of VForObj.array3" :key="index">{{item}} </span>
          </div>
          <el-button @click="pushArray">使用push新增</el-button>
          <el-button @click="addToArray">直接修改对象新增</el-button>
          <el-button @click="spliceArray('replace')">使用splice方法替换</el-button>
          <el-button @click="replaceArray">直接修改数组的值</el-button>
          <el-button @click="spliceArray('delete', 3)">删除第3项</el-button>
          <el-button @click="spliceArray('delete', 4)">删除第4项</el-button>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VForObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VOn" v-show="type === 'v-on'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VOnObj.message"></pre>
          展示内容:<el-button v-on:click="handleClick">点我1</el-button>
        </div>
        <div class="condition">
          <div>简写</div>
          当前写法：<pre v-text="VOnObj.message2"></pre>
          展示内容:<el-button @click="handleClick">点我2</el-button>
        </div>
        <div class="condition">
          <div>传参</div>
          当前写法: <pre v-text="VOnObj.message3"></pre>
          展示内容:<el-button @click="handleClick('点我3', $event)">点我3</el-button>
        </div>
        <div class="condition">
          <div>事件修饰符</div>
          当前写法: <pre v-text="VOnObj.message4"></pre>
          展示内容:<el-button @click.prevent="handleClick">点我4 取消默认事件</el-button>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VOnObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VBind" v-show="type === 'v-bind'">
      <form>
        <div class="condition">
          <div>绑定Class类</div>
          当前写法：<pre v-text="VBindObj.message"></pre>
          展示内容: <div class="v-bind-obj" v-bind:class="VBindObj.newClass ? 'new-class' : ''">绑定class类</div>
        </div>
        <div class="condition">
          <div>缩写</div>
          当前写法：<pre v-text="VBindObj.message2"></pre>
          展示内容: <div class="v-bind-obj" :class="VBindObj.newClass ? 'new-class' : ''">绑定class类</div>
        </div>
        <div class="condition">
          <div>绑定属性</div>
          当前写法：<pre v-text="VBindObj.message3"></pre>
          展示内容: <div :title="VBindObj.bindTitle" :data-name="VBindObj.name">绑定属性</div>
        </div>
        <div class="condition">
          <div>绑定样式</div>
          当前写法：<pre v-text="VBindObj.message4"></pre>
          展示内容:<div :style="VBindObj.bindStyle">绑定样式style</div>
        </div>
        <div class="condition">
          <div>给子组件传参</div>
          当前写法：<pre v-text="VBindObj.message5"></pre>
          展示内容:<child-component :currentId="VBindObj.currentId"></child-component>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VBindObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VModel" v-show="type === 'v-model'">
      <form>
        <div class="condition">
          <div>情况1 input</div>
          当前写法：<pre v-text="VModelObj.message"></pre>
          展示内容:
            <div>输入:<input v-model="VModelObj.value1" /></div><div>输出:{{VModelObj.value1}}</div>
        </div>
        <div class="condition">
          <div>情况2 select </div>
          当前写法：<pre v-text="VModelObj.message2"></pre>
          展示内容:
          <div>
            <select v-model="VModelObj.selectValue">
              <option v-for="(item, index) in VModelObj.selectArray" :value="item.value" :key="index">{{item.name}}</option>
            </select>
            <div>输出:{{VModelObj.selectValue}}</div>
          </div>
        </div>
        <div class="condition">
          <div>情况3 textarea</div>
          当前写法: <pre v-text="VModelObj.message3"></pre>
          展示内容:
          <div>输入:<textarea v-model="VModelObj.value2" /></div><div>输出:{{VModelObj.value2}}</div>
        </div>
        <div class="condition">
          <div>情况4 components</div>
          当前写法: <pre v-text="VModelObj.message4"></pre>
          展示内容:
          <div>输入:<child-component2 v-model="VModelObj.childComponent2Value"></child-component2></div>
          <div>输出{{VModelObj.childComponent2Value}}</div>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VModelObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VSlot" v-show="type === 'v-slot'">
      <form>
        <div class="condition">
          <div>2.6.0版本之前的插槽</div>
          当前写法：<pre v-text="VSlotObj.message"></pre>
          展示内容:
          <child-component3>
            <div slot="myHeader">这是我的头</div>
            <div slot="myBody">这是我的身体</div>
            <div slot="myFooter">这是我的脚</div>
          </child-component3>
        </div>
        <div class="condition">
          <div>2.6.0之后的版本 </div>
          当前写法：<pre v-text="VSlotObj.message2"></pre>
          展示内容:
          <div>
            <child-component3>
              <template v-slot="myHeader">
                <div>这是我的头</div>
              </template>
              <template v-slot="myBody">
                <div>这是我的身体</div>
              </template>
              <template v-slot="myHeader">
                <div>这是我的脚</div>
              </template>
            </child-component3>
          </div>
        </div>
        <div class="condition">
          <div>2.6.0之后的版本 </div>
          当前写法：<pre v-text="VSlotObj.message3"></pre>
          展示内容:
          <div>
            <child-component3>
              <template v-slot="myHeader">
                <div slot="myHeader">这是我的头</div>
              </template>
              <template v-slot="myBody">
                <div slot="myBody">这是我的身体</div>
              </template>
              <template v-slot="myHeader">
                <div slot="myFooter">这是我的脚</div>
              </template>
            </child-component3>
          </div>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VSlotObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VPre" v-show="type === 'v-pre'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VPreObj.message"></pre>
          展示内容:<div v-pre>{{VPreObj.value}}</div>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VPreObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VCloak" v-show="type === 'v-cloak'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VCloakObj.message"></pre>
          展示内容:
          <div id="test-v-cloak" v-cloak>{{VCloakObj.value}}</div>
          <!--<div id="test-v-cloak"></div>-->
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VCloakObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VOnce" v-show="type === 'v-once'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VOnceObj.message"></pre>
          展示内容:
          <div>
            <div><input v-model="VOnceObj.value"></div>
            <div v-once>{{VOnceObj.value}}</div>
          </div>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VCloakObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
    <div class="VCustomDirective" v-show="type === '自定义指令'">
      <form>
        <div class="condition">
          <div>情况1</div>
          当前写法：<pre v-text="VCustomDirectiveObj.message"></pre>
          展示内容: <el-button v-custom-directive="handleCustomDirective">点我执行自定义指令</el-button>
        </div>
      </form>
      <div class="describe" v-for="(item, index) of VCloakObj.describe" :key="index">
        <div class="title" v-text="item.title"></div>
        <div class="value" v-text="item.value"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ChildComponent from './childComponent'
import ChildComponent2 from './childComponent2'
import ChildComponent3 from './childComponent3'
import CustomDirective from './CustomDirective'
export default {
  name: 'directive',
  data () {
    return {
      type: '',
      VTextObj: {
        message: '<div v-text="type"></div>',
        message2: '<div v-text="type">这段内容会被覆盖</div>',
        message3: '<div>当前展示的指令是: {{type}}</div>',
        describe: {
          title: '详细',
          value: '更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。'
        }
      },
      VHtmlObj: {
        message: '<div class="show-html-content" style="color: #ff0000;">使用v-html</div>',
        message21: '<div v-html="VHtmlObj.message22">这段内容会被覆盖</div>',
        message22: '<div v-html="VHtmlObj.message22" style="color: #ff0000;">使用v-html</div>',
        describe: {
          title: '详细',
          value: '更新元素的 innerHTML 。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译(如情况3，请查看浏览器中情况3的DOM结构) 。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。'
        },
      },
      VShowObj: {
        message: '<div class="show-html-content" style="color: #ff0000;" v-show=true>使用v-show</div>',
        message2: '<div class="show-html-content" style="color: #ff0000;" v-show=false>使用v-show</div>',
        describe: {
          title: '用法',
          value: '根据表达式之真假值，切换元素的 display CSS 属性当条件变化时该指令触发过渡效果。'
        },
      },
      VIfObj: {
        message: '<div class="show-html-content" style="color: #ff0000;" v-if=true>使用v-if</div>',
        message2: '<div class="show-html-content" style="color: #ff0000;" v-if=false>使用v-if</div>',
        message3: '<div class="show-html-content" style="color: #ff0000;" v-if=false>使用v-if</div>\n' +
          '<div class="show-html-content" style="color: #ff0000;" v-if=false>使用v-else-if</div>\n' +
          '<div class="show-html-content" style="color: #ff0000;" v-else>使用v-else</div>',
        describe: [
          {
            title: '用法',
            value: '根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template> ，将提出它的内容作为条件块.当条件变化时该指令触发过渡效果。'
          },
          {
            title: '注意',
            value: '与v-show的区别在于v-show无论如何都会将内容渲染到页面上，但是是否展示会用display样式控制,而v-if在false的情况下，不会渲染到页面上'
          }
        ],
      },
      VForObj: {
        message: '<span v-for="(item, index) of VForObj.array1" :key="index">{{item}}</span>',
        message2: '<div v-for="(item, index) of VForObj.array2">\n' +
          '              <label>{{item.name}}</label>\n' +
          '              <span>\n' +
          '                <span v-for="(item2, index2) of item.value">\n' +
          '                  {{item2}}\n' +
          '                </span>\n' +
          '              </span>\n' +
          '            </div>',
        message3: '<span v-for="(item, index) of VForObj.array3" :key="index">{{item}} </span>',
        array1: ['0', '1', '2', '3', '4', '5', '6', '7'],
        array2: [
          {name: '你', value: ['0', '1', '2', '3', '4', '5', '6', '7']},
          {name: '我', value: ['0', '1', '2', '3', '4', '5', '6', '7']},
          {name: '它', value: ['0', '1', '2', '3', '4', '5', '6', '7']}
        ],
        array3: [],
        describe: [
          {
            title: '详细',
            value: `Vue重写了 ${['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].join(',')} 这几个数组方法。所以使用这7个方法改变数组能够被监听到。使用array3[length]=length这种方式无法被监听到的原因是Observer对象没有被加到这个数组项中`
          },
          {
            title: '注意事项',
            value: '在数组经常改变的情况下（长度变化、整个数组的替换），尽量不要使用:key="index" 因为:key是Vue用来标记v-for循环中的唯一值的，数组长度改变 会使index发生变化，导致一些不必要的问题。建议:key使用不可能重复/发生改变的值，例如:key=Math.random() + index'
          },
        ]


      },
      VOnObj: {
        message: '<el-button v-on:click="handleClick">点我1</el-button>',
        message2: '<el-button @click="handleClick">点我2</el-button>',
        message3: '<el-button @click="handleClick(params, $event)">点我3</el-button>' ,
        message4: '<el-button @click.prevent="handleClick">点我4</el-button>',
        describe: [
          {
            title: '用法',
            value: ''
          },
          {
            title: '注意',
            value: '与v-show的区别在于v-show无论如何都会将内容渲染到页面上，但是是否展示会用display样式控制,而v-if在false的情况下，不会渲染到页面上'
          }
        ],
      },
      VBindObj: {
        message: '<div class="v-bind-obj" v-bind:class="VBindObj.newClass ? \'new-class\' : \'\'">绑定class类</div>',
        message2: '<div class="v-bind-obj" :class="VBindObj.newClass ? \'new-class\' : \'\'">绑定class类</div>',
        message3: '<div :title="VBindObj.bindTitle" :data-name="VBindObj.name">绑定属性</div>',
        message4: '<div :style="VBindObj.bindStyle">绑定样式style</div>' ,
        message5: '<child-component :currentId="VBindObj.currentId"></child-component>',
        newClass: true,
        bindTitle: '绑定属性 title',
        name: '绑定属性 name',
        bindStyle: {color: '#ff0000', 'fontSize': '32px'},
        currentId: '12345',
        describe: [
          {
            title: '注意',
            value: '官网中的v-bind用法的修饰符.prop与.sync 的用法被移除后又在2.3.0+版本重新添加了回来，但是仍然不建议使用这种双向绑定，因为这种写法会带来维护上的难题。请使用$emit(\'functionName\', params)调用父组件方法的形式代替'
          }
        ],
      },
      VModelObj: {
        message: '<div>输入:<input v-model="VModelObj.value1" /></div><div>输出:{{VModelObj.value1}}</div>',
        message2: '<div>\n' +
          '            <select v-model="VModelObj.selectValue">\n' +
          '              <option v-for="(item, index) in VModelObj.selectArray" :value="item.value" :key="index">{{item.name}}</option>\n' +
          '            </select>\n' +
          '            <div>输出:{{VModelObj.selectValue}}</div>\n' +
          '          </div>',
        message3: ' <div>输入:<textarea v-model="VModelObj.value2" /></div><div>输出:{{VModelObj.value2}}</div>',
        message4: '<div>输入:<child-component2 v-model="VModelObj.childComponent2Value"></child-component2></div>\n' +
          '          <div>输出{{VModelObj.childComponent2Value}}</div>',
        value1: 'default message',
        value2: 'default textarea value',
        childComponent2Value: '',
        selectArray: [{name:'选项A', value:'A'},{name:'选项B', value:'B'}, {name:'选项C', value:'C'}],
        selectValue: '',
        describe: [
          {
            title: '注意',
            value: '自定义组件的v-model：https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model'
          }
        ],
      },
      VSlotObj: {
        message: '<child-component3>\n' +
        '            <div slot="myHeader">这是我的头</div>\n' +
        '            <div slot="myBody">这是我的身体</div>\n' +
        '            <div slot="myHeader">这是我的脚</div>\n' +
        '          </child-component3>',
        message2: '<div>\n' +
        '            <child-component3>\n' +
        '              <template v-slot="myHeader">\n' +
        '                <div>这是我的头</div>\n' +
        '              </template>\n' +
        '              <template v-slot="myBody">\n' +
        '                <div>这是我的身体</div>\n' +
        '              </template>\n' +
        '              <template v-slot="myHeader">\n' +
        '                <div>这是我的脚</div>\n' +
        '              </template>\n' +
        '            </child-component3>\n' +
        '          </div>',
        message3: '<div>\n' +
        '            <child-component3>\n' +
        '              <template v-slot="myHeader">\n' +
        '                <div slot="myHeader">这是我的头</div>\n' +
        '              </template>\n' +
        '              <template v-slot="myBody">\n' +
        '                <div slot="myBody">这是我的身体</div>\n' +
        '              </template>\n' +
        '              <template v-slot="myHeader">\n' +
        '                <div slot="myFooter">这是我的脚</div>\n' +
        '              </template>\n' +
        '            </child-component3>\n' +
        '          </div>',
        describe: [
          {
            title: '参数',
            value: '插槽名 (可选，默认值是 default)'
          },
          {
            title: '注意',
            value: 'v-slot是vue 2.6.0版本后新增的。并且v-slot只能用在<template>或者组件上.'
          },
        ],
      },
      VPreObj: {
        message: '<div v-cloak>这段内容在编译完成前是红色，编译完成后是黑色</div>',
        value: 'this is v-pre value and won\'t be compile',
        describe: [
          {
            title: '用法',
            value: '被标注的内容不会被编译，用来提升渲染效率'
          }
        ],
      },
      VCloakObj: {
        message: '<div v-cloak>{{VCloakObj.value}}</div>',
        value: '这段内容在编译完成前不会显示 \'{{VCloakObj.value}}\'',
        describe: [
          {
            title: '用法',
            value: '这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。'
          },
          {
            title: '解释',
            value: '防止页面加载时出现 vuejs 的变量名'
          }
        ],
      },
      VOnceObj: {
        message: '<div>\n' +
        '            <div><input v-model="VOnceObj.value"></div>\n' +
        '            <div v-once>{{VOnceObj.value}}</div>\n' +
        '          </div>',
        value: '这段内容只渲染一次，不会再重新渲染了',
        describe: [
          {
            title: '详细',
            value: '只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。'
          }
        ],
      },
      VCustomDirectiveObj: {
        message: '<div>\n' +
        '            <div><input v-model="VOnceObj.value"></div>\n' +
        '            <div v-once>{{VOnceObj.value}}</div>\n' +
        '          </div>',
        value: '这段内容只渲染一次，不会再重新渲染了',
        describe: [
          {
            title: '详细',
            value: '只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。'
          }
        ],
      }
    }
  },
  directives: {
    CustomDirective
  },
  methods: {
    pushArray () {
      // Vue重写了数组的push方法，这种写法导致的数组改变能够被监听到
      let length = this.VForObj.array3.length
      this.VForObj.array3.push(length)
      console.log('this.VForObj.array3', this.VForObj.array3)
    },
    addToArray () {
      // 这种直接修改数组的方法无法被监听
      let length = this.VForObj.array3.length
      this.VForObj.array3[length] = length
      console.log('this.VForObj.array3', this.VForObj.array3)
    },
    spliceArray (type, index) {
      let length = this.VForObj.array3.length
      if (length > 0) {
        if (type === 'replace') {
          this.VForObj.array3.splice(0, 1, type)
        } else {
          if ((length -1 )> index)
          this.VForObj.array3.splice(index, 1)
        }
      }
      console.log('this.VForObj.array3', this.VForObj.array3)
    },
    replaceArray () {
      let length = this.VForObj.array3.length
      // 同样的，直接替换无法被监听到，因为没有Observer对象。
      if (length > 0) {
        this.VForObj.array3[length - 1] = 'replace' + (length-1)
      }
      console.log('this.VForObj.array3', this.VForObj.array3)
    },
    handleClick (params, event) {
      // 如果调用时，没有传参，那么第一个参数默认 是 event.
      // 如果有传参，则按传参来
      console.log('触发点击事件', params)
      console.log('event', event)
    },
    handleCustomDirective () {
      console.log('执行自定义指令')
    }
  },
  watch: {
    $route (newVal, oldVal) {
      this.type = this.$router.currentRoute.params.type
    },
    'VModelObj.childComponent2Value' (newVal, oldVal) {
      console.log('directive 组件 VModelObj.childComponent2Value', this.VModelObj.childComponent2Value)
    }
  },
  components: {
    ChildComponent,
    ChildComponent2,
    ChildComponent3
  },
  mounted () {
    this.type = this.$router.currentRoute.params.type
    // setTimeout(() => {
    //   new Vue({
    //     template: '<div v-cloak>{{value}}{{for (let i = 0; i < 100; i++){ console.log(i) }}</div>',
    //     data () {
    //       return {
    //         value: '这段内容在编译完成前是红色，编译完成后是黑色'
    //       }
    //     }
    //   }).$mount('#test-v-cloak')
    // },2000)

  }

}

</script>

<style scoped>
  .condition {
    border: 2px solid #000000;
    padding: 5px;
    margin: 5px;
  }

  .describe .title {
    font-size: 32px;
    font-weight: bolder;
  }
  .describe .value {
    font-size: 18px;
  }

  .new-class {
    color: #ff0000;
  }

  [v-cloak] {
    display: none;
  }
</style>
