import db from "../database/pg.js";

export const getAllUsers = async (req, res) => {
  try {
    const { rowCount, rows } = await db.query(
      "SELECT * FROM users ORDER BY id ASC;"
    );
    res.json({ totalUser: rowCount, users: rows });
  } catch (error) {
    res.status(500).json(error);
  }
};
export const createUser = (req, res) => {};
export const getSingleUser = (req, res) => {};
export const updateUser = (req, res) => {};
export const deleteUser = (req, res) => {};
