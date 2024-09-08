import { BodyDto, Resume } from '@app/dto';

export const excludeSubject = (body: BodyDto[], resume: Resume) => {
  return {
    table: {
      headerRows: 1,
      widths: ['*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'], // 11 columnas
      body: [
        [
          {
            text: 'Cuerpo Documento',
            bold: true,
            colSpan: 7,
            alignment: 'center',
            style: 'header', // Aplica el estilo 'header'
          },
          ...Array(6).fill({ text: '' }),
        ],
        [
          { text: 'N. Item', style: 'subHeader' },
          { text: 'Cantidad', style: 'subHeader' },
          { text: 'U. Medida', style: 'subHeader' },
          { text: 'Descripción', style: 'subHeader' },
          { text: 'Precio Uni.', style: 'subHeader' },
          { text: 'Descuento', style: 'subHeader' },
          { text: 'Ventas', style: 'subHeader' },
        ],
        ...mapCCF(body),

        [
          {
            text: '',
            colSpan: 4,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(3).fill({ text: '', style: 'small' }),
          { text: 'Sumatoria de Ventas:', colSpan: 2, style: 'small' },
          { text: '', style: 'small' },
          { text: resume.totalCompra, style: 'small' },
        ],
        [
          {
            text: '',
            colSpan: 4,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(3).fill({ text: '', style: 'small' }),
          { text: 'Sub-Total:', colSpan: 2, style: 'small' },
          { text: '', style: 'small' },
          { text: resume.subTotal, style: 'small' },
        ],
        [
          {
            text: '',
            colSpan: 4,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(3).fill({ text: '', style: 'small' }),
          { text: 'Total a Pagar:', colSpan: 2, style: 'small' },
          { text: '', style: 'small' },
          { text: resume.totalPagar, style: 'small' },
        ],
        [
          {
            text: '',
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(6).fill({ text: '', style: 'small' }),
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
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          ...Array(6).fill({ text: '', style: 'small' }),
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
      { text: item.descripcion, style: 'small' },
      { text: item.precioUni, style: 'small' },
      { text: item.montoDescu, style: 'small' },
      { text: item?.compra ?? '$0.00', style: 'small' },
    ];
  });
};
