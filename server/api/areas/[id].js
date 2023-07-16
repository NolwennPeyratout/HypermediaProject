import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    //const data=[];
    //const { data :ret1, error }= await client.from('area').select("name,description").eq('name',name).limit(1).single()
    const { data , error }= await client
        .from('concern')
        .select('area_name')
        .distinct()
        .leftOuterJoin('supervise', 'concern.project_name', 'supervise.project_name')
        .filter('supervise.person_name', 'eq', name);
    //data.push(ret1);
    //data.push(ret2);
    if(error  ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})