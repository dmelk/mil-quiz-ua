const sideTypes = [
  {
    symbol: '1',
    name: 'Невідомий',
  },
  {
    symbol: '3',
    name: 'Свій',
  },
  {
    symbol: '4',
    name: 'Нейтральний',
  },
  {
    symbol: '6',
    name: 'Ворожий',
  },
];

const statuses = [
  {
    symbol: '0',
    name: 'Теперішній / підтверджений'
  },
  {
    symbol: '1',
    name: 'Запланований / прогнозований'
  }
]

const towTypes = [
  {
    symbol: '00',
    name: '-----------------',
  },
  {
    symbol: '31',
    name: 'Колісний (обмежена проходимість)',
  },
  {
    symbol: '32',
    name: 'Колісний (підвищена проходимість)',
  },
  {
    symbol: '33',
    name: 'Гусеничний (самохідний)',
  },
  {
    symbol: '34',
    name: 'Колісно-гусеничний',
  },
  {
    symbol: '35',
    name: 'Буксируємий',
  },
  {
    symbol: '36',
    name: 'Залізничний',
  },
  {
    symbol: '52',
    name: 'Плаваючий',
  },
]

const unitSizes = [
  {
    symbol: '11',
    name: 'Команда / група / розрахунок / екіпаж',
  },
  {
    symbol: '12',
    name: 'Відділення',
  },
  {
    symbol: '13',
    name: 'Секція',
  },
  {
    symbol: '14',
    name: 'Взвод',
  },
  {
    symbol: '15',
    name: 'Рота / Батарея',
  },
  {
    symbol: '16',
    name: 'Батальйон / Дивізіон',
  },
  {
    symbol: '17',
    name: 'Полк / Група',
  },
  {
    symbol: '18',
    name: 'Бригада',
  },
  {
    symbol: '21',
    name: 'Дивізія',
  },
  {
    symbol: '22',
    name: 'Корпус (ОТУ, КМП)',
  },
]

const equipmentSizeModifiers = [
  {
    symbol: '01',
    symbols: ['01', '01'],
    name: "Легкий",
  },
  {
    symbol: '02',
    symbols: ['02', '04'],
    name: "Середній",
  },
  {
    symbol: '03',
    symbols: ['03', '07'],
    name: "Важкий",
  },
]

const groundEquipments = [
  {
    name: 'Гвинтівка',
    hasSize: true,
    sizeIndex: 0,
    canBeTowed: true,
    scheme: '15',
    genericId: '1101',
  },
  {
    name: 'Кулемет',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1102',
  },
  {
    name: 'Гранатомет',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1103',
  },
  {
    name: 'РПГ',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1117',
  },
  {
    name: 'ПТРК',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1112',
  },
  {
    name: 'Міномет',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1114',
  },
  {
    name: 'Гаубиця',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1109',
  },
  {
    name: 'ПТ гармата',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1106',
  },
  {
    name: 'Зенітна гармата',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1105',
  },
  {
    name: 'Зенітно-ракетна пускова установка (земля-повітря)',
    sizeIndex: 1,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1111',
  },
  {
    name: 'Пускова установка ракет (земля-земля)',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1113',
  },
  {
    name: 'РСЗВ',
    sizeIndex: 0,
    hasSize: true,
    canBeTowed: true,
    scheme: '15',
    genericId: '1116',
  },
  {
    name: 'Танк',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '120200',
  },
  {
    name: 'Танк (ремонтний)',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '120300',
  },
  {
    name: 'БМП',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '120101',
  },
  {
    name: 'БТР',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '120103',
  },
  {
    name: 'ББМ (БА)',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '120105',
  },
  {
    name: 'Автомобіль',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '140100',
  },
  {
    name: 'Автомобіль-тягач',
    hasSize: false,
    canBeTowed: true,
    scheme: '15',
    genericId: '140600',
  },
  {
    name: 'Протипіхотна міна',
    hasSize: false,
    canBeTowed: false,
    scheme: '15',
    genericId: '210200',
  },
  {
    name: 'Протитанкова міна',
    hasSize: false,
    canBeTowed: false,
    scheme: '15',
    genericId: '210300',
  },
  {
    name: 'Міна невідомого типу',
    hasSize: false,
    canBeTowed: false,
    scheme: '15',
    genericId: '210100',
  },
]

const airEquipments = [
  {
    name: 'Вертоліт',
    hasSize: false,
    scheme: '01',
    genericId: '110200',
  },
  {
    name: 'БПЛА',
    hasSize: false,
    scheme: '01',
    genericId: '110300',
  },
];

const groundTroops = [
  {
    name: 'Десантно-штурмовий',
    scheme: '10',
    genericId: '121100',
    modifier1: '47',
    optionValue: '121100-47',
  },
  {
    name: 'Морська піхота',
    scheme: '10',
    genericId: '121101',
    optionValue: '121101',
  },
  {
    name: 'Аеромобільний підрозділ',
    scheme: '10',
    genericId: '121100',
    modifier2: '01',
    optionValue: '121100-00-01',
  },
  {
    name: 'Технічний',
    scheme: '10',
    genericId: '161100',
    optionValue: '161100',
  },
  {
    name: 'Мінометний підрозділ',
    scheme: '10',
    genericId: '130800',
    optionValue: '130800',
  },
  {
    name: 'Самохідно-артилерійський',
    scheme: '10',
    genericId: '130301',
    optionValue: '130301',
  },
  {
    name: 'Артилерійський підрозділ',
    scheme: '10',
    genericId: '130300',
    optionValue: '130300',
  },
  {
    name: 'Підрозділ РСЗВ',
    scheme: '10',
    genericId: '130300',
    optionValue: '130300-41',
    modifier1: '41'
  },
  {
    name: 'Підрозділ ППО',
    scheme: '10',
    genericId: '130100',
    optionValue: '130100',
  },
  {
    name: 'ССО',
    scheme: '10',
    genericId: '121800',
    optionValue: '121800',
  },
  {
    name: 'Розвідувальний',
    scheme: '10',
    genericId: '121300',
    optionValue: '121300',
  },
  {
    name: 'Моторизований піхтоний',
    scheme: '10',
    genericId: '121104',
    optionValue: '121104',
  },
  {
    name: 'Механізований піхотний',
    scheme: '10',
    genericId: '121102',
    optionValue: '121102',
  },
  {
    name: 'Піхотний',
    scheme: '10',
    genericId: '121100',
    optionValue: '121100',
  },
  {
    name: 'Авіаційний (тактична авіація)',
    scheme: '10',
    genericId: '120800',
    optionValue: '120800',
  },
  {
    name: 'Авіаційний (тактична авіація, розвідки)',
    scheme: '10',
    genericId: '120801',
    optionValue: '120801',
  },
  {
    name: 'Вертолітний (армійська авіація)',
    scheme: '10',
    genericId: '120600',
    optionValue: '120600',
  },
  {
    name: 'Вертолітний (армійська авіація, розвідка)',
    scheme: '10',
    genericId: '120601',
    optionValue: '120601',
  },
  {
    name: 'Танковий',
    scheme: '10',
    genericId: '120500',
    optionValue: '120500',
  },
  {
    name: 'Танковий (розвідка)',
    scheme: '10',
    genericId: '120501',
    optionValue: '120501',
  },
  {
    name: 'Протитанковий',
    scheme: '10',
    genericId: '120400',
    optionValue: '120400',
  },
  {
    name: 'Протитанковий механізований',
    scheme: '10',
    genericId: '120401',
    optionValue: '120401',
  },
  {
    name: 'Протитанковий моторизований',
    scheme: '10',
    genericId: '120402',
    optionValue: '120402',
  },
  {
    name: 'Підрозділ звʼязку',
    scheme: '10',
    genericId: '111000',
    optionValue: '111000',
  },
  {
    name: 'Транспортний',
    scheme: '10',
    genericId: '163600',
    optionValue: '163600',
  },
  {
    name: 'Медичний',
    scheme: '10',
    genericId: '161300',
    optionValue: '161300',
  },
  {
    name: 'Інженерний',
    scheme: '10',
    genericId: '140700',
    optionValue: '140700',
  },
  {
    name: 'Інженерний Механізований',
    scheme: '10',
    genericId: '140701',
    optionValue: '140701',
  },
  {
    name: 'Інженерний Моторизований',
    scheme: '10',
    genericId: '140702',
    optionValue: '140702',
  },
  {
    name: 'Інженерна розвідка',
    scheme: '10',
    genericId: '140703',
    optionValue: '140703',
  },
  {
    name: 'РХБ Захист',
    scheme: '10',
    genericId: '140100',
    optionValue: '140100',
  },
  {
    name: 'РХБ Захист Механізований',
    scheme: '10',
    genericId: '140101',
    optionValue: '140101',
  },
  {
    name: 'РХБ Захист Моторизований',
    scheme: '10',
    genericId: '140102',
    optionValue: '140102',
  },
  {
    name: 'РХБ Розвідка',
    scheme: '10',
    genericId: '140103',
    optionValue: '140103',
  },
];

const modifiers = [
  {
    name: 'Орган управління (штаб, тощо)',
    isHeadquarters: true,
    id: 'isHeadquarters',
  },
  {
    name: 'Тактична група',
    isTacticalGroup: true,
    id: 'isTaskGroup',
  },
  {
    name: 'Штабний підрозділ',
    symbol: '98',
    modifier1: true,
    id: 'isHeadquartersUnit',
  },
  {
    name: 'Підрозділ постачання',
    symbol: '62',
    modifier2: true,
    id: 'isSupplyUnit',
  },
  {
    name: 'Посилений',
    symbol: '+',
    reinforcedReduced: true,
    id: 'isAmplified',
  },
  {
    name: 'Послаблений',
    symbol: '-',
    reinforcedReduced: true,
    id: 'isReduced',
  },
]

const iconTypes = [
  {
    type: 'groundEquipment',
    list: groundEquipments
  },
  {
    type: 'airEquipment',
    list: airEquipments
  },
  {
    type: 'groundTroops',
    list: groundTroops
  }
]