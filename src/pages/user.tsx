import React, { useEffect, useState } from "react";

import { Button, Container, Row, Col } from "react-bootstrap";
import { User } from "../redux/Slices/userSlice";
import { useParams } from "react-router-dom";
import { getUserByName } from "../api/authApi";

export const UserProfile = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(username);
        const response = await getUserByName(username!);
        console.log(response.data);
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.error("Ошибка в поиске пользователя:", error);
      }
    };

    fetchData();
  }, [username]);
  console.log(user);
  //   console.log(user.Username, user.UserName, user.Role);
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>User Profile</h2>
          {/* <p>
            <strong>Username:</strong> {user.UserName}
          </p>
          <p>
            <strong>Role:</strong> {user.Role}
          </p> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Редактировать профиль</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
