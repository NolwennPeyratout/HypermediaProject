import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const { data, error }= await client.from('person').select("name,role,cv,introduction")

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})