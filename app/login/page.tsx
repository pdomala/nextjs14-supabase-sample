'use client';
import { createClient } from '@/utils/supabase/client';

export default function LoginPage() {
    const supabase = createClient();
    return (
        <button
            className='bg-blue-500 p-4 text-white rounded-lg'
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
        >
            Log in With Google
        </button>
    );
}
