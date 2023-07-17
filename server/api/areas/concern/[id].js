import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  const supabase = createClient('https://fzgzmacqofehsdojhdvf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6Z3ptYWNxb2ZlaHNkb2poZHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MjYxMDgsImV4cCI6MjAwNTAwMjEwOH0.OeimVTBSoYYug9-V_zgFtVlL3-X9a0t3uUeJdBUMedM');
  
  try {
    const { data, error } = await supabase
      .from('area').select("name,description")
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