import { FormEventHandler } from 'react';
import Swal from 'sweetalert2';

const forms_key = import.meta.env.VITE_FORMS_KEY;

export const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
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

  if (res.error) {
    console.log("Success", res);
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "error"
    });
  }

  if (res.success) {
    console.log("Success", res);
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success"
    });
  }
};
