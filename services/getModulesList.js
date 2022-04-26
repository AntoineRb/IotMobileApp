import BASE_URL from "./config";

const getModulesList =  async ( setValueFunc ) => {
    await fetch(`${BASE_URL}/module/all`, { // Change Later For Base URL
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json() )
    .then(( response ) => {
        setValueFunc( response );
    })
    .catch(( err ) => {
        throw err;
    });
}

export default getModulesList;