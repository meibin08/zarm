(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{351:function(n,e,t){"use strict";t.r(e);var a=t(4),r=t.n(a),o=t(5),c=t.n(o),i=t(2),l=t.n(i),s=t(6),d=t.n(s),u=t(401),m=(t(479),function(n){function e(){var n,a,o,i;c()(this,e);for(var s=arguments.length,d=Array(s),u=0;u<s;u++)d[u]=arguments[u];return a=o=l()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(d))),o.document=function(){return{document:t(429),className:"panel-page"}},i=a,l()(o,i)}return d()(e,n),e}(u.a));e.default=m},429:function(n,e){n.exports='## 面板 Panel\n\n\n\n### 基本用法\n```jsx\nimport { Panel } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Panel\n          titleRender="标题"\n          moreRender={<a href="/#" onClick={() => alert(\'click more\')}>更多</a>}\n        >\n          <div className="box">内容</div>\n        </Panel>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n#### Panel\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| titleRender | React.ReactNode | | | 标题渲染 |\n| moreRender | React.ReactNode | | | 更多渲染 |\n| prefixCls | string | za-panel | | 类名前缀 |\n| className | string | | | 追加类名 |\n'},479:function(n,e,t){}}]);