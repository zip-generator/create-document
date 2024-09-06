import { ContentStack } from 'pdfmake/interfaces';
import { ReceptorContentDTO } from '@app/dto';

export const receptorSection = (data: ReceptorContentDTO): ContentStack => {
  const { direction, document, econimicActivity, name, nrc, phone } = data;
  return {
    stack: [
      {
        columns: [
          {
            stack: [
              {
                text: 'Nombre o Razón Social:',
                style: 'smallBold',
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
                style: 'smallBold',
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
                style: 'smallBold',
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
                style: 'smallBold',
              },
              {
                text: `${direction.city}, ${direction.complement}, ${direction.department}`,
                style: 'small',
              },
            ],
          },
          {
            stack: [
              {
                text: 'NRC:',
                style: 'smallBold',
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
                text: 'Telefono:',
                style: 'smallBold',
              },
              {
                text: phone,
                style: 'small',
              },
            ],
          },
        ],
      },
    ],
  };
};
