import isValidDateTForUpdate from './DateTimeUtils';
import moment from 'moment';
import 'moment/locale/es';

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
        moment.locale('es');
        return moment(fecha).fromNow();
}

export default canUpdate;