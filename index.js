const express = require('express');
const app = express();

// Definimos puerto
const PORT = '3000';
const DB_MARCAS = [
    {
      'id': '1',
      'nombre': 'Chevrolet',
    },
    {
      'id': 2,
      'nombre': 'Ford',
    },
    {
      'id': 3,
      'nombre': 'Toyota',
    }
];

const DB_MODELOS = {
    'chevrolet': [
        {
            'id': 1,
            'nombre': 'Onix',
            'year': 2020,
        },
        {
            'id': 2,
            'nombre': 'Corsa',
            'year': 2020,
        },
        {
            'id': 3,
            'nombre': 'Joy',
            'year': 2020,
        },
    ],
    'ford': [
        {
            'id': 4,
            'nombre': 'Ka',
            'year': 2020,
        },
        {
            'id': 5,
            'nombre': 'Fiesta',
            'year': 2020,
        },
        {
            'id': 6,
            'nombre': 'Focus',
            'year': 2020,
        },
    ],
    'toyota': [
        {
            'id': 7,
            'nombre': 'Etios',
            'year': 2020,
        },
        {
            'id': 8,
            'nombre': 'Hilux',
            'year': 2020,
        },
        {
            'id': 9,
            'nombre': 'Corola',
            'year': 2020,
        },
    ]
}

app.get('/marcas', (req, res) => {
  res.json(DB_MARCAS);
})

app.get('/marcas/:nombre_marca/modelos', (req, res) => {
  const { nombre_marca } = req.params;
  res.json(DB_MODELOS[nombre_marca.toLowerCase()]);
})

app.get('/', (req, res) => {
  res.end('Hello world');
})

app.listen(PORT, () => {
  console.log('Server listen in port ' + PORT);
});
