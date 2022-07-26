

drop database if exists node_app;

create database node_app;

\c node_app;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--  uuid_generate_v4

drop table if exists users;
create table users (
    user_id UUID default uuid_generate_v4(),
    username varchar(32) not null,
    contact varchar(12) not null,
    created_at timestamp default current_timestamp,
    deleted_at timestamp default null
);

insert into users (username, contact) values ('salim', '998909787667'),('bobir', '998909780001');
