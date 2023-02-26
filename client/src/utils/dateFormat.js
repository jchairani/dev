import react from 'react';

export const formatDate = (myDate) => {
    let target = myDate.search("T");
    let value = myDate.substr(0,target);
    return value
}