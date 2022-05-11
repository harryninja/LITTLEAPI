CREATE TABLE SERVICES (
  ServiceId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ServiceTitle    VARCHAR(15)             NOT NULL,
  ServiceDesc     VARCHAR(60)                 NULL,
  ServiceDate     DATETIME                    NOT NULL,
  FOREIGN KEY (UserId) REFERENCES USER(UserId),
  FOREIGN KEY (ServiceTypeId) REFERENCES SERVICETYPE(ServiceTypeId)
);

CREATE TABLE USER (
  UserId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  UserName VARCHAR(15)                    NULL,
  Login    VARCHAR(15)                    NULL,
  Password VARCHAR(15)                    NULL
);

CREATE TABLE SERVICETYPE (
  ServiceTypeId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ServiceType    VARCHAR(20)                    NULL
);

  ENGINE = INNODB;

/* INSERT DATA */
INSERT INTO SERVICES (ServiceTitle, ServiceDesc, ServiceDate)
VALUES ('Manutencao','Manutencao em computadores',(getdate()));

INSERT INTO USER (UserName, Login, Password)
VALUES ('Vinicius','Vinicius9898','12345');

INSERT INTO SERVICETYPE (ServiceType)
VALUES ('Reparo');

DROP PROCEDURE IF EXISTS sp_GetServices;
DELIMITER //
CREATE PROCEDURE sp_GetServices()
  BEGIN
    SELECT * FROM SERVICES;
  END //
DELIMITER ;
/**Drop StoreProcedure**/
CALL sp_GetServices();


