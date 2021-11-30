import { createStore } from 'vuex'

export const store = createStore({
    state: () =>  {
        return {
            message: 'Count Number',
            counter: 0
        }
    },
    mutations: {
        count: (state, n)=> {
            state.counter += n
        },
        say: (state, msg)=> {
            state.message = msg
        },
        reset: (state) => {
            state.counter = 0
            state.msg = 'reset!'
        }
    },
    actions: {
        doit: (context) => {
            let n = Math.floor(Math.random() * 10)
            context.commit('count', n)
            context.commit('say', 'add' + n + '!')
        }
    }
})
