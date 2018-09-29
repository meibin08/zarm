(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{387:function(e,n,t){"use strict";t.r(n);var o=t(4),r=t.n(o),a=t(5),i=t.n(a),c=t(2),s=t.n(c),u=t(6),l=t.n(u),d=function(e){function n(){var e,o,a,c;i()(this,n);for(var u=arguments.length,l=Array(u),d=0;d<u;d++)l[d]=arguments[d];return o=a=s()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(l))),a.document=function(){return{document:t(440),className:"switch-page"}},c=o,s()(a,c)}return l()(n,e),n}(t(398).a);n.default=d},396:function(e,n,t){},398:function(e,n,t){"use strict";var o=t(390),r=t.n(o),a=t(391),i=t.n(a),c=t(392),s=t.n(c),u=t(4),l=t.n(u),d=t(5),m=t.n(d),h=t(7),p=t.n(h),f=t(2),v=t.n(f),g=t(6),C=t.n(g),y=t(0),S=t.n(y),_=t(55),k=t.n(_),w=t(393),E=t.n(w),N=t(394),b=t(1),M=t.n(b),D=t(400),I=t.n(D),O=(t(405),t(406),t(407),t(408),t(396),function(e){function n(){return m()(this,n),v()(this,(n.__proto__||l()(n)).apply(this,arguments))}return C()(n,e),p()(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props,t=n.onChange,o=n.value;this.cm=I()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(n){t&&(clearTimeout(e.timeout),e.timeout=setTimeout(function(){t(n.getValue())},300))})}},{key:"render",value:function(){var e=this;return S.a.createElement("div",{className:"editor",ref:function(n){e.editor=n}})}}]),n}(y.Component)),x=O;O.propTypes={onChange:M.a.func,value:M.a.string},O.defaultProps={onChange:function(){},value:""};t(395);var L=function(e){function n(e){m()(this,n);var t=v()(this,(n.__proto__||l()(n)).call(this,e));return t.toggleShowCode=function(){t.setState({isOpen:!t.state.isOpen})},t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={isOpen:!1},t}return C()(n,e),p()(n,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&k.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(e){var n=this;Promise.all([t.e(6),t.e(7),t.e(72)]).then(t.bind(null,549)).then(function(e){return{args:["context","React","ReactDOM","zarm"],argv:[n,S.a,k.a,e]}}).then(function(t){var o=t.args;t.argv;e=e.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+n.containerId+"')");var r=Object(N.transform)(e,{presets:["es2015","react"]}).code;o.push(r),n.source[2]=e}).catch(function(e){0})}},{key:"render",value:function(){var e=this;return S.a.createElement("div",null,S.a.createElement("h3",null,this.title),S.a.createElement("div",{className:"demo"},S.a.createElement("div",{className:"demo-code"},S.a.createElement("div",{className:"demo-code-editor",ref:function(n){e.code=n},dangerouslySetInnerHTML:{__html:this.description}}),S.a.createElement(x,{value:this.source[2],onChange:function(n){return e.renderSource(n)}}))))}}]),n}(y.Component),z=function(e){function n(e){m()(this,n);var t=v()(this,(n.__proto__||l()(n)).call(this,e));return t.nodeList=[],t.components=new s.a,t.renderer=new E.a.Renderer,t}return C()(n,e),p()(n,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(e){k.a.unmountComponentAtNode(e)})}},{key:"renderDOM",value:function(){var e=!0,n=!1,t=void 0;try{for(var o,a=r()(this.components);!(e=(o=a.next()).done);e=!0){var c=o.value,s=i()(c,2),u=s[0],l=s[1],d=document.getElementById(u);this.nodeList.push(d),d instanceof HTMLElement&&k.a.render(l,d)}}catch(e){n=!0,t=e}finally{try{!e&&a.return&&a.return()}finally{if(n)throw t}}}},{key:"render",value:function(){var e=this,n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,o=n.className;if("string"==typeof t){this.components.clear();var r=E()(t.replace(/:::\s?api\s?([^]+?):::/g,function(e,n){return n}).replace(/:::\s?demo\s?([^]+?):::/g,function(n,t,o){var r=o.toString(36);return e.components.set(r,S.a.createElement(L,e.props,t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return S.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:r}})}return S.a.createElement("span",null)}}]),n}(S.a.Component);n.a=z},440:function(e,n){e.exports="## 开关 Switch\n\n:::demo 基本用法\n```jsx\nimport { Switch, Cell } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: true,\n    };\n  }\n\n  toggle(value) {\n    this.setState({\n      value,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Switch\n              checked={this.state.value}\n              onChange={(value) => {\n                this.setState({ value });\n              }}\n            />\n          }\n        >\n          普通\n        </Cell>\n        <Cell description={<Switch defaultChecked />}>默认开</Cell>\n        <Cell description={<Switch disabled />}>禁用的开关（默认关）</Cell>\n        <Cell description={<Switch defaultChecked disabled />}>禁用的开关（默认开）</Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-switch | | 类名前缀 |\n| className | string | | | 追加类名 |\n| checked | boolean | | | 值 |\n| defaultChecked | boolean | | | 初始值 |\n| disabled | boolean | false | | 是否禁用 |\n| onChange | <code>(value: boolean) => void</code> | | \\(value: boolean\\) | 值变化时触发的回调函数 |\n| style | React.CSSProperties | | | 自定义样式 |\n\n\n:::"}}]);