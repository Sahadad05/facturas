const mongoose = require('mongoose');
const Schema = mongoose.Schema

const rfcSchema = new Schema ({
  rfc: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['Tipo', 'Comisiones', 'Transacciones'],
    default: 'Tipo',
    required: true
  },
  mes: {
    type: String,
    enum: [
      'Mes',
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    default: 'Mes',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated-at'
  }
});

module.exports = mongoose.model('Factura', rfcSchema);
 