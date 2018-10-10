(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{369:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t.n(o),i=t(5),l=t.n(i),a=t(2),c=t.n(a),s=t(6),d=t.n(s),m=t(394),u=(t(682),function(n){function e(){var n,o,i,a;l()(this,e);for(var s=arguments.length,d=Array(s),m=0;m<s;m++)d[m]=arguments[m];return o=i=c()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(d))),i.document=function(){return{document:t(417),className:"cell-page"}},a=o,c()(i,a)}return d()(e,n),e}(m.a));e.default=u},394:function(n,e,t){"use strict";var o=t(395),r=t.n(o),i=t(396),l=t.n(i),a=t(397),c=t.n(a),s=t(4),d=t.n(s),m=t(5),u=t.n(m),p=t(7),h=t.n(p),v=t(2),C=t.n(v),g=t(6),f=t.n(g),D=t(0),x=t.n(D),y=t(55),w=t.n(y),N=t(398),M=t.n(N),R=t(399),k=t.n(R),I=(t(400),function(n){function e(n){u()(this,e);var t=C()(this,(e.__proto__||d()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t}return f()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){w.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,i=r()(this.components);!(n=(o=i.next()).done);n=!0){var a=o.value,c=l()(a,2),s=c[0],d=c[1],m=document.getElementById(s);this.nodeList.push(m),m instanceof HTMLElement&&w.a.render(d,m)}}catch(n){e=!0,t=n}finally{try{!n&&i.return&&i.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){this.components.clear();var o=new M.a.Renderer;o.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"};var r=M()(e,{renderer:o,highlight:function(n){return k.a.highlightAuto(n).value}});return x.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return x.a.createElement("span",null)}}]),e}(x.a.Component));e.a=I},417:function(n,e){n.exports='## 列表项 Cell\n\n\n\n### 基本用法\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 带描述\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" description="描述文字" />\n        <Cell title="标题文字" description={<Icon type="right" />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 带图标、描述\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" icon={<Icon type="right" />} />\n        <Cell title="标题文字" icon={<img alt="" src={img} style={{ width: \'24px\', height: \'24px\' }} />} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 带跳转\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell title="标题文字" onClick={() => {}} />\n        <Cell title="标题文字" onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 带描述、箭头、跳转\n```jsx\nimport { Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n        <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 带图标、描述、箭头、跳转\n```jsx\nimport { Cell, Icon } from \'zarm\';\n\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          hasArrow\n          title="标题文字"\n          description="描述文字"\n          icon={<Icon type="right" />}\n          onClick={() => {}}\n        />\n\n        <Cell \n          hasArrow\n          title="标题文字"\n          description="描述文字"\n          icon={\n            <img alt="" src={img} style={{ width: \'24px\', height: \'24px\' }} />\n          }\n          onClick={() => {}}\n        />\n\n        <Cell\n          hasArrow\n          title={\n            <div className="box">\n              <div className="box-title">标题文字</div>\n              <div className="box-description">描述文字</div>\n            </div>\n          }\n          description="附加提示"\n          icon={<img alt="" src={img} style={{ width: \'48px\', height: \'48px\' }} />}\n          onClick={() => {}}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 提示信息\n```jsx\nimport { Cell, Message, Icon, Input } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          title="标题"\n          help={<Message theme="error" icon={<Icon type="info-round" />}>标题不能为空</Message>}\n        >\n          <Input type="text" placeholder="请输入标题" />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| hasArrow | boolean | false | | 是否显示箭头 |\n| icon | ReactNode | | | 显示的图标 |\n| titile | ReactNode | | | 标题 |\n| description | ReactNode | | | 描述 |\n| help | ReactNode | | | 下方提示信息，通常配合`Message`组件使用 |\n| onClick | MouseEventHandler<HTMLDivElement> | | | 点击后触发的回调函数 |\n'},682:function(n,e,t){}}]);