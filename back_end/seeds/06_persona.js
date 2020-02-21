
exports.seed = function(knex) {
  return knex('persona').del()
    .then(function () {
      return knex('persona').insert([
        {
          id: 1,
          id_tipo_persona: 1,
          id_estado_persona: 1,
          identificacion: '1718842642',
          nombre: 'Johao Perlaza',
          email: 'jnp.zambrano@yavirac.edu.ec',
          direccion: 'La Tola',
          telefono: '0978970998',
          clave: '1234',
        },
        {
          id: 2, 
          id_tipo_persona: 1,
          id_estado_persona: 1,
          identificacion: '1751972991',
          nombre: 'Joel Simbaña',
          email: 'jas.vargas@yavirac.edu.ec',
          direccion: 'La Ferroviaria',
          telefono: '0979099544',
          clave: '1234',
        },
      ]);
    });
};
