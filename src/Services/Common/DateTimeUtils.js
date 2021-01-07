import moment from 'moment';
import 'moment/locale/es';

const isValidDateTForUpdate = (startDate) => {
    moment.locale('es');
    let minutesToTimeOut = process.env.REACT_APP_UPDATE_COMMENT_MINUNTES_TIMEOUT;
    let createdAt = moment(startDate);
    let validUntil = moment().subtract(minutesToTimeOut, 'minutes');
    return createdAt.isSameOrAfter(validUntil);
}

export default isValidDateTForUpdate;