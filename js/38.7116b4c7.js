(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{362:function(n,e,a){"use strict";a.r(e);var t=a(4),s=a.n(t),o=a(5),l=a.n(o),i=a(2),d=a.n(i),r=a(6),c=a.n(r),m=a(401),v=(a(493),function(n){function e(){var n,t,o,i;l()(this,e);for(var r=arguments.length,c=Array(r),m=0;m<r;m++)c[m]=arguments[m];return t=o=d()(this,(n=e.__proto__||s()(e)).call.apply(n,[this].concat(c))),o.document=function(){return{document:a(440),className:"tabs-page"}},i=t,d()(o,i)}return c()(e,n),e}(m.a));e.default=v},440:function(n,e){n.exports='## 标签页 Tabs\n\n\n\n### 基本用法\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs onChange={(i) => { console.log(i); }}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 可滑动\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs canSwipe onChange={(i) => { console.log(i); }}>\n          <Panel title="选项卡1">\n            <div className="content">试试点我左滑</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">试试点我右滑</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 指定默认选项\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs defaultValue={1}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 指定线条宽度\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs lineWidth={60}>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2">\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 禁用指定选项\n```jsx\nimport { Tabs } from \'zarm\';\nconst { Panel } = Tabs;\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Tabs>\n          <Panel title="选项卡1">\n            <div className="content">选项卡1内容</div>\n          </Panel>\n          <Panel title="选项卡2" disabled>\n            <div className="content">选项卡2内容</div>\n          </Panel>\n          <Panel title="选项卡3">\n            <div className="content">选项卡3内容</div>\n          </Panel>\n        </Tabs>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n#### Tabs\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-tabs | | 类名前缀 |\n| className | string | | | 追加类名 |\n| value | string | | | 值 |\n| defaultValue | string | | | 初始值 |\n| disabled | boolean | false | | 是否禁用 |\n| canSwipe | boolean | false | | 是否支持滑动切换 |\n| lineWidth | number &#124; string | | | 线条宽度 |\n| onChange | <code>(index: number) => void</code> | noop | \\(index: number\\) | 值变化时触发的回调函数 |\n\n\n#### Panel\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| className | string | | | 追加类名 |\n| disabled | boolean | false | | 是否禁用 |\n| title | string | | | 标题 |\n| children | number | | | 内容 |\n'},493:function(n,e,a){}}]);