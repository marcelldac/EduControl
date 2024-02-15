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

### Documentação da EduControl

#### Retorna todos os estudantes

```http
  GET /api/v1/students
```

#### Cria um estudante

```http
  POST /api/v1/students
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstName`      | `string` | **Obrigatório**. O Primeiro Nome Do Estudante |
| `lastName`      | `string` | **Obrigatório**. O Ultimo Nome Do Estudante |
| `email`      | `string` | **Obrigatório**. O E-mail Do Estudante |
| `password`      | `string` | **Obrigatório**. A Senha Do Estudante |

#### Atualiza um estudante

```http
  PUT /api/v1/students/:id
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstName`      | `string` | **Obrigatório**. O Primeiro Nome Do Estudante |
| `lastName`      | `string` | **Obrigatório**. O Ultimo Nome Do Estudante |
| `email`      | `string` | **Obrigatório**. O E-mail Do Estudante |
| `password`      | `string` | **Obrigatório**. A Senha Do Estudante |

#### Deleta um estudante

```http
  DELETE /api/v1/students/:id
```

#### Retorna todos os professores

```http
  GET /api/v1/teachers
```

#### Cria um Professor

```http
  POST /api/v1/teachers
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome Do Professor |
| `email`      | `string` | **Obrigatório**. O E-mail Do Professor |
| `isCoordinator`      | `boolean` | **Obrigatório**. Se o professor é coordenador ou não |
| `courseName`      | `string` | **Obrigatório**. Nome do curso que o professor será matriculado |

#### Atualiza um Professor

```http
  PUT /api/v1/teachers/:id
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome Do Professor |
| `email`      | `string` | **Obrigatório**. O E-mail Do Professor |
| `isCoordinator`      | `boolean` | **Obrigatório**. Se o professor é coordenador ou não |
| `courseName`      | `string` | **Obrigatório**. Nome do curso que o professor será matriculado |

#### Deleta um Professor

```http
  DELETE /api/v1/teachers/:id
```

#### Retorna todos os cursos

```http
  GET /api/v1/courses
```

#### Cria um Curso

```http
  POST /api/v1/courses
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome Do Curso |

#### Atualiza um Professor

```http
  PUT /api/v1/courses/:id
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O Nome Do Curso |

#### Deleta um Professor

```http
  DELETE /api/v1/courses/:id
```

### Matricula Estudante

```http
  POST /api/v1/enroll/:studentID
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `courseID`      | `string` | **Obrigatório**. O ID Do Curso |


### Desmatricula Estudante

```http
  POST /api/v1/unenroll/:studentID
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `courseID`      | `string` | **Obrigatório**. O ID Do Curso |

### Matricula Estudante por Email

```http
  POST /api/v1/enroll
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `studentEmail`      | `string` | **Obrigatório**. E-mail do estudante a ser matriculado |
| `courseName`      | `string` | **Obrigatório**. Nome do curso que receberá um novo aluno |

### Desmatricula Estudante por Email

```http
  POST /api/v1/unenroll
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `studentEmail`      | `string` | **Obrigatório**. E-mail do estudante a ser matriculado |
| `courseName`      | `string` | **Obrigatório**. Nome do curso que receberá um novo aluno |

### Matricula Professor

```http
  POST /api/v1/teacher-enroll
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `teacherEmail`      | `string` | **Obrigatório**. E-mail do professor a ser matriculado no curso |
| `courseName`      | `string` | **Obrigatório**. Nome do curso que receberá o novo professor |

### Desmatricula Professor

```http
  POST /api/v1/teacher-unenroll
```

| Parâmetros   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `teacherEmail`      | `string` | **Obrigatório**. E-mail do professor a ser matriculado no curso |
| `courseName`      | `string` | **Obrigatório**. Nome do curso que receberá o novo professor |
