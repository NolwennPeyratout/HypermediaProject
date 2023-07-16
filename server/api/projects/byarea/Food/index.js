import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const { data, error }= await client.from('project')
    .select('*')
    .in(
      'name',
      client
        .from('concern')
        .select('project_name')
        .filter('area_name', 'eq', name));
    

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})