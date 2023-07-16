import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const [surname, name] = id.split(' ');
    const fullname=surname+" "+name;
    
    const client = serverSupabaseClient(event)
    //ilike is use to perform a case-intensive comparison, so an exact match between name and name.
    //const { data, error }= await client.from('person').select("*").filter('name','ilike', name);
    const { data, error }= await client.from('person').select("name,role,cv,introduction").eq(fullname,'name')
    

    if(error ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})
