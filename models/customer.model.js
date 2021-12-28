import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  secuirty_programs: [
    {
      name: String,
      field_type: {
        type: String,
        enum : ['BOOLEAN','API', 'LOGO'],
      },
      fields: [
        {
          type: Object,
          k: String,
          v: Boolean | String
        }
      ] 
    }
  ]
});

const Customer = mongoose.model("Customer", CustomerSchema);

export { Customer }
