export default interface SggEvent extends SggEventDTO {
  id: string;
  createdAt: string;
}

export interface SggEventDTO {
  name: string;
  comment: string;
}
