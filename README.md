#### Workout Library API

The API is a library of gym training exercises with name, type, and description.

Designed to be a POC (Proof of Concept), this is a functional API made with Node.js to showcase TypeScript concepts with Express and SQL, developing integrated CRUD operations like POST, GET, PUT, and DELETE routers.

#### Technologies Used

<img align = "center" alt = "Node.js" src = "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white "/><img align = "center" alt = "typescript" src = "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /><img align = "center" alt = "Express.js" src = "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/><img align = "center" alt = "PostgreSQL" src = "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img align = "center" alt = "Prisma" src = "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>

#### API Documentation

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

###### GET by id /workouts:id

Get one training exercise.

**URL:** `https://workout-api-fwhw.onrender.com/workouts/:id`

**Method:** GET

**Response Example:**

GET /workouts/1
Content-Type: application/json

    {
      "id": 1,
      "name": "Squat",
      "type": "Legs",
      "description": "Exercise for strengthening leg muscles."
    }

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
