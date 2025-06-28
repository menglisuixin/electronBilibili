const pool = require('../database/connection')

async function exampleQuery() {
  try {
    // 获取连接
    const connection = await pool.getConnection()
    try {
      // 执行查询
      const [rows, fields] = await connection.execute('SELECT * FROM users')
      console.log(rows)
    } catch (error) {
      console.error('查询出错:', error)
    } finally {
      // 释放连接
      connection.release()
    }
  } catch (error) {
    console.error('获取连接出错:', error)
  }
}

exampleQuery()
