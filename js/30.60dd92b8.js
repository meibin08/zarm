(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{354:function(n,e,r){"use strict";r.r(e);var s=r(4),t=r.n(s),a=r(5),c=r.n(a),p=r(2),l=r.n(p),i=r(6),o=r.n(i),m=r(401),u=(r(485),function(n){function e(){var n,s,a,p;c()(this,e);for(var i=arguments.length,o=Array(i),m=0;m<i;m++)o[m]=arguments[m];return s=a=l()(this,(n=e.__proto__||t()(e)).call.apply(n,[this].concat(o))),a.document=function(){return{document:r(432),className:"progress-page"}},p=s,l()(a,p)}return o()(e,n),e}(m.a));e.default=u},432:function(n,e){n.exports="## 进度条 Progress\n\n\n\n### 基本用法\n```jsx\nimport { Progress, Cell, Select, Stepper } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      percent: 10,\n      theme: 'primary',\n    };\n  }\n\n  render() {\n    const { percent, theme } = this.state;\n\n    return (\n      <div>\n        <div className=\"progress\">\n          <Progress\n            percent={percent}\n            theme={theme}\n          >\n            {percent}%\n          </Progress>\n        </div>\n        <div className=\"progress\">\n          <Progress\n            shape=\"circle\"\n            percent={percent}\n            theme={theme}\n          >\n            <div className=\"progress-content\">\n              <span className=\"progress-text\">{percent}</span>\n              <span className=\"progress-percent\">%</span>\n            </div>\n          </Progress>\n        </div>\n\n        <Cell title=\"进度\">\n          <Stepper\n            shape=\"radius\"\n            step={10}\n            min={0}\n            max={100}\n            value={percent}\n            onChange={(value) => {\n              if (Number.isNaN(Number(value))) return;\n              this.setState({\n                percent: value,\n              });\n            }}\n          />\n        </Cell>\n\n        <Cell title=\"主题\">\n          <Select\n            value={theme}\n            dataSource={[\n              { value: 'primary', label: 'primary' },\n              { value: 'success', label: 'success' },\n              { value: 'warning', label: 'warning' },\n              { value: 'error', label: 'error' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                theme: selected.map(item => item.value),\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-progress | | 类名前缀 |\n| className | string | | | 追加类名 |\n| theme | string | `primary` | `default`, `primary`, `info`, `success`, `warning`, `error` | 主题 |\n| percent | number | 0 | | 进度百分比（范围：0～100） |\n| shape | string | `line` | `line`, `circle` | 类型 |\n"},485:function(n,e,r){}}]);