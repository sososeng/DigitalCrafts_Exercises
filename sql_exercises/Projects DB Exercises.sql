


select * from project inner join (select project_id from project_uses_tech where tech_id = 3) t1 on t1.project_id = id;

select * from tech inner join (select tech_id from project_uses_tech where project_id = 4) t1 on t1.tech_id = tech.id;




select name from (select tech.name, project_id, tech_id FROM tech LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id) t1 where t1.tech_id IS NULL;



SELECT name, count(tech_id) FROM tech LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id GROUP BY tech.id;


select name from (select project.name, project_id,tech_id from project left outer join project_uses_tech on project_uses_tech.project_id = project.id) t1 where  t1.project_id IS NULL;

select name, count(project_id) from project left outer join project_uses_tech on project_uses_tech.project_id = project.id GROUP BY project.id;

select * from project left outer join project_uses_tech on project_uses_tech.project_id = project.id left outer join tech on project_uses_tech.tech_id = tech.id;

select distinct(tech.name) from project inner join project_uses_tech on project_uses_tech.project_id = project.id inner join tech on project_uses_tech.tech_id = tech.id;

select distinct(tech.name) from project right outer join project_uses_tech on project_uses_tech.project_id = project.id right outer join tech on project_uses_tech.tech_id = tech.id where project_id is NULL;

select distinct(project.name) from tech inner join project_uses_tech on project_uses_tech.tech_id = tech.id inner join project on project_uses_tech.project_id = project.id;

select distinct(project.name) from tech right outer join project_uses_tech on project_uses_tech.tech_id = tech.id right outer join project on project_uses_tech.project_id = project.id where tech_id is NULL;

select * from (select project.id, project.name, count(project_uses_tech.tech_id) from project left outer join project_uses_tech on project_uses_tech.project_id = project.id group by project.id) project_by_tech_count order by count desc;

select * from (select tech.id, tech.name, count(project_uses_tech.project_id) from tech left outer join project_uses_tech on project_uses_tech.tech_id = tech.id group by tech.id) x order by count desc;

select avg(c) from (select project.name, count(project_uses_tech.tech_id) as c from project left outer join project_uses_tech on project_uses_tech.project_id = project.id group by project.id) x;
