import { formatRelative, isAfter, isEqual, sub } from 'date-fns'
import { es } from 'date-fns/locale'

const isValidDateTForUpdate = (startDate) => {
    const minutesToTimeOut = process.env.REACT_APP_UPDATE_COMMENT_MINUNTES_TIMEOUT;
    const createdAt = new Date(startDate);
    const validUntil = sub(new Date(), { minutes: minutesToTimeOut });
    if (isAfter(createdAt, validUntil) || isEqual(createdAt, validUntil)){
        return true;
    }
    return false;
}


const canUpdate = (item, currentUser) => {
    if (currentUser && item.autor === currentUser.userId) {
        if (isValidDateTForUpdate(item.fecha_creacion) === true) {
            return true;
        }
    }
    return false;
}

export const getSignature = (userObj) => {
    let signature = '';
    if (typeof userObj !== 'undefined') {
        if (userObj.first_name !== '') {
            signature = userObj.first_name;
            if (userObj.last_name !== '') {
                signature = signature + ' ' + userObj.last_name;
            }
            return signature;
        }
        return userObj.username;
    }
    return ''
}

export const getDateFormated = (fecha) => {
    if (fecha) {
        return formatRelative(
            new Date(fecha),
            new Date(),
            {
                locale: es,
                weekStartsOn: 1,
            } // Pass the locale as an option
        );
    }
}

export default canUpdate;