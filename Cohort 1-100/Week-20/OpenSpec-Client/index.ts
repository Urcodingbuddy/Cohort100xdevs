import { DefaultService } from "./generated";

async function main() {   
    const res = await DefaultService.getUser('112');
    console.log(res)
}
main();
