import {useState} from 'react';

const useForm = initialValue => {
  // Menggunakan hook useState untuk membuat state `form` dengan nilai awal `initialValue`
  const [form, setForm] = useState(initialValue);

  // Mengembalikan array dengan dua elemen
  return [
    // Elemen pertama adalah nilai `form`
    form,
    // Elemen kedua adalah sebuah fungsi yang menerima dua parameter
    (formType, formValue) => {
      // Jika `formType` adalah "reset", set nilai `form` kembali dengan `initialValue`
      if (formType === 'reset') {
        return setForm(initialValue);
      }

      // Jika `formType` bukan "reset", perbarui nilai `form` sesuai dengan `formType` dan `formValue` yang diberikan
      return setForm({...form, [formType]: formValue});
    },
  ];
};
export default useForm;
