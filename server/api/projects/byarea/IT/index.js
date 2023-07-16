import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const { data, error }= await client.rpc('get_projects_with_concerns', {  areaid:'IT' });

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})