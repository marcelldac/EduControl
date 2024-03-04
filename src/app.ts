import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";

import studentRouter from "./routes/student-routes";
import courseRouter from "./routes/course-router";
import enrollmentRouter from "./routes/enrollment-router";
import teacherRouter from "./routes/teacher-router";

import swaggerDocument from "../swagger.json";

const server = express();
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

server.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .json({ message: "E-mail and Password are Required", error: true });
  }

  const student = await findStudentByEmail(email);
  const teacher = await findTeacherByEmail(email);

  if (student) {
    if (email === student.email && password === student.password) {
      const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET ?? "", {
        expiresIn: "8h",
      });

      const { password: _, ...studentLogin } = student;

      return res.json({
        student: studentLogin,
        token: token,
      });
    } else {
      return res
        .status(400)
        .json({ message: "E-mail or password are wrong", error: true });
    }
  }

  if (teacher) {
    if (email === teacher.email && password === teacher.password) {
      const token = jwt.sign({ id: teacher.id }, process.env.JWT_SECRET ?? "", {
        expiresIn: "8h",
      });

      const { password: _, ...teacherLogin } = teacher;

      return res.json({
        teacher: teacherLogin,
        token: token,
      });
    } else {
      return res
        .status(400)
        .json({ message: "E-mail or password are wrong", error: true });
    }
  }

  if (!teacher && !student) {
    return res.status(404).json({ message: "User not found", error: true });
  }
});

server.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
server.use("/api/v1", studentRouter);
server.use("/api/v1", courseRouter);
server.use("/api/v1", enrollmentRouter);
server.use("/api/v1", teacherRouter);

server.listen(port, () => {
  console.log(`App running on ${port}`);
});
