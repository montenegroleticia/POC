#### Workout Library API

The API is a library of gym training exercises with name, type, and description.

Designed to be a POC (Proof of Concept), this is a functional API made with Node.js to showcase TypeScript concepts with Express and SQL, developing integrated CRUD operations like POST, GET, PUT, and DELETE routers.

##### API Documentation

###### POST /workouts

Create a new training exercise.

**URL:** `https://workout-api-fwhw.onrender.com/workouts`

**Method:** POST

**Request Parameters:**

| Parameter   | Type     | Description                  |
| ----------- | -------- | ---------------------------- |
| name        | string   | Name of the exercise         |
| type        | string   | Type of the exercise         |
| description | string   | Description of the exercise  |

**Request Example:**

POST /workouts
Content-Type: application/json

    {
      "name": "Squat",
      "type": "Legs",
      "description": "Exercise for strengthening leg muscles."
    }

Status: 201 Created
Content-Type: application/json

    {
      "id": 1,
      "name": "Squat",
      "type": "Legs",
      "description": "Exercise for strengthening leg muscles."
    }


###### GET /workouts

Get the list of all training exercises.

**URL:** `https://workout-api-fwhw.onrender.com/workouts`

**Method:** GET

**Response Example:**

Status: 200 OK
Content-Type: application/json

    [
      {
        "id": 1,
        "name": "Squat",
        "type": "Legs",
        "description": "Exercise for strengthening leg muscles."
      },
      {
        "id": 2,
        "name": "Bench Press",
        "type": "Chest",
        "description": "Exercise for strengthening chest muscles."
      },
      ...
    ]

### PUT /workouts/:id

Update an existing training exercise.

**URL:** `https://workout-api-fwhw.onrender.com/workouts/:id`

**Method:** PUT

**Request Parameters:**

| Parameter   | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| name        | string   | Updated name of the exercise     |
| type        | string   | Updated type of the exercise     |
| description | string   | Updated description of the exercise |

**Request Example:**

PUT /workouts/1
Content-Type: application/json

    {
      "name": "Free Squat",
      "type": "Legs",
      "description": "Exercise for strengthening leg muscles."
    }

**Response Example:**

Status: 200 OK
Content-Type: application/json

    {
      "id": 1,
      "name": "Free Squat",
      "type": "Legs",
      "description": "Exercise for strengthening leg muscles."
    }    


### DELETE /workouts/:id

Delete a training exercise.

**URL:** `https://workout-api-fwhw.onrender.com/workouts/:id`

**Method:** DELETE

**Request Parameters:**

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| id        | number | ID of the exercise to delete |

**Request Example:**

DELETE /workouts/1

**Response Example:**

Status: 204 No Content
