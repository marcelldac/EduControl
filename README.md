<h1 align="center">
<a href='#'><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="600px"/></a>
  <br>
  <br>
  <div>
    <a href="https://github.com/marcelldac/EduControl/issues">
        <img src="https://img.shields.io/github/issues/marcelldac/EduControl?color=fab387&labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/marcelldac/EduControl/stargazers">
        <img src="https://img.shields.io/github/stars/marcelldac/EduControl?color=ca9ee6&labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/marcelldac/EduControl">
        <img src="https://img.shields.io/github/repo-size/marcelldac/EduControl?color=ea999c&labelColor=303446&style=for-the-badge">
    </a>
    </div>
   </h1>

<h1 align="center">📖 EduControl 📖</h1>

## EduControl - School System Management

The EduControl is an advanced school management platform that offers an integrated and efficient approach to administering all essential operations of an educational institution. From tracking student performance to resource management and communication with parents, EduControl simplifies and enhances every aspect of the school environment.


## Features

- Create, Read, Update and Delete Users
- Create, Read, Update and Delete Courses
- Create, Read, Update and Delete Teachers
- Enroll Student in a course
- Unenroll Student of a course
- Enroll Teacher in a course
- Unenroll teacher of a course

### EduControl Documentation

#### Returns all students

```http
  GET /api/v1/students
```

#### Create a Student

```http
  POST /api/v1/students
```

| Parameters   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstName`      | `string` | **Mandatory**. Student's First Name |
| `lastName`      | `string` | **Mandatory**. Student's Last Name |
| `email`      | `string` | **Mandatory**. Student's Email |
| `password`      | `string` | **Mandatory**. Student's Password |

#### Update a Student

```http
  PUT /api/v1/students/:id
```

| Parameters   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstName`      | `string` | **Mandatory**. Student's First Name |
| `lastName`      | `string` | **Mandatory**. Student's Last Name |
| `email`      | `string` | **Mandatory**. Student's Email |
| `password`      | `string` | **Mandatory**. Student's Password |

#### Delete a Student

```http
  DELETE /api/v1/students/:id
```

#### Returns all Teachers

```http
  GET /api/v1/teachers
```

#### Create a Teacher

```http
  POST /api/v1/teachers
```

| Parameters   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. Teacher's name |
| `email`      | `string` | **Mandatory**. Teacher's email |
| `isCoordinator`      | `boolean` | **Mandatory**. If teacher is coordinator or not |
| `courseName`      | `string` | **Mandatory**. Name of course which teacher will be enrolled in |

#### Update a Teacher

```http
  PUT /api/v1/teachers/:id
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. Teacher's name |
| `email`      | `string` | **Mandatory**. Teacher's email |
| `isCoordinator`      | `boolean` | **Mandatory**. If teacher is coordinator or not |
| `courseName`      | `string` | **Mandatory**. Name of course which teacher will be enrolled in |

#### Delete a Teacher
```http
  DELETE /api/v1/teachers/:id
```

#### Returns all Courses

```http
  GET /api/v1/courses
```

#### Creates a Course

```http
  POST /api/v1/courses
```

| Parameters   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. Course Name |

#### Update a Teacher

```http
  PUT /api/v1/courses/:id
```

| Parameters   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Mandatory**. Course Name |

#### Delete a Teacher

```http
  DELETE /api/v1/courses/:id
```

### Enroll Student

```http
  POST /api/v1/enroll/:studentID
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `courseID`      | `string` | **Mandatory**. ID of the course which the student will be enrolled |


### Unenroll Student

```http
  POST /api/v1/unenroll/:studentID
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `courseID`      | `string` | **Mandatory**. ID of the course which the student will be unenrolled |

### Enroll Student via E-mail

```http
  POST /api/v1/enroll
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `studentEmail`      | `string` | **Mandatory**. Student Enrollment Email |
| `courseName`      | `string` | **Mandatory**. The name of the course that will receive a new student |

### Unenroll Student via E-mail

```http
  POST /api/v1/unenroll
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `studentEmail`      | `string` | **Mandatory**. Student Enrollment Email |
| `courseName`      | `string` | **Mandatory**. The name of the course that will receive a new student |

### Enroll Teacher

```http
  POST /api/v1/teacher-enroll
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `teacherEmail`      | `string` | **Mandatory**. Teacher Enrollment Email |
| `courseName`      | `string` | **Mandatory**. The name of the course that will receive a new student |

### Unenroll Teacher

```http
  POST /api/v1/teacher-unenroll
```

| Parameters   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------ |
| `teacherEmail`      | `string` | **Mandatory**. Teacher Enrollment Email |
| `courseName`      | `string` | **Mandatory**. The name of the course that will receive a new student |

## Author

- [@marcelldac](https://www.github.com/marcelldac)

