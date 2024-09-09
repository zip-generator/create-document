import { ReceptorContentDTO } from '@app/dto';
import { ContentStack } from 'pdfmake/interfaces';

export const receptorSection = (data: ReceptorContentDTO): ContentStack => {
  const {
    direction,
    document,
    econimicActivity,
    name,
    nrc,
    phone,
    insuranceCompany,
    doctor,
    atencionId,
  } = data;
  return {
    margin: [0, 5],
    stack: [
      { text: 'Información de Receptor', margin: [10, 5] },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 550,
            y2: 0,
            lineWidth: 1, // Grosor de la línea
            lineColor: 'gray', // Color de la línea
          },
        ],
        margin: [5, 5],
      },
      {
        columns: [
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Nombre o Razón Social:',
                style: 'subHeader',
              },
              {
                text: name,
                style: 'small',
              },
            ],
          },
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Documento:',
                style: 'subHeader',
              },
              {
                text: document,
                style: 'small',
              },
            ],
          },
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Actividad Economica:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: econimicActivity,
                style: 'small',
              },
            ],
          },
        ],
      },
      {
        columns: [
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Direccion:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: direction.complement,
                style: 'small',
              },
            ],
          },
          {
            margin: [2, 2],
            stack: [
              {
                text: 'NRC:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: nrc ?? '',
                style: 'small',
              },
            ],
          },
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Télefono:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: phone,
                style: 'small',
              },
            ],
          },
        ],
      },
      {
        columns: [
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Aseguradora:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: insuranceCompany ?? ' ',
                style: 'small',
              },
            ],
          },
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Médico:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: doctor ?? ' ',
                style: 'small',
              },
            ],
          },
          {
            margin: [2, 2],
            stack: [
              {
                text: 'Atención:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: atencionId ?? '',
                style: 'small',
              },
            ],
          },
        ],
      },
    ],
  };
};
