import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import {
  headerSection,
  qrSection,
  receptorSection,
  tableSection,
} from './sections';
import { styles } from './styles';
import { DocumentDataDTO } from '@app/dto';
import * as fs from 'fs';
import { generateDataImage } from '@app/utils';

const logo: Content = {
  image: generateDataImage('src/public/images/logo.jpg'),
  width: 100,
  height: 50,
  margin: [10, 5],
};
export const consumidorFinalReport = (
  data: DocumentDataDTO,
): TDocumentDefinitions => {
  const { header, receptor } = data;
  const { url, ...rest } = header;
  return {
    header: logo,
    pageMargins: [10, 70],
    content: [
      headerSection(rest),
      qrSection({
        ...rest,
        mhPortal: url,
      }),
      receptorSection(receptor),
      tableSection(),
    ],
    styles,
  };
};
