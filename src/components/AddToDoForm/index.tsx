import React, { useState } from 'react';

import { Button, Form, Input } from './styles';

export interface AddToDoFormProps {
  addToDo: (todo: string) => void;
}

export const AddToDoForm: React.FC<AddToDoFormProps> = ({ addToDo }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) addToDo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleClick}>
      <Input value={value} onChange={handleChange} />
      <Button type="submit">+</Button>
    </Form>
  );
};
