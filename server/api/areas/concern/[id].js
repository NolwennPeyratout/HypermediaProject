import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const client = serverSupabaseClient(event)
  try {
    
    const { data, error } = await client
      .rpc('get_projects_with_concerns', { areaid: id });
    if (error) {
      throw new Error(error.message);
    }

    return {
      data,
    };
  } catch (error) {
    throw new Error(error.message);
  }
})