const rootDomain = 'http://localhost:3000';


export async function createUser(userId) {
    // url: POST /users
    const url = '/users'
    const path = rootDomain + url
    
    // {
    //  id: 
    //  message: "User created in database"
    // }

    const createdUser = await fetch(path).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
    });

    return createdUser;
} 


export async function getAllHabits(userId) {
    // url: GET /users/:userID/habits
    const url = `/users/${userId}/habits`;
    const path = rootDomain + url;

    // {
    //  id: uuid
    //  message: "User created in database"
    // }


    const allHabits = await fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
    });

    console.log(allHabits);
    return allHabits;
}



export async function createHabit(userId, title, description, frequency, include) {
    // url: POST /users/:userID/habits
    const url = `/users/${userId}/habits`;
    const path = rootDomain + url;

    // body: {
    //  title: "Gym",
    //  description: "Workout to improve physical health",
    //  frequency: "weekly",
    //  include: true
    // }
    // response -> {id: habitID}

    const createdHabit = await fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    return createdHabit
}

export async function deleteHabit(userId, habitId) {
    // url: DELETE /users/:userID/habits/:habitID 
    const url = `/users/${userId}/habits/${habitId}`;
    const path = rootDomain + url;

    const deletedHabit = await fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    return deletedHabit;
}

export async function updateHabit(userId, habitId) {
    // url: PUT /users/:userID/habits/:habitID
    const url = `/users/${userId}/habits/${habitId}`;
    const path = rootDomain + url;
    
    // body: {
    //  description,
    // }

    const updatedHabit = await fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    return updatedHabit;
}

export async function createDate(userId, habitId, date) {
    // url: POST /users/:userID/habits/:habitID/dates
    const url = `/users/${userId}/habits/${habitId}/dates`;
    const path = rootDomain + url;

    const createdDate = await fetch(path).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    return createDate;
}






