import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.user.name}</strong>
        </h3>
      </header>
      <p>
        <strong>Email:</strong> {currentUser.user.email}
      </p>
      <p>
        <strong>Role:</strong> {currentUser.user.role}
      </p>
    </div>
  );
};

export default Home;
