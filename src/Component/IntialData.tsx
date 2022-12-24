export const getDataFromStorage = () => {
    let userList = JSON.parse(localStorage.getItem("RECORD")!);
    return userList;
}