import "./list-habits.css";
import React, { useState, useEffect } from 'react';

import { useAuth0 } from "@auth0/auth0-react";
import { createHabit, deleteHabit, getAllHabits, updateHabit } from "../../services/habits";

const exampleHabits = [
  { id: 1, title: "Exercise", include: false },
  { id: 2, title: "Meditate", include: false },
  { id: 3, title: "Read", include: false },
  { id: 4, title: "Code", include: false },
  { id: 5, title: "Walk", include: false },
  { id: 6, title: "Hydrate", include: false },
  { id: 7, title: "Plan", include: false },
];


export function ListHabits() {
  let [habits, setHabits] = useState([]); // State to hold fetched habits
  const [isLoadingHabits, setIsLoadingHabits] = useState(true); // Loading state for habits
  const { user, isAuthenticated, isLoading: isLoadingAuth } = useAuth0(); // Auth0 hooks
  let userId;

  if (isAuthenticated) {
    userId = user.sub;
  }

  // Properties for a new  habit
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [included, setIncluded] = useState(false);
  const [frequency, setFrequency] = useState('');

  // Properties for updating a habit
  const [titleUpdate, setUpdateTitle] = useState('');
  const [descriptionUpdate, setUpdateDescription] = useState('');
  const [includedUpdate, setUpdateIncluded] = useState(false);
  const [frequencyUpdate, setUpdateFrequency] = useState('');


  // Add methods
  const handleTitleChange = (e) => {
    setTitle(e.target.value);  // Update title state
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);  // Update description state
  };

  const handleIncludedChange = (e) => {
    setIncluded(e.target.checked);  // Update included checkbox state
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);  // Update frequency dropdown state
  };

  // Update methods
  const handleTitleUpdate = (e) => {
    setUpdateTitle(e.target.value);
  }

  const handleDescriptionUpdate = (e) => {
    setUpdateDescription(e.target.value);
  }

  const handleIncludedUpdate = (e) => {
    setUpdateIncluded(e.target.value);
  }

  const handleFrequencyUpdate = (e) => {
    setUpdateFrequency(e.target.value);
  }

  useEffect(() => {
    // Only fetch habits when authenticated and user exists
    async function fetchHabits() {
      if (isAuthenticated && user) {
        try {
          setIsLoadingHabits(true); // Set loading to true while fetching
          const fetchedHabits = await getAllHabits(user.sub);
          setHabits(fetchedHabits); // Set the fetched habits
        } catch (error) {
          console.error('Error fetching habits:', error);
        } finally {
          setIsLoadingHabits(false); // Stop loading after fetching
        }
      }
    }


    fetchHabits(); // Trigger habit fetch
  }, [isAuthenticated, user]); // Dependencies to re-run when auth or user changes

  if (isLoadingAuth || isLoadingHabits) {
    return <div>Loading...</div>; // Show loading while fetching auth or habits
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your habits.</div>; // Message for unauthenticated users
  }

  // Listings of habits
  function handleCheckboxChange(habitId) {
    console.log('handle checkbox change!');
  }



  function handleDelete(e, habitId) {
    e.preventDefault();

    const userId = user.sub;
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    deleteHabit(userId, habitId);
    // -----------------------------------------------------------------------------------------------------------------------------------------------

    console.log('handle delete!')
  }

  function saveHabit(e) {
    e.preventDefault();  // Prevent form default submission behavior
    const habitData = {
      title,
      description,
      included,
      frequency
    };

    // -----------------------------------------------------------------------------------------------------------------------------------------------
    createHabit(user.sub, title, description, frequency, included)
    // -----------------------------------------------------------------------------------------------------------------------------------------------

    console.log(habitData);
  }

  function updateHabitView(e, habitId) {
    e.preventDefault();

    const habitData = {
      titleUpdate, 
      descriptionUpdate,
      includedUpdate,
      frequencyUpdate,
    };

    updateHabit(userId, habitId, habitData.description)
  }


  habits = exampleHabits;
  return (
    <div className="d-flex flex-column vh-100">
      {/* Header */}
      <header className="p-3 bg-light text-center rounded-top" style={{ color: 'black' }}>
        <h2>Dashboard</h2>
      </header>

      {/* Add Habit Button */}
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#addHabitModal"
        className="btn btn-success rounded-0 w-100 p-2 d-flex justify-content-center align-items-center">

        <i className="bi bi-plus-circle me-2"></i> Add Habit
      </button>

      <div class="modal fade" id="addHabitModal" tabindex="-1" aria-labelledby="addHabitModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addHabitModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form className="container p-4 bg-light shadow rounded-3">
              <div>
                <h2 className="text-center mb-4 text-primary">Create a Habit</h2>

                <div class="modal-body">

                  <div className="mb-4">
                    <label htmlFor="habitTitle" className="form-label fw-bold" style={{ color: 'black' }}>
                      Habit Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={handleTitleChange}
                      id="habitTitle"
                      className="form-control border-primary shadow-sm"
                      placeholder="e.g., Morning Exercise"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="habitDescription" className="form-label fw-bold" style={{ color: 'black' }} >
                      Habit Description
                    </label>
                    <textarea
                      id="habitDescription"
                      className="form-control border-primary shadow-sm"
                      placeholder="Briefly describe the habit"
                      rows="3"
                      value={description}
                      onChange={handleDescriptionChange}
                      required
                    ></textarea>
                  </div>

                  <div className="form-check mb-4">
                    <input
                      className="form-check-input shadow-sm"
                      type="checkbox"
                      id="habitIncluded"
                      value={included}
                      onChange={handleIncludedChange}
                    />
                    <label className="form-check-label ms-2" htmlFor="habitIncluded"
                      style={{ color: 'black' }}>
                      Include this habit in my routine
                    </label>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="habitFrequency" className="form-label fw-bold" style={{ color: 'black' }}>
                      Frequency
                    </label>
                    <select className="form-select border-primary shadow-sm" id="habitFrequency" required
                      value={frequency} onChange={handleFrequencyChange}>
                      <option value="">Choose Frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" onClick={saveHabit} class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

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
            </tbody>
            <tbody>
              {habits.map((habit) => (
                <tr key={habit.id}>
                  <td style={{ verticalAlign: "middle" }}>{habit.id}</td>
                  <td style={{ verticalAlign: "middle" }}>{habit.title}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <input
                      type="checkbox"
                      checked={habit.include}
                      onChange={handleCheckboxChange(habit.id)}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                      Launch demo modal
                    </button> */}

                    <button
                      class="modal fade"
                      data-bs-toggle="updateHabitatModal"
                      data-bs-target="#updateHabitatModal"
                      id="updateHabitModal"
                    // onClick={handleUpdate(habit.id)}
                    >

                    </button>
                    <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target={`#currentModal${habit.id}`}>
                      <i className="bi bi-pen"></i>
                    </button>

                    <div className="modal fade" id={`currentModal${habit.id}`} tabindex="-1" aria-labelledby={`currentModal${habit.id}`} aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`currentModal${habit.id}`}>Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Modal {habit.id}
                            <form className="container p-4 bg-light shadow rounded-3">
                              <div>
                                <h2 className="text-center mb-4 text-primary">Update a Habit</h2>

                                <div class="modal-body">

                                  <div className="mb-4">
                                    <label htmlFor="habitTitle" className="form-label fw-bold" style={{ color: 'black' }}>
                                      Habit Title
                                    </label>
                                    <input
                                      type="text"
                                      value={titleUpdate}
                                      placeholder={habit.title}
                                      onChange={handleTitleUpdate}
                                      id="habitTitle"
                                      className="form-control border-primary shadow-sm"
                                      required
                                    />
                                  </div>

                                  <div className="mb-4">
                                    <label htmlFor="habitDescription" className="form-label fw-bold" style={{ color: 'black' }} >
                                      Habit Description
                                    </label>
                                    <textarea
                                      id="habitDescription"
                                      className="form-control border-primary shadow-sm"
                                      placeholder={habit.description}
                                      rows="3"
                                      value={descriptionUpdate}
                                      onChange={handleDescriptionUpdate}
                                      required
                                    ></textarea>
                                  </div>

                                  <div className="form-check mb-4">
                                    <input
                                      className="form-check-input shadow-sm"
                                      type="checkbox"
                                      placeholder={habit.included}
                                      id="habitIncluded"
                                      value={includedUpdate}
                                      onChange={handleIncludedUpdate}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="habitIncluded"
                                      style={{ color: 'black' }}>
                                      Include this habit in my routine
                                    </label>
                                  </div>

                                  <div className="mb-4">
                                    <label htmlFor="habitFrequency" className="form-label fw-bold" style={{ color: 'black' }}>
                                      Frequency
                                    </label>
                                    <select className="form-select border-primary shadow-sm" id="habitFrequency" required
                                      placeholder={habit.frequency}
                                      value={frequencyUpdate} onChange={handleFrequencyUpdate}>
                                      <option value="">Choose Frequency</option>
                                      <option value="daily">Daily</option>
                                      <option value="weekly">Weekly</option>
                                      <option value="monthly">Monthly</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="submit" onClick={(e) => updateHabitView(e, habit.id)} class="btn btn-primary">Save changes</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={(e) => handleDelete(e, habit.id)}
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
