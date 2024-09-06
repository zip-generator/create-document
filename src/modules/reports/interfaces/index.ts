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

export { HeaderSectionOptions, DocumentData, ReceptorContent };
