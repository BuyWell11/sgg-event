'use client';
import { useFormik } from 'formik';
import '../../styles/components/form.scss';
import { UserService } from '@/api/UserService';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { UserUpdateDTO } from '@/model/User';
import sggItems from '@/data/sggItem';

interface Props {
  session: Session;
}

interface initialValue {
  game: string;
  item1: string;
  item2: string;
  item3: string;
}

export default function UpdateUserForm({ session }: Props) {
  const { update } = useSession();
  const items = sggItems;
  const initialValues: initialValue = {
    game: session.user.game,
    item1: session.user.items[0] || sggItems[0].name,
    item2: session.user.items[1] || sggItems[0].name,
    item3: session.user.items[2] || sggItems[0].name,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const dto: UserUpdateDTO = {
        game: values.game === '' ? undefined : values.game,
        items: [values.item1, values.item2, values.item3],
      };
      UserService.updateUser(session.user.id, dto);
      update();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={'form'}>
      <label htmlFor="name">Текущая игры</label>
      <input id="game" name="game" type="text" onChange={formik.handleChange} value={formik.values.game} />
      <label htmlFor="item1">Айтем 1</label>
      <select id="item1" name="item1" onChange={formik.handleChange} value={formik.values.item1}>
        {items.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="item2">Айтем 2</label>
      <select id="item2" name="item2" onChange={formik.handleChange} value={formik.values.item2}>
        {items.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="item3">Айтем 3</label>
      <select id="item3" name="item3" onChange={formik.handleChange} value={formik.values.item3}>
        {items.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <button type="submit">Обновить</button>
    </form>
  );
}
