import { BodyDto, Resume } from '@app/dto';
import { ContentTable } from 'pdfmake/interfaces';

export const tableSection = (body: BodyDto[], resume: Resume): ContentTable => {
  return {
    table: {
      headerRows: 1,
      widths: Array(11).fill('auto'), // 11 columnas
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
        ...mapCCF(body),
        [
          {
            text: [
              {
                text: 'Valor En Letras:',
                style: 'smallBold',
              },
              {
                text: `${resume.totalLetras}`,
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
          { text: 'Total Operaciones:', style: 'small' },
          { text: 'No Sujetas', style: 'small' },
          { text: 'Excentas', style: 'small' },
          { text: 'Gravadas', style: 'small' },
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
          { text: resume.totalExcenta, style: 'small' },
          { text: resume.totalGravada, style: 'small' },
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
          {
            colSpan: 3,
            stack: [
              { text: 'Total descuentos', style: 'small' },
              {
                text: 'Suma de operaciones sin impuesto',
                style: 'small',
              },
              {
                text: 'Impuesto al Valor Agregado 13%',
                style: 'small',
              },
            ],
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            stack: [
              { text: resume.totalDescu, style: 'small' },
              { text: resume.subTotal, style: 'small' },
              { text: resume.totalIva, style: 'small' },
            ],
          },
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
          {
            text: 'IVA percibido',
            colSpan: 3,
            style: 'small',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
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
          {
            colSpan: 2,
            stack: [
              { text: 'Monto total de la operación', style: 'small' },
              {
                text: 'Total otros montos no afectos',
                style: 'small',
              },
              {
                text: 'Total A Pagar',
                style: 'small',
              },
            ],
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            stack: [
              { text: resume.montoTotalOperacion, style: 'small' },
              { text: '$0.00', style: 'small' },
              { text: resume.totalPagar, style: 'small' },
            ],
          },
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

const mapCCF = (ccf: BodyDto[]): any[][] => {
  return ccf.map((item) => {
    return [
      { text: item.numItem, style: 'small' },
      { text: item.cantidad, style: 'small' },
      { text: item.uniMedida, style: 'small' },
      { text: item.codigo, style: 'small' },
      { text: item.serie, style: 'small' },
      { text: item.descripcion, style: 'small' },
      { text: item.precioUni, style: 'small' },
      { text: item.montoDescu, style: 'small' },
      { text: item.ventaNoSuj, style: 'small' },
      { text: item.ventaExenta, style: 'small' },
      { text: item.ventaGravada, style: 'small' },
    ];
  });
};
