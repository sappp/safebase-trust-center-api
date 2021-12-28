import { Router } from "express";
import { getAllCustomers, getCustomer } from "../controllers/customer.controller.js";

const customerRoute = () => {
  const router = Router();

  router.get("/api/customers", getAllCustomers);
  router.get("/api/customers/:id", getCustomer);

  // need to be handled...
  // router.post("/customers", createUser);
  // router.patch("/customers/:id", updateUser);
  // router.delete("/customers/:id", deleteUser);

  return router;
};

export { customerRoute };
