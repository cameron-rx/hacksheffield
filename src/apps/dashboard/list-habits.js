import React, { useState } from "react";
import "./list-habits.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllHabits } from "../../services/habits";

// const exampleHabits = [
//   { id: 1, title: "Exercise", include: false },
//   { id: 2, title: "Meditate", include: false },
//   { id: 3, title: "Read", include: false },
//   { id: 4, title: "Code", include: false },
//   { id: 5, title: "Walk", include: false },
//   { id: 6, title: "Hydrate", include: false },
//   { id: 7, title: "Plan", include: false },
// ];
let exampleHabits = [];

const ListHabits = () => {
  const [habits, setHabits] = useState(exampleHabits);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    exampleHabits = getAllHabits(user.sub);
    console.log(exampleHabits);
  }

  const handleCheckboxChange = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, include: !habit.include } : habit
      )
    );
  };

  const handleUpdate = (id) => {
    console.log(`Update habit with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Header */}
      <header className="p-3 bg-light text-center rounded-top" style={{ color: 'black' }}>
        <h2>Dashboard</h2>
      </header>

      {/* Add Habit Button */}
      <button
        className="btn btn-success rounded-0 w-100 p-2 d-flex justify-content-center align-items-center"
        onClick={() => console.log("Add new habit")}
      >
        <i className="bi bi-plus-circle me-2"></i> Add Habit
      </button>

      {/* Scrollable Table */}
      <div className="flex-grow-1 d-flex flex-column">
        <div className="table-responsive flex-grow-1 overflow-auto">
          <table
            className="table table-striped h-100"
            style={{ tableLayout: "fixed" }}
          >
            <thead className="sticky-top bg-light">
              <tr>
                <th
                  style={{
                    padding: "32px",
                    verticalAlign: "middle",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    padding: "32px",
                    verticalAlign: "middle",
                  }}
                >
                  Title
                </th>
                <th
                  style={{
                    padding: "32px",
                    verticalAlign: "middle",
                  }}
                >
                  Include
                </th>
                <th
                  style={{
                    padding: "32px",
                    verticalAlign: "middle",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {habits.map((habit) => (
                <tr key={habit.id}>
                  <td style={{ verticalAlign: "middle" }}>{habit.id}</td>
                  <td style={{ verticalAlign: "middle" }}>{habit.title}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <input
                      type="checkbox"
                      checked={habit.include}
                      onChange={() => handleCheckboxChange(habit.id)}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleUpdate(habit.id)}
                    >
                      <i className="bi bi-pen"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDelete(habit.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListHabits;