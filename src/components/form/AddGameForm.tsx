'use client';
import { useFormik } from 'formik';
import { GameDTO, GameStatus } from '@/model/Game';
import '../../styles/components/form.scss';
import { UserService } from '@/api/UserService';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

interface Props {
  userId: string;
}

export default function AddGameForm({ userId }: Props) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      comment: '',
      status: GameStatus.complete,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('У игры должно быть название'),
      comment: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      const game: GameDTO = {
        name: values.name,
        comment: values.comment,
        status: values.status,
      };
      UserService.addGame(userId, game);
      resetForm();
      router.refresh();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={'form'}>
      <label htmlFor="name">Название игры</label>
      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      {formik.touched.name && formik.errors.name ? <div className={'error-text'}>{formik.errors.name}</div> : null}
      <label htmlFor="comment">Комментарий</label>
      <textarea id="comment" name="comment" onChange={formik.handleChange} value={formik.values.comment} rows={4} />

      <label htmlFor="status">Статус игры</label>
      <select id="status" name="status" onChange={formik.handleChange} value={formik.values.status}>
        {Object.entries(GameStatus).map(([key, value]) => (
          <option key={value} value={value}>
            {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
          </option>
        ))}
      </select>

      <button type="submit">Добавить</button>
    </form>
  );
}
