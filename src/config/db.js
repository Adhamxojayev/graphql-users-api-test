
import pg from 'pg'

const pool = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
})


async function fetch (sql, ...params) {
    const client  = await pool.connect()
    try {
        let {rows: [row]} = await client.query(sql, params.length ? params : null)
        return row
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }finally{
        client.release()
    }
}

async function fetchAll(sql, ...params) {
  const client = await pool.connect();
  try {
    let { rows } = await client.query(sql, params.length ? params : null);
    return rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message)
  } finally {
    client.release();
  }
}

export {
    fetch,
    fetchAll
}