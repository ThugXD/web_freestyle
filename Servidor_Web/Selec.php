<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select all c</title>
    <link rel="stylesheet" href="Style.css">
</head>
<body>
    
<h1>Lista de todos dados Inseridos</h1>
<table>
        <thead>
            <tr>
                <th colspan="7">Dados Inseridos</th>
            </tr>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Active</th>
                <th>Action</th>
            </tr>
        </theadd>
        <tbody>
            

            <?php 
                if( isset($_GET['Inlusao']) && $_GET['Inlusao'] == 1){ 
                    include('Conection.php');
                    try{
                        $stmt = $conection->query("SELECT * FROM dadosusuario");
                            
                        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                            echo "
                            <tr>
                                <td>".$row['usuarios_id'] ."</td>
                                <td>".$row['name']."</td>
                                <td>".$row['last_name']."</td>
                                <td>".$row['age']."</td>
                                <td>".$row['gender']."</td>
                                <td>".$row['active']."</td>
                                <td>
                                    <i class='fas fa-trash' style='color: rgb(234, 12, 12); font-size: 1.2em; margin: 2px; cursor: pointer;'></i>
                                    <i class='fas fa-edit' style='color: #fff; font-size: 1.2em; margin: 2px; cursor: pointer;'></i>
                                </td>
                            </tr>
                            ";
                        }
                    } catch(PDOException $e){
                        echo "Falha ao selecionar". $e->getMessage();
                    }
                }

                $conection = NULL;
                ?>
            </tbody>
    </table>
 
</body>
</html>