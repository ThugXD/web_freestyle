<?php
    $username = "root";
    $password = "";
    $host = "mysql: host=localhost; dbname=abacateDB";

    try{
        $conection = new PDO($host, $username, $password);
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e){
        echo "Falha ao conectar " . $e->getMEssage();
        exit();
    }

