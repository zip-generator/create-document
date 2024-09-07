import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection, qrSection, receptorSection } from './sections';
import { styles } from './styles';
import { DocumentDataDTO } from '@app/dto';
import { generateDataImage } from '@app/utils';
import { excludeSubject } from './sections/sujeto-excluido.table';

const logo: Content = {
  image: generateDataImage('src/public/images/logo.jpg'),
  width: 100,
  height: 50,
  margin: [10, 5],
};
export const excludeSubjectInit = (
  data: DocumentDataDTO,
): TDocumentDefinitions => {
  console.log('ENTRO EN SUJETO EXCLUIDO');
  const { header, receptor, body, resume } = data;
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
      excludeSubject(body, resume),
    ],
    styles,
  };
};
