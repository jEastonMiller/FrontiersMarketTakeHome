import {Response, NextFunction} from "express";
import {db} from "../config/firebase";

type UserType = {
  email: string,
  password: string
};

type Request = {
  body: UserType,
  params: {userId: string}
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  const {email, password} = req.body;
  if (res.locals.userExists === true) {
    res.locals.newUserRes = "Email already registered";
    return next();
  }
  try {
    const users = db.collection("users").doc();
    const userObj = {
      id: users.id,
      email,
      password,
    };
    users.set(userObj);
    res.locals.newUserRes = {
      userObj,
    };
    return next();
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const {email, password} = req.body;

  try {
    const userSnapshot = await db.collection("users").where("email", "==", email).get();

    if (userSnapshot.empty) {
      res.status(401).json({error: "Invalid credentials"});
      return next;
    }

    let userID = "";
    userSnapshot.forEach((doc) => {
      const user = doc.data();

      if (user.password === password) {
        userID = doc.id;
      }
    });
    res.locals.cred = userSnapshot;
    if (userID) {
      console.log("'howdy'");
    } else {
      res.status(401).json({error: "Invalid credentials"});
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

const checkUsers = async (req: Request, res: Response, next: NextFunction) => {
  const {email} = req.body;
  try {
    const usersRef = db.collection("users");
    const querySnapshot = await usersRef.where("email", "==", email).get();

    const userExists = !querySnapshot.empty;

    res.locals.userExists = userExists;
    return next();
  } catch (error) {
    return next(error);
  }
};

export {
  addUser,
  login,
  checkUsers,
};
