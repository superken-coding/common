
import { supabase } from "../../utils/db";

export default async () => {

    const { data: pet } = await supabase.from("test").select("*");

    if (!pet) {
        return new Response(`Where'd that pet go?`, { status: 404 });
    }

    return new Response(JSON.stringify(pet));
};