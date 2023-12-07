import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
export default{
    namespaced:true,
    state(){
        return {
            coaches:[
                {
                    id:'1',
                    firstName:'Muhammad',
                    lastName:"hamza",
                    areas:['frontend','backend','career'],
                    description:"I'm freelancer for years",
                    hourlyRate:30,
                },
                {
                    id:'2',
                    firstName:'Majid',
                    lastName:"sajid",
                    areas:['frontend','backend','career'],
                    description:"I'm freelancer for years",
                    hourlyRate:30,
                },
            ]
        }
    },
    mutations,
    getters,
    actions
}