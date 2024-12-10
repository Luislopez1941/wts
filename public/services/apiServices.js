import ApiService from './configApi.js'; // Asegúrate de que la ruta sea correcta

const getLocations = async () => {
  try {
    const response = await ApiService.get('get_locations');
    return response;
  } catch (error) {
    console.error('Error al obtener ubicaciones:', error);
  }
};


const getTypesServies = async () => {
  try {
    const response = await ApiService.get('get_types_servies');
    return response;
  } catch (error) {
    console.error('Error al obtener ubicaciones:', error);
  }
};

// Exportar la función getLocations
export { getLocations, getTypesServies };


