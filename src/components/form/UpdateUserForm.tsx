'use client';
import { useFormik } from 'formik';
import '../../styles/components/form.scss';
import { UserService } from '@/api/UserService';

import { UserUpdateDTO } from '@/model/User';
import sggItems from '@/data/sggItem';
import { useRouter } from 'next/navigation';

interface Props {
  userId: string;
  game: string;
  items: (string | null)[];
}

interface initialValue {
  game: string;
  item1: string;
  item2: string;
  item3: string;
}

export default function UpdateUserForm({ game, items, userId }: Props) {
  const router = useRouter();

  const initialValues: initialValue = {
    game: game,
    item1: items[0] || sggItems[0].name,
    item2: items[1] || sggItems[0].name,
    item3: items[2] || sggItems[0].name,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const dto: UserUpdateDTO = {
        game: values.game === '' ? undefined : values.game,
        items: [values.item1, values.item2, values.item3],
      };
      UserService.updateUser(userId, dto);
      router.refresh();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={'form'}>
      <label htmlFor="name">Текущая игры</label>
      <input id="game" name="game" type="text" onChange={formik.handleChange} value={formik.values.game} />
      <label htmlFor="item1">Айтем 1</label>
      <select id="item1" name="item1" onChange={formik.handleChange} value={formik.values.item1}>
        {sggItems.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="item2">Айтем 2</label>
      <select id="item2" name="item2" onChange={formik.handleChange} value={formik.values.item2}>
        {sggItems.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <label htmlFor="item3">Айтем 3</label>
      <select id="item3" name="item3" onChange={formik.handleChange} value={formik.values.item3}>
        {sggItems.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <button type="submit">Обновить</button>
    </form>
  );
}
