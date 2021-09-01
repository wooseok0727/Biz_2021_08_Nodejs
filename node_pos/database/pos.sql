CREATE DATABASE nodePOS;
USE nodePOS;

DROP TABLE tbl_orders;
DROP TABLE tbl_products;

SELECT * FROM tbl_products;
SELECT * FROM tbl_orders;

INSERT INTO tbl_product2s(p_code,p_name,p_price)
VALUES
('P0001','1000원 김밥',1000),
('P0002','2000원 김밥',2000),
('P0003','3000원 김밥',3000),
('P0004','4000원 김밥',4000),
('P0005','5000원 김밥',5000),
('P0006','6000원 김밥',6000),
('P0007','7000원 김밥',7000),
('P0008','8000원 김밥',8000),
('P0009','9000원 김밥',9000),
('P0010','10000원 김밥',10000);

SELECT * FROM tbl_product2s;
SELECT * FROM tbl_table_orders;

DROP TABLE tbl_table_orders;
DROP TABLE tbl_product2s;
