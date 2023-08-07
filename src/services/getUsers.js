import { REQUEST_URL } from "../constants"

export const getUsers = async () => {
    try {
       const res = await fetch(REQUEST_URL.users);
       const data = await res.json();
       return { users: data }
    }
    catch (err) { console.log(err) }
}