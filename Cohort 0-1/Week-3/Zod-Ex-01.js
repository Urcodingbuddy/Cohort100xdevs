const zod = require("zod")
// const { object } = require("zod");

function validInput(arr){

    const schema1 = zod.array(zod.number());
    const schema2 = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8).refine((val) => /[@!#$&]/.test(val), {
            message: "Password must include at least one of the following characters: @, !, #, $, &",
        }),
        age: zod.number(),
        
    })
    const response1 = schema1.safeParse(arr);
    console.log(response1)

    const exampleObject = {
        email: "example@example.com",
        password: "password@123",
        age: 25,
    };

    const response2 = schema2.safeParse(exampleObject);
    console.log("Object validation result:", response2);
}
validInput([1,2,3,4,5,7,8,9])