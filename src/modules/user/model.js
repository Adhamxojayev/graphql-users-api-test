 import {fetch, fetchAll} from '../../config/db.js'
 import sql from './sql.js'

 const GET_USERS = ({page, limit, search}) => {
    return fetchAll(sql.GET_USERS, (page-1) * limit, limit, search)
 }

 const ADD_USER = ({ username, contact }) => {
   return fetch(sql.ADD_USER, username, contact);
 };

export default {
    GET_USERS,
    ADD_USER
}