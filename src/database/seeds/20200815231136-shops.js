module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'shops',
      [
        {
          name: 'Estabelecimento 1',
          description: 'Descricao estabelecimento 1',
          lat: '-3.713530',
          long: '-38.568760',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Estabelecimento 2',
          description: 'Descricao estabelecimento 2',
          lat: '-3.704800',
          long: '-38.567320',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Estabelecimento 3',
          description: 'Descricao estabelecimento 3',
          lat: '-3.743457',
          long: '-38.566444',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Estabelecimento 4',
          description: 'Descricao estabelecimento 4',
          lat: '-3.742644',
          long: '-38.509556',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
