import { addNewUser, getUsers, UpdateUser, deleteUser } from "../controllers/userControllers";

const routes = (app) => {
  app
    .route("/users")

    // get endpoint
    .get(getUsers)

    // POST endpoint
    .post(addNewUser);

  app
    .route("/user/:UserId")

    // update a specific player
    .put(UpdateUser)

    // delete a specific player
    .delete(deleteUser);
};

export default routes;
