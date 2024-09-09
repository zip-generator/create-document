import { BodyDto } from '@app/dto';
import { ContentTable } from 'pdfmake/interfaces';
import { PropTable } from '../interfaces';

export const ccfTable = ({
  body,
  resume,
  nextDay,
  extension,
}: PropTable): ContentTable => {
  return {
    table: {
      headerRows: 1,
      widths: [
        '*',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
        'auto',
      ],
      body: [
        [
          {
            text: 'Cuerpo Documento',
            bold: true,
            colSpan: 10,
            alignment: 'center',
            style: 'header',
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
        ],
        [
          {
            text: 'N. Item',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Cantidad',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Código',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Serie',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            colSpan: 3,
            text: 'Descripción',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Precio Uni.',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Descuento',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'V. No Sujeta',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'V. Excenta',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'V. Gravada',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
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
            colSpan: 6,
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: 'Total Operaciones:', style: 'smallBold' },
          { text: 'No Sujetas:', style: 'smallBold' },
          { text: 'Excentas:', style: 'smallBold' },
          { text: 'Gravadas:', style: 'smallBold' },
        ],
        [
          {
            text: 'Extensión',
            colSpan: 6,
            style: 'smallBold',
            alignment: 'center',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small', alignment: 'right' },
          { text: '$0.00', style: 'small', alignment: 'right' },
          {
            text: `${resume?.totalExcenta ?? '0.00'}`,
            style: 'small',
            alignment: 'right',
          },
          { text: resume.totalGravada, style: 'small', alignment: 'right' },
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
                        text: 'Nombre Entrega:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: extension.nombreEntrega ?? '',
                        style: 'small',
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'Nombre Recibe:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: extension.nombreRecibe ?? '',
                        style: 'small',
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
                    margin: [2, 2],
                    stack: [
                      {
                        text: 'No. Documento:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: extension.noDocumentoEntrega,
                        style: 'small',
                      },
                    ],
                  },
                  {
                    margin: [2, 2],
                    stack: [
                      {
                        text: 'No. Documento:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: extension.noDocumentoRecibe,
                        style: 'small',
                      },
                    ],
                  },
                ],
              },
            ],
            colSpan: 6,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            colSpan: 3,
            margin: [2, 2],
            stack: [
              { text: 'Total descuentos:', style: 'smallBold' },
              {
                text: 'Suma de operaciones sin impuesto:',
                style: 'smallBold',
              },
              {
                text: 'Impuesto al Valor Agregado 13%:',
                style: 'smallBold',
              },
            ],
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            margin: [2, 2],
            stack: [
              { text: resume.totalDescu, style: 'small', alignment: 'right' },
              { text: resume.subTotal, style: 'small', alignment: 'right' },
              { text: resume.totalIva, style: 'small', alignment: 'right' },
            ],
          },
        ],
        [
          {
            text: 'Observaciones',
            colSpan: 6,
            style: 'smallBold',
            alignment: 'center',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            text: 'IVA percibido:',
            colSpan: 3,
            style: 'smallBold',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '$0.00', style: 'small', alignment: 'right' },
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
                        text: 'Copago:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '$0.00 \n',
                        style: 'small',
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'Deducible:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '$0.00 \n',
                        style: 'small',
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
                        text: 'Coaseguro:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '$0.00 \n',
                        style: 'small',
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: 'Porcentaje Coaseguro:',
                        style: {
                          fontSize: 9,
                          bold: true,
                        },
                      },
                      {
                        text: '0.00% \n',
                        style: 'small',
                      },
                    ],
                  },
                ],
              },
            ],
            colSpan: 6,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            colSpan: 3,
            margin: [2, 2],
            stack: [
              {
                text: 'Monto total de la operación:',
                margin: [1, 2],
                style: 'smallBold',
              },
              {
                text: 'Total otros montos no afectos:',
                margin: [1, 2],
                style: 'smallBold',
              },
              {
                text: 'Total A Pagar:',
                margin: [1, 2],
                style: 'smallBold',
              },
            ],
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          {
            margin: [2, 2],
            stack: [
              {
                text: `${resume.montoTotalOperacion} `,
                style: 'small',
                margin: [2, 2],
                alignment: 'right',
              },
              {
                text: '$0.00 ',
                style: 'small',
                margin: [1, 2],
                alignment: 'right',
              },
              {
                text: `${resume.totalPagar} `,
                style: 'small',
                margin: [2, 2],
                alignment: 'right',
              },
            ],
          },
        ],
        [
          {
            text: `Por disposición del Ministerio de Hacienda este documento electrónico no se podrá invalidar posterior a ${nextDay} a las 23:59:59 horas`,
            colSpan: 10,
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
        ],
      ],
    },
  };
};

const mapCCF = (ccf: BodyDto[]): any[][] => {
  return ccf.map((item) => {
    return [
      { text: item.numItem, style: 'small', alignment: 'left' },
      { text: item.cantidad, style: 'small', alignment: 'right' },
      { text: item.codigo, style: 'small', alignment: 'left' },
      { text: item.serie, style: 'small', alignment: 'left' },
      { text: item.descripcion, colSpan: 3, style: 'small', alignment: 'left' },
      { text: item.precioUni, style: 'small', alignment: 'right' },
      { text: item.montoDescu, style: 'small', alignment: 'right' },
      { text: item.ventaNoSuj, style: 'small', alignment: 'right' },
      { text: item.ventaExenta, style: 'small', alignment: 'right' },
      { text: item.ventaGravada, style: 'small', alignment: 'right' },
    ];
  });
};
