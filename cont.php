<?php
session_start();
include ("connection.php");

if(isset($_GET['action']) && $_GET['action'] == "logout") {
    unset($_SESSION['valid_client']);
    header('Location: index.php');
    exit();
}

if(isset($_GET['action']) && $_GET['action'] == "delete") {
    $sql="DELETE FROM `clienti` WHERE `clienti`.`email` = '".$_SESSION['valid_client']."' LIMIT 1";
    $result = mysqli_query($_SESSION['con'], $sql);

    unset($_SESSION['valid_client']);

    header('Location: index.php');
    exit();
}

if(isset($_GET['action']) && $_GET['action'] == "login") {
    if (isset($_POST['email']) && isset($_POST['parola'])) {
        $username = $_POST['email'];
        $password = $_POST['parola'];
        $query = "SELECT email, parola FROM clienti WHERE email='$username' AND parola=md5('$password')";
        $result = mysqli_query($_SESSION['con'], $query);
        if (mysqli_fetch_assoc($result)) {
           $_SESSION['valid_client'] = $username;
        }
    }
}

?>
<!DOCTYPE html>
<html>
<?php
    $page_title = 'Cont utilizator';
    include("components/head.php");
?>
<body>
    <div class="body-inner">
        <section class="fullscreen" data-bg-parallax="images/slider/4.jpg">
            <div class="container">
                <div>
                    <div class="row">
                        <div class="col-lg-6 center p-50 background-white b-r-6">

                            <?php
                                if (isset($_SESSION['valid_client'])) {
                                    echo '<h3>Bine ai venit <b>'.$_SESSION['valid_client'].'</b></h3>';

                                    $query = "SELECT * FROM clienti WHERE email='".$_SESSION['valid_client']."'";
                                    $result = mysqli_query($_SESSION['con'], $query);
                                    while ($row = mysqli_fetch_assoc($result)) {
                                        echo '<hr><h4>Detalii cont</h4>';
                                        echo 'Nume: <b>'.$row['nume'].'</b><br>';
                                        echo 'Prenume: <b>'.$row['prenume'].'</b><br>';
                                        echo 'Telefon: <b>'.$row['telefon'].'</b><br>';
                                        echo 'Adresa: <b>'.$row['adresa'].'</b><br><br><br>';
                                    }

                                    echo '<a href="index.php" class="btn btn-success">Mergi la prima pagină</a>';
                                    echo '<a href="cont.php?action=logout" class="btn btn-warning">Logout</a>';
                                    echo '<a href="cont.php?action=delete" class="btn btn-danger">Șterge cont</a>';
                                }  else {
                                    if (isset($username)){
                                    echo "Nu va puteti loga.Username sau parola incorecte<br><br>";
                                    }
                            ?>

                            <h3>Autentificați-vă în contul dumneavoastră</h3>
                            <form action="cont.php?action=login" method="post">
                                <div class="form-group">
                                    <label class="sr-only">Email</label>
                                    <input type="text" class="form-control" placeholder="Email" name="email">
                                </div>
                                <div class="form-group m-b-5">
                                    <label class="sr-only">Parolă</label>
                                    <input type="password" class="form-control" placeholder="Parolă" name="parola">
                                </div>
                                <div class="form-group form-inline text-left">
                                    <div class="form-check">
                                        <label>
                                            <input type="checkbox"><small class="m-l-10"> Ține minte</small>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-left form-group">
                                    <button type="submit" class="btn">Login</button>
                                </div>
                            </form>
                            <p class="small">Nu aveți cont încă? <a href="register.php">Înregistrare cont nou</a>
                            </p>

                            <?php
                                }
                            ?>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <a id="scrollTop"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>

    <?php include("components/scripts.php"); ?>
</body>
</html>