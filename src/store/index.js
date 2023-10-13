import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'omelete-queijo',
        title: 'omelete queijo com tapioca',
        description: 'Omelete de queijo com farinha de tapioca',
        ingredients: [
          '2 Ovos',
          '1 Tomate',
          '2 Colhetes de tapioca',
          '50g de queijos'
        ],
        method: [
          'quebre os ovos e bata',
          'corte os tomates',
          'misture todos os ingredientes em um recipiente',
          'despeche tudo numa frigideira'
        ]
      },
      {
        slug: 'sagu-com-creme-branco',
        title: 'Sagu com creme branco',
        description: 'Uma deliciosa sobremesa de sagu de ovo com creme de confeiteiro',
        ingredients: [
          '1 caixa de sagu de Uva',
          '1 leite condensado',
          '1 cx de leite',
          '1 gema de ovo',
          '2 colheres de maisena',
        ],
        method: [
          'Siga as instruções para o preparo para sagu',
          'Coloque para refrigerar',
          'Coloque o leite condesado maisena e leite numa penala',
          'Misture em fogo medio.',
          'Mexa até o creme engrossar e começar a soltar da panela',
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE (state, recipe){
      state.recipes.push(recipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
