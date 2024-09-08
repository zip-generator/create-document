import fs from 'fs';
import path from 'path';

/**
 * Convierte una imagen a una cadena de base64 con formato data URL.
 *
 * @param imagePath - Ruta de la imagen.
 * @returns Cadena base64 de la imagen con prefijo de data URL.
 * @throws Error si el archivo de imagen no existe o no se puede leer.
 */
export const generateDataImage = (imagePath: string): string => {
  try {
    // Obtener la ruta absoluta de la imagen
    const absolutePath = path.resolve(imagePath);

    console.log({});
    // Leer la imagen como un buffer y convertirla a base64
    const imageBuffer = fs.readFileSync(absolutePath);
    const imageBase64 = imageBuffer.toString('base64');

    // Obtener la extensión del archivo para definir el tipo MIME
    const ext = path.extname(absolutePath).slice(1); // Quita el punto de la extensión
    const mimeType = `image/${ext}`;

    // Devuelve la imagen en formato data URL
    return `data:${mimeType};base64,${imageBase64}`;
  } catch (error) {
    throw new Error(`Error al leer la imagen: ${error.message}`);
  }
};
