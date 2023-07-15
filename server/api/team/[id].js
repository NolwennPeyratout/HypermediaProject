import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const ret=[];
    const { data1, error }= await client.from('person').select("name,role,cv,introduction").eq('name', name).limit(1).single()
    const { data2, error1 }= await client.from('supervise').select("person_name,project_name")
    //supabase do the left join query automatically
    const { data3, error2 }= await client.from('concerns').select("area_name").eq('person_name',name)
    ret[0]=data1;
    ret[1]=data2;
    ret[2]=data3;
    if(error | error1 | error2) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return ret
})
