const menuNode = [
  { name: '报销', code: '01' },
  { name: '采购', code: '02' },
  { name: '销售', code: '03' },
  { name: '会计', code: '04' },
];

let menuNodeL1 = [];
menuNodeL1 = menuNode.filter(node => node.code === '03');
console.log(menuNodeL1);
