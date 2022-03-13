import { Row, Col } from 'antd';
import MainMenu from './MainMenu';

// const style = { background: '#0092ff', padding: '8px 0' };

const MenuBar = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={4}>
          <div>blue600.com</div>
        </Col>
        <Col xs={0} md={16}>
          <MainMenu />
        </Col>
        <Col xs={12} md={4}>
          <div>login</div>
        </Col>
      </Row>
    </div>
  );
};

export default MenuBar;
