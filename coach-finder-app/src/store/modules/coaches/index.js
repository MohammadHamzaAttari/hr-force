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
                    areas:['frontend','backend','peers'],
                    description:"I'm freelancer for years",
                    hourlyRate:30,
                },
                {
                    id:'2',
                    firstName:'Muhammad',
                    lastName:"sajid",
                    areas:['Ai','backend','peers'],
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