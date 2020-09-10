const Usuario = require('./entities/Usuario');

function isValidEmail(email) {
  const invalidEmails = ['@gmail.com', '@yahoo.com', '@hotmail.com'];
  let isValid = true;

  try {
    invalidEmails.forEach((invalidEmail) => {
      if (email.includes(invalidEmail)) throw error;
    });
  } catch (err) {
    isValid = false;
  }

  return isValid;
}

function isValidPhone(phone) {
  const regex = /^[0-9]+$/;

  return regex.test(phone);
}

// Middleware para checar que los datos del usuario sean correctos.
module.exports = {
  checkUser: function (req, res, next) {
    const { nombre, apellido, edad, telefono, email, direccion } = req.body;

    if (!nombre || !apellido || !edad || !telefono || !email || !direccion) {
      res.json({ status: 406, message: 'Debes ingresar todos los datos.' });
      return;
    } else {
      if (!isValidEmail(email)) {
        res.json({
          status: 400,
          message: `No se aceptan emails con terminación gmail.com, yahoo.com o hotmail.com`,
        });

        return;
      } else if (isNaN(parseInt(edad))) {
        res.json({
          status: 400,
          message: 'Solo se aceptan caracteres numéricos para la edad.',
        });

        return;
      } else if (!isValidPhone(telefono)) {
        res.json({
          status: 400,
          message: 'Solo se aceptan caracteres numéricos para el teléfono.',
        });

        return;
      }
    }

    req.user = new Usuario(nombre, apellido, edad, telefono, email, direccion);

    next();
  },
};
