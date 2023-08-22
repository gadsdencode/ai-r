import { createClient } from '@supabase/supabase-js';

const REACT_APP_SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const REACT_APP_SUPABASE_API_KEY = process.env.REACT_APP_SUPABASE_API_KEY;

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_API_KEY);

const fetchUserSettings = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId);
  if (error) throw error;
  return data;
};

const saveConversation = async (conversation) => {
  const { data, error } = await supabase
    .from('conversations')
    .insert(conversation);
  if (error) throw error;
  return data;
};