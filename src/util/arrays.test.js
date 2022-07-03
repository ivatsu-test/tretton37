import {
  sortByEmployeeName, sortByEmployeeOffice, SortOrder, filterByEmployeeName,
} from './arrays';

// sortByEmployeeName

const notSortedEmployees = [
  {
    name: 'Martin Nilsson',
  },
  {
    name: 'Johannes Alvarsson',
  },
  {
    name: 'Ludwig Schönbeck',
  },
  {
    name: 'Helen Toomik',
  },
  {
    name: 'Georgy Sayganov',
  },
  {
    name: 'Kim Gustafsson',
  },
  {
    name: 'Jens Norell',
  },
  {
    name: 'Håkan Haraldsson',
  },
  {
    name: 'Martin Lecke',
  },
];

const sortedEmployeeNamesAsc = [
  {
    name: 'Georgy Sayganov',
  },
  {
    name: 'Helen Toomik',
  },
  {
    name: 'Håkan Haraldsson',
  },
  {
    name: 'Jens Norell',
  },
  {
    name: 'Johannes Alvarsson',
  },
  {
    name: 'Kim Gustafsson',
  },
  {
    name: 'Ludwig Schönbeck',
  },
  {
    name: 'Martin Lecke',
  },
  {
    name: 'Martin Nilsson',
  },
];

const sortedEmployeeNamesDesc = [
  {
    name: 'Martin Nilsson',
  },
  {
    name: 'Martin Lecke',
  },
  {
    name: 'Ludwig Schönbeck',
  },
  {
    name: 'Kim Gustafsson',
  },
  {
    name: 'Johannes Alvarsson',
  },
  {
    name: 'Jens Norell',
  },
  {
    name: 'Håkan Haraldsson',
  },
  {
    name: 'Helen Toomik',
  },
  {
    name: 'Georgy Sayganov',
  },
];

it.each([
  [
    notSortedEmployees,
    sortedEmployeeNamesAsc,
  ],
])('%p should return ASC order %p', (value, expected) => {
  const result = sortByEmployeeName(value, SortOrder.ASC);
  expect(result).toStrictEqual(expected);
});

it.each([
  [
    notSortedEmployees,
    sortedEmployeeNamesDesc,
  ],
])('%p should return ASC order %p', (value, expected) => {
  const result = sortByEmployeeName(value, SortOrder.DESC);
  expect(result).toStrictEqual(expected);
});

// sortByEmployeeOffice

const notSortedEmployeesOffice = [
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Lund',
  },
];

const sortedEmployeeOfficeAsc = [
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
];

const sortedEmployeeOfficeDesc = [
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Stockholm',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
  {
    office: 'Lund',
  },
];

it.each([
  [
    notSortedEmployeesOffice,
    sortedEmployeeOfficeAsc,
  ],
])('%p should return ASC order %p', (value, expected) => {
  const result = sortByEmployeeOffice(value, SortOrder.ASC);
  expect(result).toStrictEqual(expected);
});

it.each([
  [
    notSortedEmployeesOffice,
    sortedEmployeeOfficeDesc,
  ],
])('%p should return ASC order %p', (value, expected) => {
  const result = sortByEmployeeOffice(value, SortOrder.DESC);
  expect(result).toStrictEqual(expected);
});

// filterByEmployeeName

it.each([
  [
    [notSortedEmployees, 'Ale'],
    [],
  ],
  [
    [notSortedEmployees, 'Mar'],
    [
      {
        name: 'Martin Nilsson',
      },
      {
        name: 'Martin Lecke',
      },
    ],
  ],
  [
    [notSortedEmployees, 'N'],
    [
      { name: 'Martin Nilsson' },
      { name: 'Johannes Alvarsson' },
      { name: 'Ludwig Schönbeck' },
      { name: 'Helen Toomik' },
      { name: 'Georgy Sayganov' },
      { name: 'Kim Gustafsson' },
      { name: 'Jens Norell' },
      { name: 'Håkan Haraldsson' },
      { name: 'Martin Lecke' },
    ],
    [notSortedEmployees, 'Ni'],
    [
      { name: 'Martin Nilsson' },
    ],
  ],
])('%p should return filtered names %p', (value, expected) => {
  const result = filterByEmployeeName(value[0], value[1]);
  expect(result).toStrictEqual(expected);
});
