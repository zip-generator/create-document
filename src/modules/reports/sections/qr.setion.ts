import { ContentColumns } from 'pdfmake/interfaces';
import { HeaderSectionOptionsDTO } from '@app/dto';

interface QrContent extends Omit<HeaderSectionOptionsDTO, 'url'> {
  mhPortal: string;
}

export const qrSection = ({
  generationCode,
  controlNumber,
  receptionStamp,
  mhPortal,
}: QrContent): ContentColumns => {
  return {
    columns: [
      {
        alignment: 'right',
        margin: [10, 20],
        stack: [
          { text: 'MH Portal', alignment: 'center', margin: [0, 0, 0, 5] },
          {
            qr: mhPortal ?? 'Problemas con el código QR',
            fit: 110,
            alignment: 'center',
          },
        ],
      },
      {
        alignment: 'right',
        margin: [10, 20],
        stack: [
          {
            text: 'Código de Generación',
            alignment: 'center',
            margin: [0, 0, 0, 5],
          },
          {
            qr: generationCode ?? 'Problemas con el código QR',
            fit: 80,
            alignment: 'center',
          },
        ],
      },
      {
        alignment: 'right',
        margin: [10, 20],
        stack: [
          {
            text: 'Número de Control',
            alignment: 'center',
            margin: [0, 0, 0, 5],
          },
          {
            qr: controlNumber ?? 'Problemas con el código QR',
            fit: 80,
            alignment: 'center',
          },
        ],
      },
      {
        alignment: 'right',
        margin: [10, 20],
        stack: [
          {
            text: 'Sello de Recepción',
            alignment: 'center',
            margin: [0, 0, 0, 5],
          },
          {
            qr: receptionStamp ?? 'Problemas con el código QR',
            fit: 80,
            alignment: 'center',
          },
        ],
      },
    ],
  };
};
