import User from "../model/userSchema.js";

export const userSignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json("Username already exist");
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json("user is successfully registered");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (request, response) => {
  try {
    const user = await User.findOne({
      email: request.body.username,
      password: request.body.password,
    });
    if (user) {
      return response
        .status(200)
        .json(`${request.body.username} login successfull`);
    } else {
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    console.log(error);
  }
};
