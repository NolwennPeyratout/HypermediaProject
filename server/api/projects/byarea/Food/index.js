import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.id
    
    const client = serverSupabaseClient(event)
    const { data, error }= await client.from('project').select('name, presentation, location, date, start_up, product_service, relevant')
    .filterExists(
      supabase.from('concern').select('*').filter('concern.area_name', 'eq', name).filter('concern.project_name', 'eq', 'project.name')
    );
    

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})