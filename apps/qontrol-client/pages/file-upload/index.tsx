import './file-upload.module.scss';
import { MultiFileUpload } from '../../components/multi-file-upload/multi-file-upload';

/* eslint-disable-next-line */
export interface FileUploadProps {}

export function FileUpload(props: FileUploadProps) {
  return (
    <div>
      <h1>Welcome to FileUpload!</h1>
      <MultiFileUpload></MultiFileUpload>
    </div>
  );
}

export default FileUpload;
