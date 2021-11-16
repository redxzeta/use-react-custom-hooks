import { useState } from "react";

const useForm = <T extends Record<string, any>>(
  initialState: T,
  submitForm: () => void
) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  return { form, handleChange, onSubmit } as const;
};

export default useForm;
