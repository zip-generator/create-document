import { BodyDto } from '@app/dto';
import { ContentTable } from 'pdfmake/interfaces';
import { PropTable } from '../interfaces';

type PropRetencionTable = Omit<PropTable, 'nextDay'>;

export const retencionTable = ({
  body,
  resume,
  extension,
}: PropRetencionTable): ContentTable => {
  return {
    table: {
      headerRows: 1,
      widths: ['auto', 'auto', 'auto', 'auto', '*', 'auto', 'auto'],
      body: [
        [
          {
            text: 'Cuerpo Documento',
            bold: true,
            colSpan: 7,
            alignment: 'center',
            style: 'header',
          },
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
            text: 'Tipo Doc. Relacionado',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'N. Doc. Relacionado',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Fecha Doc.',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            colSpan: 2,
            text: 'Descripción',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'Monto Sujeto a Retencion',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
          {
            text: 'IVA Retenido',
            style: 'subHeader',
            fillColor: '#4e8bc8',
            color: '#fbfbfb',
          },
        ],
        ...mapRows(body),
        [
          {
            text: [
              {
                text: 'Valor En Letras: ',
                style: 'smallBold',
              },
              {
                text: `${resume?.['totalIVAretenidoLetras']}`,
                style: 'small',
              },
            ],
            colSpan: 5, // Ocupa las primeras 5 columnas
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: 'Total Monto sujeto a Retención:', style: 'smallBold' },
          {
            text: `${resume?.['totalSujetoRetencion'] ?? '0.00'}`,
            style: 'small',
            alignment: 'right',
          },
        ],
        [
          {
            text: '',
            colSpan: 5,
            style: 'smallBold',
            alignment: 'center',
            border: [false, false, false, false],
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: 'Total IVA Retenido:', style: 'smallBold' },
          {
            text: `${resume?.['totalIVAretenido'] ?? '0.00'}`,
            style: 'small',
            alignment: 'right',
          },
        ],
        [
          {
            text: `\n`,
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
            border: [false, false, false, false],
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
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
                        bold: false,
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
        ],
        [
          {
            text: 'Observación General: ',
            colSpan: 7,
            style: 'smallBold',
            alignment: 'center',
          },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
          { text: '', style: 'small' },
        ],
        [
          {
            text: extension?.['observaciones'] ?? '\n',
            colSpan: 7,
            style: 'small',
            alignment: 'center',
          },
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

const mapRows = (ccf: BodyDto[]): any[][] => {
  return ccf.map((item) => {
    return [
      { text: item.numItem ?? '\n', style: 'small', alignment: 'left' },
      { text: item?.['tipoDoc'] ?? '\n', style: 'small', alignment: 'left' },
      {
        text: item?.['numDocumento'] ?? '\n',
        style: 'small',
        alignment: 'left',
      },
      {
        text: item?.['fechaEmision'] ?? '\n',
        style: 'small',
        alignment: 'left',
      },
      {
        text: item?.descripcion ?? '\n',
        colSpan: 2,
        style: 'small',
        alignment: 'left',
      },
      {
        text: item?.['montoSujetoGrav'] ?? '\n', // Establece un valor por defecto si es nulo
        style: 'small',
        alignment: 'right',
      },
      {
        text: item?.['ivaRetenido'] ?? '\n',
        style: 'small',
        alignment: 'right',
      },
    ];
  });
};
