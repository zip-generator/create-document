import { ContentColumns } from 'pdfmake/interfaces';
import { HeaderSectionOptionsDTO } from '@app/dto';

// Ejemplo de uso

type Options = Omit<HeaderSectionOptionsDTO, 'url'>;
interface NewOptions extends Options {
  invoiceName: string;
}
const headerSection = (options: NewOptions): ContentColumns => {
  const {
    controlNumber,
    emitionDate,
    emitionTime,
    generationCode,
    receptionStamp,
    invoiceName,
  } = options;

  const headerContent: ContentColumns = {
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
                    text: `${invoiceName}`,
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
