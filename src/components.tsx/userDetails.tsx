import { Col, Container, Row } from "react-bootstrap";
import { User } from "../redux/Slices/userSlice";
import { useAppSelector } from "../redux/hooks";
import { LogOut } from "./logoutButton";

export const UserProfile = () => {
  const user: User = useAppSelector((state) => state.user.currentUser)!;
  return (
    <Container className="mt-5">
      {user && (
        <>
          <Row>
            <Col>
              <h3>Hello, {user.userName}!</h3>
              <p className="mt-3">
                <strong>Username:</strong> {user.userName}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              className="d-flex justify-content-center"
              style={{ marginTop: "200px" }}
            >
              <LogOut></LogOut>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default UserProfile;
