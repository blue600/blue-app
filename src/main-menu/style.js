// 这个文件废弃🍎了

// styled component方案，目前我并没有发现有太大的收益
// 使用传统的CSS文件反而直观，容易理解
// 目前方案是：在每一个模块建立一个同名的CSS文件
import { styled } from '@mui/system';

export const BLink = styled('div')({
  fontWeight: 'bold',
  color: 'white',
  textDecorationLine: 'none',
});
