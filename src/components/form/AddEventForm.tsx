'use client';
import { useFormik } from 'formik';
import '../../styles/components/form.scss';
import { SggEventDTO } from '@/model/SggEvent';
import { UserService } from '@/api/UserService';
import { Session } from 'next-auth';
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';

interface Props {
  session: Session;
}

export default function AddEventForm({ session }: Props) {
  const { update } = useSession();
  const formik = useFormik({
    initialValues: {
      name: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('У ивента должно быть название'),
      comment: Yup.string(),
    }),
    onSubmit: (values) => {
      const event: SggEventDTO = {
        name: values.name,
        comment: values.comment,
      };
      UserService.addEvent(session.user.id, event);
      update();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={'form'}>
      <label htmlFor="name">Название ивента</label>
      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      {formik.touched.name && formik.errors.name ? <div className={'error-text'}>{formik.errors.name}</div> : null}
      <label htmlFor="comment">Комментарий</label>
      <textarea id="comment" name="comment" onChange={formik.handleChange} value={formik.values.comment} rows={4} />

      <button type="submit">Добавить</button>
    </form>
  );
}
