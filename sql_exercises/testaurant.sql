CREATE TABLE restaurant (                                              
	id SERIAL NOT NULL PRIMARY KEY, 
	name VARCHAR UNIQUE NOT NULL, 
	distance INTEGER DEFAULT 0 CHECK(distance >=0),
	stars INTEGER DEFAULT 0 CHECK(stars >=0  and  stars<=5),
	category VARCHAR DEFAULT NULL,
	favorite_dish VARCHAR DEFAULT NULL,
	takeout boolean DEFAULT FALSE,
	last_visited DATE DEFAULT NULL
	);




insert INTO restaurant VALUES(
	DEFAULT, 'Subway',2, 3, 'sandwhich','chicken',TRUE, DEFAULT
);

insert INTO restaurant VALUES(
	DEFAULT, 'Jinya Ramen',3, 5, 'ramen', 'pork',TRUE, DEFAULT
);


insert INTO restaurant VALUES(
	DEFAULT, 'Stack',1, 4, 'burger', 'beef',TRUE, DEFAULT
);


insert INTO restaurant VALUES(
	DEFAULT, 'Moon Tower',7, 1, 'burger', 'beef',TRUE, DEFAULT
);


insert INTO restaurant VALUES(
	DEFAULT, 'BBQ',10, 2, 'BBQ', 'ribs',TRUE, DEFAULT
);


select name from restaurant where stars = 5;

select favorite_dish from restaurant where stars = 5;

select id from restaurant where name = 'Moon Tower';

select name from restaurant where category = 'BBQ';

select name from restaurant where takeout = TRUE;

select name from restaurant where takeout = TRUE and category = 'BBQ';

select name from restaurant where distance <2 ;

select name from restaurant where last_visited > '2017-05-05' ;

select name from restaurant where last_visited < '2017-05-05' and stars > 5;

select name from restaurant order by distance;
select name from restaurant order by distance limit 2;

select name from restaurant where distance <=2 order by stars desc ;

select count(*) from restaurant; 

select category, count(*) from restaurant group by category;

select  category, avg(stars) from restaurant group by category; 
select  category, max(stars) from restaurant group by category; 