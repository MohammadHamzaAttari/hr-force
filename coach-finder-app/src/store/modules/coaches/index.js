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
                    areas:['frontend'],
                    description:"I'm fullstack Developer.",
                    hourlyRate:30,
                },
                {
                    id:'2',
                    firstName:'Majid',
                    lastName:"sajid",
                    areas:['frontend','career'],
                    description:"I'm freelancer for years",
                    hourlyRate:30,
                },
                {
                    id:'2',
                    firstName:'Raza',
                    lastName:"Imran",
                    areas:['backend'],
                    description:"I'm freelancer for years",
                    hourlyRate:30,
                },
                {
                    id:'2',
                    firstName:'Ahmad',
                    lastName:"Yousaf",
                    areas:['career'],
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