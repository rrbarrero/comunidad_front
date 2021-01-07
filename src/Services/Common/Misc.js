import isValidDateTForUpdate from './DateTimeUtils';

const canUpdate = (item, currentUser) => {
    if (currentUser && item.autor === currentUser.userId) {
        if (isValidDateTForUpdate(item.fecha_creacion) === true) {
            return true;
        }
    }
    return false;
}

export default canUpdate;