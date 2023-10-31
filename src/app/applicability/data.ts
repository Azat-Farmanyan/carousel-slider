export interface DataItem {
  title: string;
  name: string;
  items: CategoryItem[];
}

export interface CategoryItem {
  title: string;
  items: string[];
  phoneImgUrl: string;
  bgUrl: string;
}

export const DATA: DataItem[] = [
  {
    title: 'Производство',
    name: 'production',
    items: [
      {
        title: 'Производство - 1',
        items: [
          'Удобный учет и контроль имущества граждан',
          'Контроль собственных активов и расходов',
        ],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Производство - 2',
        items: [
          'Контроль муниципального имущества',
          'Отслеживание выделяемого бюджета',
        ],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Производство - 3',
        items: [
          'Удобный учет и контроль имущества граждан',
          'Контроль собственных активов и расходов',
        ],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Производство - 4',
        items: [
          'Контроль муниципального имущества',
          'Отслеживание выделяемого бюджета',
        ],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Производство - 5',
        items: [
          'Удобный учет и контроль имущества граждан',
          'Контроль собственных активов и расходов',
        ],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'Стройком',
    name: 'construction',
    items: [
      {
        title: 'Стройком - 1',
        items: [
          'Удобный учет и контроль имущества граждан',
          'Контроль собственных активов и расходов',
        ],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Стройком - 2',
        items: [
          'Контроль муниципального имущества',
          'Отслеживание выделяемого бюджета',
        ],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Стройком - 3',
        items: [
          'Удобный учет и контроль имущества граждан',
          'Контроль собственных активов и расходов',
        ],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Стройком - 4',
        items: [
          'Контроль муниципального имущества',
          'Отслеживание выделяемого бюджета',
        ],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Стройком - 5',
        items: [
          'Удобный учет и контроль имущества граждан',
          'Контроль собственных активов и расходов',
        ],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'Рынок услуг',
    name: 'services',
    items: [
      {
        title: 'Рынок услуг - 1',
        items: ['Услуга 1', 'Услуга 2'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Рынок услуг - 2',
        items: ['Услуга 3', 'Услуга 4', 'Услуга 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Рынок услуг - 3',
        items: ['Услуга 3', 'Услуга 4', 'Услуга 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Рынок услуг - 4',
        items: ['Услуга 3', 'Услуга 4', 'Услуга 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Рынок услуг - 5',
        items: ['Услуга 3', 'Услуга 4', 'Услуга 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'Медиа',
    name: 'media',
    items: [
      {
        title: 'Медиа - 1',
        items: ['Медиа 1', 'Медиа 2'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Медиа - 2',
        items: ['Медиа 3', 'Медиа 4', 'Медиа 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Медиа - 3',
        items: ['Медиа 3', 'Медиа 4', 'Медиа 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Медиа - 4',
        items: ['Медиа 3', 'Медиа 4', 'Медиа 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Медиа - 5',
        items: ['Медиа 3', 'Медиа 4', 'Медиа 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'Коммуникации',
    name: 'communications',
    items: [
      {
        title: 'Коммуникации - 1',
        items: ['Коммуникация 1', 'Коммуникация 2'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Коммуникации - 2',
        items: ['Коммуникация 3', 'Коммуникация 4', 'Коммуникация 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Коммуникации - 3',
        items: ['Коммуникация 3', 'Коммуникация 4', 'Коммуникация 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Коммуникации - 4',
        items: ['Коммуникация 3', 'Коммуникация 4', 'Коммуникация 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Коммуникации - 5',
        items: ['Коммуникация 3', 'Коммуникация 4', 'Коммуникация 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'Гос. сектор',
    name: 'government',
    items: [
      {
        title: 'Гос. сектор - 1',
        items: ['Гос. сектор 1', 'Гос. сектор 2'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Гос. сектор - 2',
        items: ['Гос. сектор 3', 'Гос. сектор 4', 'Гос. сектор 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Гос. сектор - 3',
        items: ['Гос. сектор 6', 'Гос. сектор 7'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Гос. сектор - 4',
        items: ['Гос. сектор 8', 'Гос. сектор 9', 'Гос. сектор 10'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Гос. сектор - 5',
        items: ['Гос. сектор 8', 'Гос. сектор 9', 'Гос. сектор 10'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'ВПК',
    name: 'military',
    items: [
      {
        title: 'ВПК - 1',
        items: ['ВПК 1', 'ВПК 2'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'ВПК - 2',
        items: ['ВПК 3', 'ВПК 4', 'ВПК 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'ВПК - 3',
        items: ['ВПК 3', 'ВПК 4', 'ВПК 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'ВПК - 4',
        items: ['ВПК 3', 'ВПК 4', 'ВПК 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'ВПК - 5',
        items: ['ВПК 3', 'ВПК 4', 'ВПК 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
  {
    title: 'Другие',
    name: 'other',
    items: [
      {
        title: 'Другие - 1',
        items: ['Другое 1', 'Другое 2'],
        phoneImgUrl: 'assets/images/common/phone-2.png',
        bgUrl: 'assets/images/common/bg-1.png',
      },
      {
        title: 'Другие - 2',
        items: ['Другое 3', 'Другое 4', 'Другое 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-2.png',
      },
      {
        title: 'Другие - 3',
        items: ['Другое 3', 'Другое 4', 'Другое 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-3.png',
      },
      {
        title: 'Другие - 4',
        items: ['Другое 3', 'Другое 4', 'Другое 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-4.png',
      },
      {
        title: 'Другие - 5',
        items: ['Другое 3', 'Другое 4', 'Другое 5'],
        phoneImgUrl: 'assets/images/common/phone-1.png',
        bgUrl: 'assets/images/common/bg-5.png',
      },
    ],
  },
];
