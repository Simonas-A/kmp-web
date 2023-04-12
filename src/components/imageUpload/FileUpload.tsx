import React, { ChangeEvent, FC } from 'react';
import { Form } from 'react-bootstrap';

interface FileUploadProps {
  label?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: FC<FileUploadProps> = ({ label, name, onChange }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type='file'
      name={name}
      multiple
      onChange={onChange}
    />
  </Form.Group>
);

export default FileUpload;

export {};