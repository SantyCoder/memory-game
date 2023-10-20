export interface Modal {
  title: string;
  message: string;
  type: string;
  handler: Function;
  icon?: string;
  accept?: string;
  cancel?: string;
}