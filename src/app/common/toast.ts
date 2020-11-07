import toastr from 'toastr';

toastr.options = {
    "closeButton": false,
    "newestOnTop": true,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "1750",
    "extendedTimeOut": "750",
}

export function logSuccess(message){
    toastr.success(message);
    console.log(message);
}

export function logError(message){
    toastr.error(message);
    console.error(message);
}

export function logInfo(message){
    toastr.info(message);
    console.info(message);
}

export function logWarning(message){
    toastr.warning(message);
    console.warn(message);
}