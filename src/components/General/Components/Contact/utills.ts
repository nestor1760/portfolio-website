import { FormEvent } from 'react';
import Swal from 'sweetalert2';

const forms_key = import.meta.env.VITE_FORMS_KEY;

export const handleSubmit = (title: string, text: string) => async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);

  formData.append("access_key", `${forms_key}`);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
    Swal.fire({
      title: `${title}`,
      text: `${text}`,
      icon: "success"
    });
  }
};