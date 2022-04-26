import BASE_URL from "./config";

const getUniqueDetail =  async ( moduleId, setValueFunc ) => {
    await fetch(`${BASE_URL}/detail/${moduleId}`, { // Change Later For Base URL
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
export default getUniqueDetail;