import z from "zod";

export const resgisterschema=z.object({
    name:z.string().min(3,"Name must be minimum of three characters"),
    email:z.string().email("enter a valid mail id"),
    password:z.string().min(3,"password must be minimum of 3 character"),
    age:z.coerce.number().min(18,"Age must be minimum of 18")
})