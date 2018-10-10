(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{393:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t.n(o),i=t(5),a=t.n(i),s=t(2),l=t.n(s),c=t(6),u=t.n(c),d=t(394),m=(t(710),function(n){function e(){var n,o,i,s;a()(this,e);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return o=i=l()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(u))),i.document=function(){return{document:t(441),className:"toast-page"}},s=o,l()(i,s)}return u()(e,n),e}(d.a));e.default=m},394:function(n,e,t){"use strict";var o=t(395),r=t.n(o),i=t(396),a=t.n(i),s=t(397),l=t.n(s),c=t(4),u=t.n(c),d=t(5),m=t.n(d),h=t(7),p=t.n(h),v=t(2),f=t.n(v),C=t(6),g=t.n(C),y=t(0),x=t.n(y),b=t(55),k=t.n(b),w=t(398),N=t.n(w),B=t(399),D=t.n(B),L=(t(400),function(n){function e(n){m()(this,e);var t=f()(this,(e.__proto__||u()(e)).call(this,n));return t.nodeList=[],t.components=new l.a,t}return g()(e,n),p()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){k.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,i=r()(this.components);!(n=(o=i.next()).done);n=!0){var s=o.value,l=a()(s,2),c=l[0],u=l[1],d=document.getElementById(c);this.nodeList.push(d),d instanceof HTMLElement&&k.a.render(u,d)}}catch(n){e=!0,t=n}finally{try{!n&&i.return&&i.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){this.components.clear();var o=new N.a.Renderer;o.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"};var r=N()(e,{renderer:o,highlight:function(n){return D.a.highlightAuto(n).value}});return x.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return x.a.createElement("span",null)}}]),e}(x.a.Component));e.a=L},441:function(n,e){n.exports='## 轻提示 Toast\n\n\n\n### 基本用法\n```jsx\nimport { Toast, Cell, Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button\n              size="xs"\n              theme="error"\n              onClick={() => {\n                Toast.show(\'默认3秒自动关闭\');\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          错误提示\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              theme="success"\n              onClick={() => {\n                Toast.show(\n                  <div className="box">\n                    <Icon className="box-icon" type="right-round-fill" />\n                    <div className="box-text">\n                      预约成功\n                    </div>\n                  </div>\n                );\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          成功提示\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Toast.show(\'指定10秒自动关闭\', 10000);\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          指定关闭时间\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 加载中\n```jsx\nimport { Loading, Cell, Button } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Loading.show();\n                setTimeout(()=>{\n                  Loading.hide();\n                }, 1100);\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          Loading\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-toast | | 类名前缀 |\n| className | string | | | 追加类名 |\n| visible | boolean | false | | 是否显示 |\n| stayTime | number | 3000 | | 自动关闭前停留的时间（单位：毫秒） |\n| onClose | <code>() => void</code> | noop | | 关闭时触发的回调函数 |\n| onMaskClick | <code>() => void</code> | noop | | 点击遮罩层时触发的回调函数 |\n'},710:function(n,e,t){}}]);