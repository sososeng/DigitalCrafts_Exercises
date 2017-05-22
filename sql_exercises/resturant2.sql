CREATE TABLE restaurant (
  id serial PRIMARY KEY,
  name varchar,
  address varchar,
  category varchar
);

CREATE TABLE reviewer (
  id serial PRIMARY KEY,
  name varchar,
  email varchar,
  karma integer check (karma >= 0 and karma <= 7)
);

CREATE TABLE review (
  id serial PRIMARY KEY,
  title varchar,
  review varchar,
  stars integer check (stars >= 0 and stars <= 5),
  reviewer_id integer REFERENCES reviewer (id),
  restaurant_id integer REFERENCES restaurant (id)
);



INSERT INTO restaurant VALUES (
  DEFAULT, 'Stack', '1111','Hamburger'
);

INSERT INTO restaurant VALUES (
  DEFAULT, 'Pizzaria', '2222','Pizza'
);

INSERT INTO restaurant VALUES (
  DEFAULT, 'ThaiDee', '3333','Thai'
);

INSERT INTO restaurant VALUES (
  DEFAULT, 'TigerDen', '4444','Ramen'
);

INSERT INTO restaurant VALUES (
  DEFAULT, 'ShinShin', '5555','Chinese'
);

INSERT INTO restaurant VALUES (
  DEFAULT, 'Jinya Ramen', '6666','Ramen'
);


INSERT INTO reviewer VALUES (
  DEFAULT, 'So', 'so@gmail.com',6
);

INSERT INTO reviewer VALUES (
  DEFAULT, 'Mo', 'Mo@gmail.com',7
);

INSERT INTO reviewer VALUES (
  DEFAULT, 'Do', 'Do@gmail.com',7
);


INSERT INTO review VALUES (
  DEFAULT,'it was very good.','the broth was really good. 10/10',5,1,4
);

INSERT INTO review VALUES (
  DEFAULT,'the burger was ok','just another burger join.',3,1,1
);

INSERT INTO review VALUES (
  DEFAULT,'good steam chicken','their chicken is good.',4,1,5
);



INSERT INTO review VALUES (
  DEFAULT,'best pizza in town','pinapple on pizza.',4,2,2
);

INSERT INTO review VALUES (
  DEFAULT,'so bad','not good.',1,2,1
);


INSERT INTO review VALUES (
  DEFAULT,'best thai food in town','every dish are good.',5,2,3
);

INSERT INTO review VALUES (
  DEFAULT,'bad pizza','not impressed',2,3,2
);

select * from review join (select * from restaurant where restaurant.id =2) x on review.restaurant_id =2;

select * from review join(select * from restaurant where restaurant.name ='TigerDen') x on x.id = review.restaurant_id;

select * from review join (select * from reviewer where name = 'So') x on review.reviewer_id = x.id; 

select name, review from review join restaurant on review.restaurant_id = restaurant.id;

select name, avg(stars) from review join restaurant on review.restaurant_id = restaurant.id group by name;

select name, count(restaurant.id) from review join restaurant on restaurant_id = restaurant.id group by name;

select restaurant.name, review.review, reviewer.name from restaurant join review on restaurant.id = review.restaurant_id join reviewer on reviewer.id = review.reviewer_id;

select reviewer.name, avg (stars) from reviewer right outer join (select reviewer_id, stars from review) x on x.reviewer_id = reviewer.id group by reviewer.name;

select reviewer.name, min (stars) from reviewer right outer join (select reviewer_id, stars from review) x on x.reviewer_id = reviewer.id group by reviewer.name;

select category, count(category) from restaurant group by category;

select restaurant_id stars from reviewer where stars =5;

select restaurant_id stars from reviewer where stars =5;

select name, count(stars) from restaurant right outer join (select restaurant_id, stars from review where stars =5) x on x.restaurant_id = restaurant.id group by name;

select category, avg(stars) from restaurant right outer join (select restaurant_id, stars from review) x on x.restaurant_id = restaurant.id group by category;








