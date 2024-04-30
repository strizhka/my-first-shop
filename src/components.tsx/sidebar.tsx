import { Col } from "react-bootstrap";

function Sidebar() {
  return (
    <Col sm={2} className="sidebar">
      <h3>Меню</h3>
      <ul>
        <li>Рыбки</li>
        <li>Растения</li>
        <li>Грунт</li>
        <li>Аквариумы</li>
      </ul>
    </Col>
  );
}

export default Sidebar;
