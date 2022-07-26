const GET_USERS = `
    select 
        *
    from users
    where username ilike concat('%', $3::varchar, '%') or 
          contact ilike concat('%', $3::varchar)
    offset $1 limit $2
`;

const ADD_USER = `
    insert into users (username, contact) 
    values ($1, $2) returning *
`

export default {
    GET_USERS,
    ADD_USER
}