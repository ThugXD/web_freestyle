<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud SQL</title>
    <link rel="stylesheet" href="Style.css">
    <link rel="stylesheet" href="fontawesome/css/all.css">
</head>
<body>
    <h1>Add Your Information</h1>
    
    <form action="Insert.php" method="post" id="formulario">
       <?php if( isset($_GET['Inlusao']) && $_GET['Inlusao'] == 1){ ?>
            <div class="sucesso">
                <h2>Dados inseridos com sucesso</h2>
            </div>
        <?php } ?>
        <div class="form-control">
            <label for="">Name</label>
            <input type="text" name="name" id="name">
        </div>

        <div class="form-control">
            <label for="">Last name</label>
            <input type="text" name="last_name" id="last-name">
        </div>
        
        <div class="form-control">
            <label for="">Age</label>
            <input type="number" name="age" id="age">
        </div>

        <div class="check">
            <label for="">Your gender</label>
            <div class="check-control">
                <label for="yes">Male</label>
                <input type="radio" name="gender" id="male">
            </div>
            
            <div class="check-control">
                <label for="no">Female</label>
                <input type="radio" name="gender" id="female">
            </div>
        </div>
        <div class="check">
            <label for="">Are You Active</label>
            <div class="check-control">
                <label for="yes">Yes</label>
                <input type="radio" name="active" id="yes">
            </div>
            
            <div class="check-control">
                <label for="no">No</label>
                <input type="radio" name="active" id="no">
            </div>
        </div>
        <button type="submit">Submit</button>   
    </form>

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
    <!-- Para Actualizar contnt -->
    
    <!--Para Deletar Ficheiros -->
    <form action="" method="post" id="formulrio">
        <h3>Seleciona um ID para a Remoção</h3>
        <input type="number" name="id" placeholder="Insira o ID" id="inpu">
        <button type="submit" name="delete">Delete</button>
    </form>
    <button onclick="document.load()"><i class="fas fa-repeat"></i></button>

    <?php 
        include('Conection.php');

        if(isset($_POST['delete'])){
            $id = $_POST['id'];
            try{
                $sql = "DELETE FROM dadosusuario WHERE usuarios_id = :id";
                $stmt =  $conection->prepare($sql);
                $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                $stmt->execute();

            } catch(PDOException $e){
                echo "Erro ao excluir dados: " . $e->getMessage();
            }
    
        }

        if(isset($_POST['update'])){
            $id = $_POST['id'];
            $name = $_POST['name'];
            $last_name = $_POST['last_name'];
            $age = $_POST['age'];
            $gender = ($_POST['gender']);
            $active = ($_POST['active']);

            try{
                $query = "UPDATE dadosusuario SET name :name, last_name :last_name, age = :age, gender = :gender, active = :active";
                $stmt = $conection->prepare($query);
                $stmlt->bindParam(':id', $id, PDO::PARAM_INT);
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':last_name', $last_name);
                $stmt->bindParam(':age', $age);
                $stmt->bindParam(':gender', $gender);
                $stmt->bindParam(':active', $active);

                $stmt->execute();

            
            } catch(PDOException $e){
                echo "Erro os dados ". $e->getMessage();
            }
        }
       
    ?>
 
</body>
</html>