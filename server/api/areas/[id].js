import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const { data, error } = await client.from('area').select('name,description').eq('name',name)
    
    if(error ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})