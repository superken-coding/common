
import { supabase } from "../../utils/db";

export default async () => {

    const { data: pet, error } = await supabase.from("test").select("*");

    if (!pet) {
        return new Response(error ? error.message : 'err', { status: 404 });
    }

    return new Response(JSON.stringify(pet));
};