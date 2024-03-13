<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crud SQL</title>
    <link rel="stylesheet" href="Style.css">
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


</body>
</html>