import { format } from 'date-fns';

function formatDate(date) {
    const finalDate = format(date, 'dd/MM/yyyy');
    return finalDate;
};

export { formatDate };