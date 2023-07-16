import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const [surname, name] = id.split(' ');
    const fullname=surname+" "+name;
    
    const client = serverSupabaseClient(event)
    //const data=[];
    //ilike is use to perform a case-intensive comparison, so an exact match between name and name.
    //const { data, error }= await client.from('person').select("*").filter('name','ilike', name);
    const { data, error }= await client.from('person').select("*").eq(fullname,'name')
    //const { ret2, error1 }= await client.from('supervise').select("person_name,project_name")
    //supabase do the left join query automatically
    //const { ret3, error2 }= await client.from('concerns').select("area_name").eq('person_name',name)
    //data.push(ret1);
    //data.push(ret2);
    //data.push(ret3);

    if(error ) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})
