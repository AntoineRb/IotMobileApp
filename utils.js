// Return and convert last param in URL. 
// Like this : /module/history/:id
// last param=>id:string=>id:number
export const getIdInParams = () => {
    const fullUrl = window.location.href;
    const params = fullUrl.split('/')
    return +params[params.length - 1];
}

// Return time in Hour between two dates
// Expected date format in params : '2038-01-19 03:14:07' ( UTC timestamp )
// get the expected format with : new Date().toJSON();
export const getTimeBewtweenDate = ( pastDate , actualDate ) => {
    const past = new Date( pastDate );
    const actual = new Date( actualDate );
    const timeInSeconds = (((actual - past) / 1000) / 60); // Seconds
    const h = Math.floor(timeInSeconds / 3600).toString();
    const m = Math.floor(timeInSeconds % 3600 / 60).toString();
    const s = Math.floor(timeInSeconds % 3600 % 60).toString();
    return h + 'H:' + m + 'mn:' + s + 's' ;
}

export const formatDate = ( date ) => {
    return date.toLocaleString( navigator.language, {
        weekday: 'short',
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}