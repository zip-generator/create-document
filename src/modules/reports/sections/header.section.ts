import { join } from 'path';
import { readFileSync } from 'fs';
import { ContentColumns } from 'pdfmake/interfaces';

interface HeaderSectionOptions {
  generationCode: string;
  receptionStamp: string;
  controlNumber: string;
  emitionDate: string;
  emitionTime: string;
}

/**
 * Convierte una imagen a Base64.
 * @param relativePath - Ruta relativa a la imagen desde el directorio actual.
 * @returns {string} - La cadena en Base64 de la imagen.
 */
function convertImageToBase64(relativePath: string): string {
  try {
    // Construye la ruta absoluta a la imagen
    const imagePath = join(process.cwd(), relativePath);

    // Lee el archivo de la imagen y conviértelo a Base64
    const imageBase64 = readFileSync(imagePath, { encoding: 'base64' });

    // Retorna la cadena base64 junto con el tipo de imagen
    return `data:image/png;base64,${imageBase64}`;
  } catch (error) {
    console.error('Error al convertir la imagen a Base64:', error);
    throw new Error('No se pudo convertir la imagen a Base64');
  }
}

// Ejemplo de uso
const headerSection = (options: HeaderSectionOptions): ContentColumns => {
  const {
    controlNumber,
    emitionDate,
    emitionTime,
    generationCode,
    receptionStamp,
  } = options;

  const headerContent: ContentColumns = {
    margin: [10, 10],
    columns: [
      {
        text: [
          {
            text: 'INVERSIONES MEDICAS DE ORIENTE SA DE CV \n',
            style: 'header',
          },
          {
            text: '86100-Servicios Medicos Hospitalarios  \n',
            style: 'small',
          },
          {
            text: 'Final 9a Avenida Sur y Calle La Paz, Ba. La Merced Atras de Hotel Tropico Inn, San Miguel.  \n',
            style: 'small',
          },
          {
            text: [
              { text: 'Telefono: ', style: 'smallBold' },
              { text: '26610001 \n', style: 'small' },
            ],
          },
          {
            text: [
              { text: 'Email: ', style: 'smallBold' },
              {
                text: 'no-reply@hospitaldeespecialidades.com.sv \n',
                style: 'small',
              },
            ],
          },
          {
            text: [
              { text: 'Categoria: ', style: 'smallBold' },
              { text: 'Gran contribuyente \n', style: 'small' },
            ],
          },
          {
            text: [
              { text: 'Tipo Establecimiento: ', style: 'smallBold' },
              { text: 'Casa Matriz \n', style: 'small' },
            ],
          },
          {
            text: [
              { text: 'Nit: ', style: 'smallBold' },
              { text: '06141505911029 ', style: 'small' },
              { text: 'NRC: ', style: 'smallBold' },
              { text: ' 504700\n', style: 'small' },
            ],
          },
        ],
        width: '45%',
        marginRight: 5,
      },
      {
        width: '55%',
        table: {
          headerRows: 1,
          widths: ['100%'],
          body: [
            [
              {
                text: [
                  {
                    text: 'DOCUMENTO TRIBUTARIO ELECTRÓNICO\n',
                    style: 'subHeader',
                    alignment: 'center',
                  },
                  {
                    text: 'COMPROBANTE DE FACTURA CONSUMIDOR FINAL',
                    alignment: 'center',
                    style: 'header',
                  },
                ],
              },
            ],
            [
              {
                text: [
                  { text: 'Codigo Generación: ', style: 'smallBold' },
                  {
                    text: `${generationCode}`,
                    style: 'small',
                  },
                ],
              },
            ],
            [
              {
                text: [
                  {
                    text: [
                      { text: 'Sello Recepción: ', style: 'smallBold' },
                      {
                        text: `${receptionStamp}`,
                        style: 'small',
                      },
                    ],
                  },
                ],
              },
            ],
            [
              {
                text: [
                  { text: 'Número de control: ', style: 'smallBold' },
                  {
                    text: `${controlNumber}`,
                    style: 'small',
                  },
                ],
              },
            ],
            [
              {
                columns: [
                  {
                    alignment: 'left',
                    text: [
                      {
                        text: [
                          {
                            text: 'Modélo facturación: ',
                            style: 'smallBold',
                          },
                          { text: 'Previo', style: 'small' },
                        ],
                      },
                    ],
                  },
                  {
                    alignment: 'right',
                    text: [
                      {
                        text: [
                          {
                            text: 'Versión del Json: ',
                            style: 'smallBold',
                          },
                          { text: '1', style: 'small' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            [
              {
                columns: [
                  {
                    alignment: 'left',
                    text: [
                      {
                        text: [
                          {
                            text: 'Tipo de transmisión: ',
                            style: 'smallBold',
                          },
                          { text: 'Normal', style: 'small' },
                        ],
                      },
                    ],
                    width: '50%',
                  },
                  {
                    alignment: 'right',
                    text: [
                      {
                        text: [
                          { text: 'Fecha emisión: ', style: 'smallBold' },
                          { text: `${emitionDate}`, style: 'small' },
                        ],
                      },
                    ],
                    align: 'end',
                    width: '50%',
                  },
                ],
              },
            ],
            [
              {
                columns: [
                  {
                    alignment: 'left',
                    text: [
                      {
                        text: [
                          { text: 'Hora de emisión: ', style: 'smallBold' },
                          { text: `${emitionTime}`, style: 'small' },
                        ],
                      },
                    ],
                  },
                  {
                    alignment: 'right',
                    text: [
                      {
                        text: [
                          {
                            text: 'Transacción contable: ',
                            style: 'smallBold',
                          },
                          { text: '89859', style: 'small' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          ],
        },
      },
    ],
  };

  return headerContent;
};

export { headerSection };
