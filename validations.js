function createUsersValidation(data) {

    let { nombre, apellido, dni } = data;

    dni = parseInt(dni);
    
  if (  dni === null){
        throw new Error('EL dni es un campo obligatorio.')
    }
  if ( apellido === null || apellido == ""){
        throw new Error('EL apellido es un campo obligatorio.')
    }
  if ( typeof nombre !== "string"){
      throw new Error('EL nombre deberia ser un string')
  }
  if ( typeof apellido !== "string"){
    throw new Error('EL apellido deberia ser un string')
  }
  if ( typeof dni !== "number"){
    throw new Error('EL dni deberia ser un number')
  }
  if ( dni.toString().length > 10){
    throw new Error('EL dni solo permite 10 caracteres como máximo.')
  }

  if(Object.keys(data).length > 3){
    throw new Error('La cantidad de atributos máxima son 3: nombre, apellido y dni.')
  }
  
}

module.exports = {
    createUsersValidation,
};
