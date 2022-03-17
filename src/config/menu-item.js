// 给每个菜单项menuItem编码 nodeCode,有序管理权限和显示逻辑

const menuItem = [
  { code: '01', name: '员工报销' },
  { code: '0101', name: '我的报销单', route: '/homeunlogin' },
  { code: '0102', name: '审批报销单', route: '/home' },
  { code: '0103', name: '费用统计分析', route: '/numberhook' },
  { code: '02', name: '物品采购' },
  { code: '0201', name: '我的采购单', route: '/user' },
  { code: '0202', name: '审批采购单', route: '/login' },
  { code: '03', name: '产品销售' },
  { code: '0301', name: '我的销售单', route: '/login' },
  { code: '0302', name: '审批销售单', route: '/login' },
  { code: '04', name: '会计业务' },
  { code: '0401', name: '会计分录', route: '/login' },
  { code: '0402', name: '银行对账', route: '/login' },
  { code: '0403', name: '财务报表', route: '/login' },
  { code: '05', name: '系统设置' },
  { code: '0501', name: '设置1', route: '/login' },
  { code: '0502', name: '设置2', route: '/login' },
  { code: '0503', name: '设置3', route: '/login' },
];

export const menuItemL1 = menuItem.filter(node => node.code.length === 2);
export const menuItemL2 = menuItem.filter(node => node.code.length === 4);
