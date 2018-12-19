create database todo;

use todo;

show tables;

create table todotable (
number INTEGER PRIMARY KEY AUTO_INCREMENT,
description VARCHAR(30),
ready ENUM('yes','no'));

insert into todotable (description, ready)
values ('Walk the dog', 'no');

insert into todotable (description, ready)
values ('Buy groceries', 'no');


insert into todotable (description, ready)
values ('Clean the flat', 'no');


insert into todotable (description, ready)
values ('Study a lot', 'no');

select * from todotable

select description from todotable;

update todotable
SET ready='yes'
WHERE number=4;

delete from todotable
where number=3;

select * from todotable;

insert into todotable(description, ready)
values('Make some cookies', 'no');

select * from todotable;

set @num:=0;

update todotable set number=@num:=(@num+1);

mysql> select * from todotable;
