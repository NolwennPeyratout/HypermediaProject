import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id ;
    const client = serverSupabaseClient(event);
   const { data, error }= await client.from('project').select("name,presentation,location,date,start_up,product_service,relevant").ilike('name',id);
    
    if(error ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})
