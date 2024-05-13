import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="text-center">
          <Row className="mb-3">
            <div>There is nothing here yet!</div>
          </Row>
          <Row>
            <Link to={`/`}>Continue shopping</Link>
          </Row>
        </div>
      </Row>
    </>
  );
};
