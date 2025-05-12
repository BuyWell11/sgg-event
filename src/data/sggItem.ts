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
  type: string;
  logo: StaticImageData;
  description: string;
};

const sggItems: SggItem[] = [
  {
    name: 'Ничего',
    type: 'Модификаторы игры',
    logo: nichego,
    description: 'Ничего',
  },
  {
    name: 'Кот в мешке',
    type: 'Модификаторы игры',
    logo: kotvmeshke,
    description: 'Игра со всех временных промежутков',
  },
  {
    name: 'Звонок другу',
    type: 'Модификаторы игры',
    logo: zvonokdrugu,
    description: 'Человек крутит 5 игр с промежутка, ты выбираешь одну, опираясь только на название',
  },
  {
    name: 'Помощь зала',
    type: 'Модификаторы игры',
    logo: pomoshzala,
    description: 'Опрос по 5 роллам колеса игр',
  },
  {
    name: 'Игра детства',
    type: 'Модификаторы игры',
    logo: igradetstva,
    description: 'Ролл из колеса "Игра детства"',
  },
  {
    name: 'Свинота',
    type: 'Модификаторы игры',
    logo: svinota,
    description:
      'Последнюю пройденную игру можно подкинуть другому участнику. Уничтожает их следующий модификатор. Для применителя предмета - это активный предмет. Для получателя Свиноты - модификатор',
  },
  {
    name: 'Игромания',
    type: 'Модификаторы игры',
    logo: igromaniya,
    description:
      'Случайная игра со случайной страницы случайного выпуска случайного игрового журнала.\n' +
      'При упоминании франшизы - последняя вышедшая игра франшизы на момент выпуска журнала.\n' +
      'При отсутствии игр на странице, производится реролл номера страницы.\n' +
      'Страница читается на стриме с выражением.',
  },
  {
    name: 'Игра говна',
    type: 'Модификаторы игры',
    logo: igragovna,
    description: 'Ролл колеса с оценкой GG <50',
  },
  {
    name: 'Игра крута',
    type: 'Модификаторы игры',
    logo: igrakruta,
    description: 'Ролл колеса с оценкой GG >75',
  },
  {
    name: 'Вместе мы сильны',
    type: 'Модификаторы игры',
    logo: vmestemisilni,
    description: 'Ролл из кооп колеса',
  },
  {
    name: 'Агуша "Я сам"',
    type: 'Модификаторы игры',
    logo: agushayasam,
    description: 'Выбор игры с промежутка (игра должна длиться дольше 8-и часов на howlongtobeat)',
  },
  {
    name: 'Абсолютное пение',
    type: 'Шаффлеры',
    logo: pevec,
    description: 'Плюс 3 ролла с музыкой',
  },
  {
    name: 'Абсолютный кинотеатр',
    type: 'Шаффлеры',
    logo: kinoteatr,
    description: 'Плюс 3 ролла с кино',
  },
  {
    name: 'Абсолютное художество',
    type: 'Шаффлеры',
    logo: hudozhestvo,
    description: 'Плюс 3 ролла с рисованием',
  },
  {
    name: 'Абсолютная литература',
    type: 'Шаффлеры',
    logo: literatura,
    description: 'Плюс 3 ролла с фанфиками',
  },
  {
    name: 'Абсолютная игра',
    type: 'Шаффлеры',
    logo: gaming,
    description: 'Плюс 3 ролла на плюс игру',
  },
  {
    name: 'Зеркало',
    type: 'Предметы',
    logo: zerkalo,
    description: 'Отразить выпавший ролл на рандомного участника 1 раз за промежуток',
  },
  {
    name: 'Крепкий орешек',
    type: 'Предметы',
    logo: krepkiyoreshek,
    description:
      'Используемый предмет. При любом нападении нападавший бросает монетку, в случае проигрыша - плюс игра.\n' +
      'Работает раз в промежуток, не сгорает при использовании.\n' +
      '\n' +
      'Нападением считается любая помеха в продвижении в СГГ, либо манипуляция с инвентарём.\n' +
      'Например - плюс игра, кража предмета.',
  },
  {
    name: 'Талончик',
    type: 'Предметы',
    logo: talonchik,
    description: 'Бесплатный реролл колеса раз в промежуток',
  },
  {
    name: 'Сосиски по акции',
    type: 'Предметы',
    logo: sosiskipoakcii,
    description: 'Шаг колеса уменьшен на 25%',
  },
  {
    name: 'Сизифово колесо',
    type: 'Предметы',
    logo: sizifovokoleso,
    description: 'Игру нельзя дропнуть колесом',
  },
  {
    name: 'Копипастер',
    type: 'Предметы',
    logo: kopipaster,
    description: 'Копирует предмет из используемых слотов, одноразовый',
  },
  {
    name: 'Подмена в роддоме',
    type: 'Предметы',
    logo: podmena,
    description: 'Замена ролла на любой из приколов, одноразовый',
  },
  {
    name: 'Отмена ролла',
    type: 'Предметы',
    logo: otmena,
    description: 'Возможность отменить выпавший ролл, одноразовый',
  },
  {
    name: 'Кубик D6',
    type: 'Предметы',
    logo: kubikd6,
    description: 'Реролл игры, колеса, монетки раз в промежуток, одноразовый',
  },
  {
    name: 'Монетка',
    type: 'Предметы',
    logo: monetka,
    description: 'Можно добавить ещё монетку к броску, раз в промежуток',
  },
  {
    name: 'Уничтожатель',
    type: 'Предметы',
    logo: unichtozhitel,
    description: 'Уничтожение предмета, одноразовый',
  },
  {
    name: 'Казан тип',
    type: 'Предметы',
    logo: kazantip,
    description: 'Позволяет украсть предмет другого игрока, одноразовый',
  },
  {
    name: 'Сигма Чигур',
    type: 'Предметы',
    logo: sigma,
    description:
      ' \n' +
      ' \t\n' +
      'Предмет позволяет выбрать стримера и подбросить монетку. При выпадении загаданного значения - выбранный стример дропает игру, одноразовый',
  },
  {
    name: 'Договор',
    type: 'Предметы',
    logo: dogovor,
    description: 'Плюс игра себе, плюс игра другому, одноразовый',
  },
  {
    name: 'Дуэль',
    type: 'Предметы',
    logo: duel,
    description:
      'Позволяет бросить вызов другому участнику, одноразовый\n' +
      'Победитель получает лутбокс победителя с правом отказаться от выпавшего предмета.\n' +
      'Если выпал активируемый предмет, его можно активировать сразу, не добавляя в инвентарь.\n' +
      'Проигравший в дуэли получает плюс игру.',
  },
  {
    name: 'Пиксель Малевича',
    type: 'Предметы',
    logo: pixcel,
    description: 'Пустышка',
  },
  {
    name: 'Второй шанс',
    type: 'Предметы',
    logo: second,
    description: 'При провале любого челленджа даётся право на ошибку',
  },
];

export default sggItems;
