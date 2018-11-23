const mongoose = require('mongoose');
const Schema = mongoose.Schema

const rfcSchema = new Schema ({
  rfc: {
    type: String,
    required: true,
  },
  tipo: {
    required: true,
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated-at'
  }
});

module.exports = mongoose.model('Factura', rfcSchema);
 