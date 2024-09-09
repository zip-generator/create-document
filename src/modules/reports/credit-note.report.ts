import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection, qrSection, receptorSection } from './sections';
import { styles } from './styles';
import { DocumentDataDTO } from '@app/dto';
import { generateDataImage } from '@app/utils';
import { join } from 'path';
import { creditNoteTable } from './sections/creditNote.section';

const logo: Content = {
  image: generateDataImage(join(process.cwd(), 'dist/public/images/logo.jpg')),
  width: 150,
  height: 50,
  margin: [10, 5],
};
export const creditNoteReport = (
  data: DocumentDataDTO,
  invoiceName: string,
): TDocumentDefinitions => {
  const { header, receptor, body, resume, fechaNextDay, extension } = data;
  const { url, ...rest } = header;
  return {
    header: logo,
    pageMargins: [10, 70],
    content: [
      headerSection({ ...rest, invoiceName }),
      qrSection({
        ...rest,
        mhPortal: url,
      }),
      receptorSection(receptor),
      creditNoteTable({ body, resume, nextDay: fechaNextDay, extension }),
    ],
    styles,
  };
};
