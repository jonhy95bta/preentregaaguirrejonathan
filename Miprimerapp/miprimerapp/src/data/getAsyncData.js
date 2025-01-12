import products from "./data"



function getAsyncData(){

const promiseData = new Promise((resolve, reject) => {
    const errorFatal = false ;

    setTimeout( ()=> {

        if (errorFatal) reject ("Algo salio mal!!")
            resolve(products)
    }, 2000)
    
    } )



    return promiseData;
}

getAsyncData().then((respuesta)=> {}).catch((error)=>{})

export default getAsyncData;