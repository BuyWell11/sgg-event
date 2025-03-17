'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Routes from '@/routes/routes';
import '../../styles/components/form.scss';

export default function SigninForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле'),
    }),
    onSubmit: async (values) => {
      const res = await signIn('credentials', {
        name: values.username,
        password: values.password,
        redirect: false,
      });
      if (res && !res.error) {
        router.push(Routes.profile);
      } else {
        console.log(res);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={'form'}>
      <label htmlFor="username">Никнейм</label>
      <input id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.name} />
      {formik.touched.username && formik.errors.username ? <div className={'error-text'}>{formik.errors.username}</div> : null}
      <label htmlFor="password">Пароль</label>
      <input id="password" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
      {formik.touched.password && formik.errors.password ? <div className={'error-text'}>{formik.errors.password}</div> : null}
      <button type="submit">Залогиниться</button>
    </form>
  );
}
