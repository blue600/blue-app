const menuNode = [
  { name: 'A报销', code: '01' },
  { name: '采购', code: '02' },
  { name: '销售', code: '03' },
  { name: '会计', code: '04' },
];

const menuNodeName = menuNode.map(node => node.name);
console.log(menuNodeName);
