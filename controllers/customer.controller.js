import { Customer } from "../models/customer.model.js";

const getAllCustomers = async (req, res) => {
  const customers = await Customer.find({}, { _id: 1, name: 1});
  return res.status(200).json(customers);
};

const getCustomer = async (req, res) => {
  const { id } = req.params;

  const customer = await Customer.findOne({ _id: id });

  if (!customer) {
    return res.status(404).json({ message: `Customer with id "${id}" not found.` });
  }

  return res.status(200).json(customer);
};

export { getAllCustomers, getCustomer };

