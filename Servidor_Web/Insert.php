
<?php
    include("Conection.php");

 

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST['name'];
        $last_name = $_POST['last_name'];
        $age = $_POST['age'];
        $gender = ($_POST['gender'] == 'male') ? 'Male' : 'Female';
        $active = ($_POST['active'] == 'yes') ? 'Yes' : 'No';

        try{
            $query = "INSERT INTO dadosusuario(name, last_name, age, gender, active) VALUES (:name, :last_name, :age, :gender, :active)";
            $stmt = $conection->prepare($query);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':last_name', $last_name);
            $stmt->bindParam(':age', $age);
            $stmt->bindParam(':gender', $gender);
            $stmt->bindParam(':active', $active);

            $stmt->execute();

            header('Location: Index.php?Inlusao=1');

            //$stmt->execute([$name, $last_name, $age, $gender, $active]);
            
    
            //echo ("Dados Inseridos com Sucesso");
        } catch(PDOException $e){
            echo "Erro os dados ". $e->getMessage();
        }
    
    }

    
?>