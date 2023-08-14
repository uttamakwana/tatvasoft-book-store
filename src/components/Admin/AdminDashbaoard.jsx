import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ContextProvider";
import "./admindashboard.css";

const AdminDashbaoard = () => {
  const { adminData, setAdminData, books, setUsers, users } =
    useContext(Context);
  const [updateUser, setUpdateUser] = useState(0);
  const email = "uttamakwana4503@gmail.com";

  const [activeComponent, setActiveComponent] = useState("Users");
  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/api/v1/admin/me",
        { email },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const responseData = res.data;
        setAdminData(res.data.data);
        console.log("Response Data:", responseData);
      })
      .catch((error) => console.error("Error:", error));
  }, [updateUser]);

  const handleUsers = async () => {
    const users = await axios.post(
      "http://localhost:4000/api/v1/admin/userlist"
    );

    console.log(users.data.data);
    setUsers(users.data.data);
  };

  const handleDelete = async (id) => {
    const deleteUser = await axios.post(
      `http://localhost:4000/api/v1/admin/deleteUser/${id}`
    );

    handleUsers();
    setUpdateUser(users.length);
    console.log();
    console.log(id);
    console.log(deleteUser.data.data);
  };

  return (
    <main className="admin">
      <section className="admin__header">
        <p>
          Hello &nbsp;
          <strong>
            {adminData.firstName} {adminData.lastName}
          </strong>
        </p>
      </section>
      <section className="admin__sidebar">
        <p
          onClick={() => {
            setActiveComponent("Users");
            handleUsers();
          }}
        >
          Users
        </p>
        <p onClick={() => setActiveComponent("Books")}>Books</p>
      </section>
      <section className="admin__content">
        {activeComponent === "Users" && (
          <div className="users content" id="admin-user-card-container">
            {users.map((user) => {
              return (
                <div
                  className="user-card card"
                  id="admin-users-card"
                  key={Math.round(Math.random() * 1000)}
                >
                  <p>
                    <strong>Name: </strong>
                    {user.firstName} {user.lastName}
                  </p>
                  <p>
                    <strong>Email: </strong> {user.email}
                  </p>
                  <p>
                    <button onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {activeComponent === "Books" && (
          <div className="books content" id="admin-book-card-container">
            {books.map((book) => {
              return (
                <div
                  className="book-card card"
                  id="admin-books-card"
                  key={Math.round(Math.random() * 1000)}
                >
                  <p>{book.title}</p>
                  <p>{book.description}</p>
                  <p>{book.price}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <section className="admin__footer">c</section>
    </main>
  );
};

export default AdminDashbaoard;
