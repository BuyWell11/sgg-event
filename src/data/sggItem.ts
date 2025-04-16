import nichego from '../../public/sggItems/nichego.png';
import kotvmeshke from '../../public/sggItems/kotvmeshke.png';
import zvonokdrugu from '../../public/sggItems/zvonokdrugu.png';
import pomoshzala from '../../public/sggItems/pomoshzala.png';
import igradetstva from '../../public/sggItems/igradetstva.png';
import svinota from '../../public/sggItems/svinota.png';
import igromaniya from '../../public/sggItems/igromaniya.png';
import igragovna from '../../public/sggItems/igragovna.png';
import igrakruta from '../../public/sggItems/igrakruta.png';
import vmestemisilni from '../../public/sggItems/vmestemisilni.png';
import agushayasam from '../../public/sggItems/agushayasam.png';
import pevec from '../../public/sggItems/pevec.png';
import kinoteatr from '../../public/sggItems/kinoteatr.png';
import hudozhestvo from '../../public/sggItems/hudozhestvo.png';
import literatura from '../../public/sggItems/literatura.png';
import zerkalo from '../../public/sggItems/zerkalo.png';
import krepkiyoreshek from '../../public/sggItems/krepkiyoreshek.png';
import talonchik from '../../public/sggItems/talonchik.png';
import sosiskipoakcii from '../../public/sggItems/sosiskipoakcii.png';
import sizifovokoleso from '../../public/sggItems/sizifovokoleso.png';
import kopipaster from '../../public/sggItems/kopipaster.png';
import podmena from '../../public/sggItems/podmena.png';
import otmena from '../../public/sggItems/otmena.png';
import kubikd6 from '../../public/sggItems/kubikd6.png';
import monetka from '../../public/sggItems/monetka.png';
import unichtozhitel from '../../public/sggItems/unichtozhitel.png';
import kazantip from '../../public/sggItems/kazantip.png';
import sigma from '../../public/sggItems/sigma.png';
import dogovor from '../../public/sggItems/dogovor.png';
import duel from '../../public/sggItems/duel.png';
import pixcel from '../../public/sggItems/pixcel.png';
import gaming from '../../public/sggItems/gaming.png';
import second from '../../public/sggItems/second.png';
import { StaticImageData } from 'next/image';

export type SggItem = {
  name: string;
  logo: StaticImageData;
  description: string;
};

const sggItems: SggItem[] = [
  {
    name: 'Ничего',
    logo: nichego,
    description: 'Ничего',
  },
  {
    name: 'Кот в мешке',
    logo: kotvmeshke,
    description: 'Игра со всех временных промежутков',
  },
  {
    name: 'Звонок другу',
    logo: zvonokdrugu,
    description: 'Человек крутит 5 игр с промежутка, ты выбираешь одну, операясь только на название',
  },
  {
    name: 'Помощь зала',
    logo: pomoshzala,
    description: 'Опрос по 5 роллам колеса игр',
  },
  {
    name: 'Игра детства',
    logo: igradetstva,
    description: 'Ролл из колеса "Игра детства"',
  },
  {
    name: 'Свинота',
    logo: svinota,
    description: 'После прохождения игры можешь подкинуть эту игру другому участнику. Уничтожает их след. модификатор',
  },
  {
    name: 'Игромания',
    logo: igromaniya,
    description: 'Игра со случайной страницы случайного выпуска игрового журнала',
  },
  {
    name: 'Игра говна',
    logo: igragovna,
    description: 'Ролл колеса с оценкой GG <50',
  },
  {
    name: 'Игра крута',
    logo: igrakruta,
    description: 'Ролл колеса с оценкой GG >75',
  },
  {
    name: 'Вместе мы сильны',
    logo: vmestemisilni,
    description: 'Ролл из кооп колеса',
  },
  {
    name: 'Агуша "Я сам"',
    logo: agushayasam,
    description: 'Выбор игры с промежутка (игра должна длиться дольше 8-и часов на howlongtobeat)',
  },
  {
    name: 'Абсолютное пение',
    logo: pevec,
    description: 'Плюс 3 ролла с караоке',
  },
  {
    name: 'Абсолютный кинотеатр',
    logo: kinoteatr,
    description: 'Плюс 3 ролла с кино',
  },
  {
    name: 'Абсолютное художество',
    logo: hudozhestvo,
    description: 'Плюс 3 ролла с рисованием',
  },
  {
    name: 'Абсолютная литература',
    logo: literatura,
    description: 'Плюс 3 ролла с фанфиками',
  },
  {
    name: 'Абсолютная игра',
    logo: gaming,
    description: 'Плюс три игры на промежутке',
  },
  {
    name: 'Зеркало',
    logo: zerkalo,
    description: 'Отразить выпавший ролл на рандомного участника 1 раз за промежуток',
  },
  {
    name: 'Крепкий орешек',
    logo: krepkiyoreshek,
    description: 'При любом нападении есть шанс на плюс игру нападавшему (монетка)',
  },
  {
    name: 'Талончик',
    logo: talonchik,
    description: 'Бесплатный реролл колеса раз в промежуток',
  },
  {
    name: 'Сосиски по акции',
    logo: sosiskipoakcii,
    description: 'Шаг колеса уменьшен на 25%',
  },
  {
    name: 'Сизифово колесо',
    logo: sizifovokoleso,
    description: 'Игру нельзя дропнуть колесом',
  },
  {
    name: 'Копипастер',
    logo: kopipaster,
    description: 'Копирует предмет, одноразовый',
  },
  {
    name: 'Подмена в роддоме',
    logo: podmena,
    description: 'Замена ролла на любой из приколов, одноразовый',
  },
  {
    name: 'Отмена ролла',
    logo: otmena,
    description: 'Отмена ролла',
  },
  {
    name: 'Кубик D6',
    logo: kubikd6,
    description: 'Реролл игры, колеса, монетки',
  },
  {
    name: 'Монетка',
    logo: monetka,
    description: 'Можно добавить ещё монетку к броску, раз в промежуток',
  },
  {
    name: 'Уничтожатель',
    logo: unichtozhitel,
    description: 'Одноразовое уничтожение предмета',
  },
  {
    name: 'Казан тип',
    logo: kazantip,
    description: 'Позволяет украсть предмет другого игрока, одноразовый',
  },
  {
    name: 'Сигма Чигур',
    logo: sigma,
    description: 'При дропе бросается монетка, если монетка спасает от дропа, то предмет самоуничтожается',
  },
  {
    name: 'Договор',
    logo: dogovor,
    description: 'Плюс игра себе, плюс игра другому',
  },
  {
    name: 'Дуэль',
    logo: duel,
    description: 'Позволяет бросить вызов другому участнику',
  },
  {
    name: 'Пиксель Малевича',
    logo: pixcel,
    description: 'Пустышка',
  },
  {
    name: 'Второй шанс',
    logo: second,
    description: 'При провале любого челленджа даётся право на ошибку',
  },
];

export default sggItems;
