import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const userRouter = Router();

// 1. User yaratish

userRouter.post("/user", userController.create);

// 2. GetAllUser =-> barcha userlarni olib kelish
userRouter.get("/user", userController.findAll);
// 3. GetOne =-> bitta userni olib kelish
// http://localhost:4000/user/1
userRouter.get("/user/:id", userController.findOne);
// 4. userni ma'lumotni yangilsh

userRouter.put("/user/:id", userController.update);
// 5. userni ro'yhatdan o'chirish.
userRouter.delete("/user/:id", userController.remove);
