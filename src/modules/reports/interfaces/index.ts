import { BodyDto, ExtensionDto, Resume } from '@app/dto';

interface ReceptorContent {
  name: string;
  document: string;
  econimicActivity: string;
  direction: string;
  nrc: string;
  phone: string;
}
interface HeaderSectionOptions {
  generationCode: string;
  receptionStamp: string;
  controlNumber: string;
  emitionDate: string;
  emitionTime: string;
  url: string;
}
interface DocumentData {
  receptor: ReceptorContent;
  header: HeaderSectionOptions;
}
interface PropTable {
  body: BodyDto[];
  resume: Resume;
  nextDay: string;
  extension: ExtensionDto;
}
export { HeaderSectionOptions, DocumentData, ReceptorContent, PropTable };
