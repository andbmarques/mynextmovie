export const formatDate = (date) => {
    let objectDate = new Date(date);

    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();

    month++;

    return `${month < 10 ? '0' + month : month }/${day}/${year}`;
}