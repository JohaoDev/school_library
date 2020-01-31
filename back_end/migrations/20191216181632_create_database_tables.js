;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'tipo_persona', function( table ) {
    table.increments('id');
    table.string('tipo_persona_nombre').notNullable().unique();
    table.string('tipo_persona_descripcion');
  })

  .createTable( 'estado_persona', function( table ) {
    table.increments('id');
    table.string('estado_persona_nombre').notNullable().unique();
    table.string('estado_persona_descripcion');
  })

  .createTable( 'estado_reserva', function( table ) {
    table.increments('id');
    table.string('estado_reserva_nombre').notNullable().unique();
    table.string('estado_reserva_descripcion');
  })

  .createTable( 'estado_libro', function( table ) {
    table.increments('id');
    table.string('estado_libro_nombre').notNullable().unique();
    table.string('estado_libro_descripcion');
  })

  .createTable( 'libro', function( table ) {
    table.increments('id');
    table.integer('estado_libro_id').references('id').inTable('estado_libro');
    table.string('libro_autor').notNullable();
    table.string('libro_pais').notNullable();
    table.string('libro_año').notNullable();
    table.string('libro_titulo').notNullable();
    table.string('libro_editorial').notNullable();
    table.string('libro_existencias').notNullable();
  })

  .createTable( 'persona', function( table ) {
    table.increments('id');
    table.integer('tipo_persona_id').references('id').inTable('tipo_persona');
    table.integer('estado_persona_id').references('id').inTable('estado_persona');
    table.string('persona_identificacion').notNullable().unique();
    table.string('persona_nombre').notNullable();
    table.string('persona_email').notNullable().unique();
    table.string('persona_direccion').notNullable();
    table.string('persona_telefono').notNullable();
    table.string('persona_clave').notNullable();
  })
  
  .createTable( 'reserva', function( table ) {
    table.increments('id');
    table.integer('estado_reserva_id').references('id').inTable('estado_reserva');
    table.integer('persona_id').references('id').inTable('persona');
    table.integer('libro_id').references('id').inTable('libro');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists( 'tipo_persona' )
  .dropTableIfExists( 'estado_persona' )
  .dropTableIfExists( 'estado_reserva' )
  .dropTableIfExists( 'estado_libro' )
  .dropTableIfExists( 'libro' )
  .dropTableIfExists( 'persona' )
  .dropTableIfExists( 'reserva' )
};