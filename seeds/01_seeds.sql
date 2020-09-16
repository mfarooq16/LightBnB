INSERT INTO users (name, email, password) 
VALUES ('Samson','metus@liberoat.edu','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Peter','Proin.sed.turpis@sed.co.uk','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Oleg','Curabitur@enimnon.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Murphy','dictum.eu.eleifend@feugiat.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Mona','magna.nec.quam@eleifendnec.net','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Doris','arcu.Vestibulum@dictumeu.net','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Chandler','sit.amet@convallisestvitae.edu','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Erin','magna.Praesent@gravida.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Hammett','eget@mus.edu','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Brenden','sit.amet@ornare.net','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (3,'GA','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','538',3,5,3,'Sierra Leone','Ap #871-9935 Sed Rd.','Savannah','North Island','0576', true),
(2,'BE','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','850',3,4,4,'Turkey','Ap #791-2989 Nec Avenue','Berlin','RM','71297-57506', true),
(4,'L','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','474',3,1,3,'Gabon','P.O. Box 713, 8164 Ut, St.','Dublin','Waals-Brabant','PZ6 7GB', true),
(10,'LOR','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','642',1,5,5,'Mozambique','P.O. Box 903, 9281 Luctus Rd.','Iquitos','Wie','60708', true),
(10,'Istanbul','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','399',2,5,3,'France','8912 A, St.','Istanbul','Jeo','5310', true),
(2,'East Java','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','126',3,4,5,'Gambia','P.O. Box 602, 9054 Fusce Av.','Kediri','G','60015', true),
(6,'Bremen','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','203',2,4,2,'French Polynesia','P.O. Box 285, 6816 Ultrices Av.','Bremerhaven','AK','15880', true),
(2,'Northwest Territories','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','966',1,1,5,'Solomon Islands','9858 Diam. St.','Fort Simpson','Madrid','14904', true),
(4,'Vermont','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','642',3,1,5,'Fiji','180-9735 Cursus Av.','Montpelier','PV','18602', true),
(4,'GB','desc','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','https://www.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-home-529108441','127',3,5,2,'Greenland','946-2433 Eu, Avenue','Ghizer','Glamorgan','5350', true);

INSERT INTO reservations (guest_id, property_id, start_date, end_date)
VALUES (8,8,'2018-09-11','2018-09-26'),
(4,2,'2019-01-04','2019-02-01'),
(8,8,'2018-09-11','2018-09-26'),
(9,8,'2019-01-04','2019-02-01'),
(5,10,'2018-09-11','2018-09-26'),
(1,6,'2019-01-04','2019-02-01'),
(3,4,'2018-09-11','2018-09-26'),
(7,2,'2019-01-04','2019-02-01'),
(5,5,'2018-09-11','2018-09-26'),
(4,7,'2019-01-04','2019-02-01');

INSERT INTO property_reviews (property_id, guest_id, reservation_id, rating, message) 
VALUES (8,5,7,5,'Tellus Lorem Eu Inc.'),
(10,9,7,2,'Pellentesque Habitant LLP'),
(8,6,9,2,'Cum Sociis Foundation'),
(5,1,3,1,'Dolor Dolor Tempus Institute'),
(10,6,10,4,'Sed Nulla Ante Institute'),
(4,7,4,3,'Ridiculus Mus Proin Associates'),
(3,5,8,3,'Arcu Vel Limited'),
(6,6,9,5,'Curae; Company'),
(5,2,10,1,'Scelerisque Consulting'),
(8,10,5,3,'In Industries');