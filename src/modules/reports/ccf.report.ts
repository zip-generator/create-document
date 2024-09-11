import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import {
  ccfTable,
  headerSection,
  qrSection,
  receptorSection,
} from './sections';
import { styles } from './styles';
import { DocumentDataDTO, Observaciones } from '@app/dto';
import { generateDataImage } from '@app/utils';
import { join } from 'path';

const logo: Content = {
  image: generateDataImage(join(process.cwd(), 'dist/public/images/logo.jpg')),
  width: 150,
  height: 50,
  margin: [10, 5],
};
export const ccfReport = (
  data: DocumentDataDTO,
  invoiceName: string,
): TDocumentDefinitions => {
  const {
    header,
    receptor,
    body,
    resume,
    fechaNextDay,
    extension,
    observaciones,
  } = data;
  const { url, ...rest } = header;
  const observations = observaciones as Observaciones;
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
      ccfTable({
        body,
        resume,
        nextDay: fechaNextDay,
        extension,
        copago: observations?.copago,
        coaseguro: observations?.coaseguro,
        coaseguroPercentage: observations?.coaseguroPercentage,
        deducible: observations?.deducible,
      }),
    ],
    styles,
  };
};
