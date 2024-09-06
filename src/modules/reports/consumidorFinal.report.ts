import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections';
import { styles } from './styles';
import { qrSection } from './sections/qr.setion';
import { receptorSection } from './sections/receptor.section';
import { DocumentDataDTO } from '@app/dto';

// const logo: Content = {
//   image: 'src/public/images/logo.jpg',
//   width: 200,
//   height: 80,
//   margin: [10, 5],
// };
export const consumidorFinalReport = (
  data: DocumentDataDTO,
): TDocumentDefinitions => {
  const { header, receptor } = data;
  const { url, ...rest } = header;
  return {
    // header: logo,
    pageMargins: [10, 140],
    content: [
      headerSection(rest),
      qrSection({
        ...rest,
        mhPortal: url,
      }),
      receptorSection(receptor),
    ],
    styles,
  };
};
