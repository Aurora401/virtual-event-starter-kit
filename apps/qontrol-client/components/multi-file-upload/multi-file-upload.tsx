import './multi-file-upload.module.scss';
import React from 'react';
import S3 from 'react-aws-s3';

const Upload = () => {
  const fileInput = React.useRef();

  const config = {
    bucketName: 'qontrol-file-upload',
    region: 'eu-central-1',
    dirName: 'media' /* optional */,
    accessKeyId: 'AKIA3HOT6KQZWMIWMIW4',
    secretAccessKey: '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',
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const newArr = fileInput ? fileInput.current.files : [];
    for (let i = 0; i < newArr.length; i++) {
      await handleUpload(newArr[i]);
    }
  };

  const handleUpload = (file) => {
    const newFileName = file.name.replace(/\..+$/, '');
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      if (data.status === 204) {
        console.log('success');
      } else {
        console.log('fail');
      }
    });
  };

  return (
    <>
      <form className="upload-steps" onSubmit={handleClick}>
        <label>
          Upload file:
          <input type="file" multiple ref={fileInput} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

/* eslint-disable-next-line */
export interface MultiFileUploadProps {}

export function MultiFileUpload(props: MultiFileUploadProps) {
  return (
    <div>
      <h1>Welcome to MultiFileUpload!</h1>
      <Upload></Upload>
    </div>
  );
}

export default MultiFileUpload;
