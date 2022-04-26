import { IDetail, IModule } from "../Types/interface";
import BASE_URL from "./config";

const insertNewModule =  async ( data ) => {
    let moduleIsCreate = false;
    let moduleId;
    let detailIsCreate = false;
    // Create New Module
    const module = {
        type: data.module.type,
        name: data.module.name
    }
    // Request Api to create a new Module
    await fetch(`${BASE_URL}/module/add`, { // Change Later For Base URL
        method: "POST",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        },
        body: JSON.stringify(module)
    })
    .then( () => {
        moduleIsCreate = true;
    })
    .catch(( err ) => {
        throw err;
    });
    // Get Id Of module set by the server
    await fetch(`http://localhost:8080/module/name/${module.name}`, { // Change Later For Base URL
        method: "GET",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        }
    })
    .then( response  => response.json() )
    .then( ( response ) => {
        moduleId = response.id; 
    })
    .catch(( err ) => {
        throw err;
    });
    // Create detail
    const detail = {
        value: 0,
        minValue: data.detail.minValue,
        maxValue: data.detail.maxValue,
        unit: data.detail.unit,
        moduleId: moduleId
    }
    // Request Api to Add New Module Detail
    await fetch('http://localhost:8080/detail/add', { // Change Later For Base URL
        method: "POST",
        headers: {
            "Content-Type":  "application/json; charset=UTF-8"
        },
        body: JSON.stringify(detail)
    })
    .then( () => {
        detailIsCreate = true;
    })
    .catch(( err ) => {
        throw err;
    });

    if ( moduleIsCreate && detailIsCreate ) {
        return true;
    }
    return false;
}
export default insertNewModule;