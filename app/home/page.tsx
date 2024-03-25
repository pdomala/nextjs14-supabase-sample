import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
    const supabase = createClient();
    const {
        data: { session },
    } = await supabase.auth.getSession();
    console.log(session);
    return <p className='text-2xl'>Home Page</p>;
}
