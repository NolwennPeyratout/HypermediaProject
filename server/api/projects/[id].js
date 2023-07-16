import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const data=[];
    const { ret1, error }= await client.from('project').select("name,presentation,location,date,start_up,product_service,relevant")
    const { ret2, error1 }= await client.from('concerns').select("project_name,area_name").eq('project_name',name)
    const { ret3, error2 }= await client.from('supervise').select("person_name,project_name").eq('project_name',name)
    data.push(ret1);
    data.push(ret2);
    data.push(ret3);
    if(error | error1 | error2) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})
