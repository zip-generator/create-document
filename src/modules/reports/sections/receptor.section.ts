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
      { text: 'Información de Receptor', margin: [10, 6] },
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
        margin: [10, 10],
      },
      {
        columns: [
          {
            stack: [
              {
                text: 'Nombre o Razón Social:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: name,
                style: 'small',
              },
            ],
          },
          {
            stack: [
              {
                text: 'Documento:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: document,
                style: 'small',
              },
            ],
          },
          {
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
            stack: [
              {
                text: 'NRC:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: nrc,
                style: 'small',
              },
            ],
          },
          {
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
            stack: [
              {
                text: 'Aseguradora:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: insuranceCompany ?? 'N/A ',
                style: 'small',
              },
            ],
          },
          {
            stack: [
              {
                text: 'Médico:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: doctor ?? 'N/A ',
                style: 'small',
              },
            ],
          },
          {
            stack: [
              {
                text: 'Atención:',
                style: 'subHeader',
                bold: true,
              },
              {
                text: atencionId ?? 'N/A',
                style: 'small',
              },
            ],
          },
        ],
      },
    ],
  };
};
