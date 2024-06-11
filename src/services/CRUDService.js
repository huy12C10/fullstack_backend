const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const updateUserByid = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, city = ?, name = ? WHERE id = ?`,
        [email, city, name, userId]
    );
}

const getUserByid = async (userId) => {
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);
    return results && results.length > 0 ? results[0] : {};
}

const deleteUserByid = async (userId) => {
    const [results, fields] = await connection.execute(
        `DELETE FROM Users WHERE id = ?`, [userId]
    );
}

module.exports = {
    getAllUsers,
    updateUserByid,
    getUserByid,
    deleteUserByid
  
}
