import { BodyDto, Resume } from '@app/dto';

export const excludeSubject = (body: BodyDto[], resume: Resume) => {
  return {
    table: {
      headerRows: 1,
      widths: ['*', 'auto', 'auto', 'auto', 'auto', 'auto'],
      body: [
        [
          {
            text: 'Cuerpo Documento',
            bold: true,
            colSpan: 6,
            alignment: 'center',
            style: 'header', // Aplica el estilo 'header'
          },
          ...Array(5).fill({ text: '' }),
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
            text: 'Descripción',
            colSpan: 2,
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
            text: 'Ventas',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
        ],
        ...mapCCF(body),

        [
          {
            text: '',
            colSpan: 2,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(2).fill({ text: '', style: 'small' }),
          { text: 'Sumatoria de Ventas:', colSpan: 2, style: 'small' },
          { text: '', style: 'small' },
          { text: resume.totalCompra, style: 'small', alignment: 'right' },
        ],
        [
          {
            text: '',
            colSpan: 3,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(2).fill({ text: '', style: 'small' }),
          { text: 'Sub-Total:', colSpan: 2, style: 'small' },
          { text: '', style: 'small' },
          { text: resume.subTotal, style: 'small', alignment: 'right' },
        ],
        [
          {
            text: '',
            colSpan: 3,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(2).fill({ text: '', style: 'small' }),
          { text: 'Total a Pagar:', colSpan: 2, style: 'small' },
          { text: '', style: 'small' },
          { text: resume.totalPagar, style: 'small', alignment: 'right' },
        ],
        [
          {
            text: '',
            colSpan: 6,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(5).fill({ text: '', style: 'small' }),
        ],
        [
          {
            columns: [
              {
                stack: [
                  {
                    stack: [
                      { text: 'Valor En Letras:', style: 'smallBold' },
                      { text: resume?.totalLetras ?? '', style: 'smallBold' },
                    ],
                  },
                  {
                    stack: [
                      { text: 'Observaciones:', style: 'smallBold' },
                      {
                        text: resume?.observaciones ?? '',
                        style: 'smallBold',
                      },
                    ],
                  },
                ],
              },
              {
                stack: [
                  {
                    stack: [
                      {
                        text: 'Condicion de la Operacion:',
                        style: 'smallBold',
                      },
                      {
                        text: resume?.condicionOperacion ?? '',
                        style: 'smallBold',
                      },
                    ],
                  },
                  {
                    stack: [
                      { text: '', style: 'smallBold' },
                      { text: '', style: 'smallBold' },
                    ],
                  },
                ],
              },
            ],
            colSpan: 6,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(5).fill({ text: '', style: 'small' }),
        ],
      ],
    },
  };
};
const mapCCF = (ccf: BodyDto[]): any[][] => {
  return ccf.map((item) => {
    return [
      { text: item.numItem ?? '\n', style: 'small', alignment: 'left' },
      { text: item.cantidad ?? '\n', style: 'small', alignment: 'left' },
      { text: item.descripcion ?? '\n', style: 'small', alignment: 'left' },
      { text: item.precioUni ?? '\n', style: 'small', alignment: 'right' },
      { text: item.montoDescu ?? '\n', style: 'small', alignment: 'right' },
      { text: item?.compra ?? '\n', style: 'small', alignment: 'right' },
    ];
  });
};
