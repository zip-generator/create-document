import { ContentTable } from 'pdfmake/interfaces';

export const tableSection = (): ContentTable => {
  return {
    table: {
      headerRows: 1,
      widths: [
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
      ], // 11 columnas
      body: [
        [
          {
            text: 'Cuerpo Documento',
            bold: true,
            colSpan: 11,
            alignment: 'center',
            style: 'header', // Aplica el estilo 'header'
          },
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '', // Celdas vacías para completar el colSpan
        ],
        [
          { text: 'N. Item', style: 'subHeader' },
          { text: 'Cantidad', style: 'subHeader' },
          { text: 'U. Medida', style: 'subHeader' },
          { text: 'Código', style: 'subHeader' },
          { text: 'Serie', style: 'subHeader' },
          { text: 'Descripción', style: 'subHeader' },
          { text: 'Precio Uni.', style: 'subHeader' },
          { text: 'Descuento', style: 'subHeader' },
          { text: 'V. No Sujeta', style: 'subHeader' },
          { text: 'V. Excenta', style: 'subHeader' },
          { text: 'V. Gravada', style: 'subHeader' },
        ],
        [
          { text: '1', style: 'small' },
          { text: '01', style: 'small' },
          { text: '3', style: 'small' },
          { text: '001', style: 'small' },
          { text: '100', style: 'small' },
          { text: 'COAS', style: 'small' },
          { text: '$1.50', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
        ],
        [
          {
            text: [
              {
                text: 'Valor En Letras:',
                style: 'smallBold',
              },
              {
                text: 'CIEN DOLARES \n',
                style: 'small',
              },
            ],
            colSpan: 7,
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
        ],
        [
          {
            text: 'Extensión',
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
        ],
        [
          {
            columns: [
              {
                marginLeft: 5,
                alignment: 'left',
                stack: [
                  {
                    stack: [
                      {
                        text: 'Nombre Entrega',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: 'ANDREA MARIBEL ARANA VILLALTA',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'Nombre Recibe',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: 'ANDREA MARIBEL ARANA VILLALTA',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                ],
              },
              {
                marginRight: 5,
                alignment: 'right',
                stack: [
                  {
                    stack: [
                      {
                        text: 'No. Documento',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '060171293 \n',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'No. Documento',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '010171293 \n',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
        ],
        [
          {
            text: 'Observaciones',
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
        ],
        [
          {
            columns: [
              {
                alignment: 'left',
                stack: [
                  {
                    stack: [
                      {
                        text: 'Copago',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '$0.00 \n',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'Deducible',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '$0.00 \n',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                ],
              },
              {
                alignment: 'right',
                stack: [
                  {
                    stack: [
                      {
                        text: 'Coaseguro',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '$0.00 \n',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'Porcentaje Coaseguro',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '0.00% \n',
                        style: {
                          fontSize: 9,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
          { text: '$0.00', style: 'small' },
        ],
        [
          {
            text: 'Por disposición del Ministerio de Hacienda este documento electrónico no se podrá invalidar posterior a 12-04-2024 23:59pm',
            colSpan: 11,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
        ],
      ],
    },
  };
};
