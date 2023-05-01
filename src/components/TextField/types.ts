export interface TextFieldProps {
  name: string;
  id: string;
  value: string;
  placeholder?: string;
  onChangeValue?: (event: any) => void;
  maxWidth?: string;
}
