// 给每个菜单项menuItem编码 nodeCode,有序管理权限和显示逻辑

const menuNode = [
  { code: '01', name: '报销' },
  { code: '0101', name: '我的报销单', route: '/homeunlogin' },
  { code: '0102', name: '审批报销单', route: '/home' },
  { code: '0103', name: '费用统计分析', route: '/login' },
  { code: '02', name: '采购' },
  { code: '0201', name: '我的采购单', route: '/home' },
  { code: '0202', name: '审批采购单', route: '/login' },
  { code: '03', name: '销售' },
  { code: '0301', name: '我的销售单', route: '/login' },
  { code: '0302', name: '审批销售单', route: '/login' },
  { code: '04', name: '会计' },
  { code: '0401', name: '会计分录', route: '/login' },
  { code: '0402', name: '银行对账', route: '/login' },
]

export const menuNodeL1 = menuNode.filter(node => node.code.length === 2)
export const menuNodeL2 = menuNode.filter(node => node.code.length === 4)
