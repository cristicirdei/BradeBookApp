<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />

    <title>Librarie</title>

    <link href="css/plugins.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <!-- Body Inner -->
    <div class="body-inner">
        <!-- Header -->
        <header id="header" data-transparent="true" data-fullwidth="true" class="dark submenu-light">
            <div class="header-inner">
                <div class="container">
                    
                    <div id="logo">
                        <a href="index.php">
                            <span class="logo-default">Librărie</span>
                            <span class="logo-dark">Librărie</span>
                        </a>
                    </div>

                    <div id="search"><a id="btn-search-close" class="btn-search-close" aria-label="Închide formular de căutare"><i class="icon-x"></i></a>
                        <form class="search-form" action="cautare.php" method="get">
                            <input class="form-control" name="q" type="search" placeholder="Căutați o carte ..." />
                            <span class="text-muted">Scrieți textul căutat și apăsați "Enter" sau "ESC" pentru a închide</span>
                        </form>
                    </div>

                    <div class="header-extras">
                        <ul>
                            <li>
                                <a id="btn-search" href="#"> <i class="icon-search"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div id="mainMenu-trigger">
                        <a class="lines-button x"><span class="lines"></span></a>
                    </div>

                    <div id="mainMenu">
                        <div class="container">
                            <nav>
                                <ul>
                                    <li><a href="index.php">Prima pagină</a></li>
                                    <li><a href="domenii.php?id_domeniu=2" title="">Domenii</a></li>
                                    <li><a href="reduceri.php?id_domeniu=2" >Oferte promoționale</a></li>
                                    <li><a href="cont.php" >Cont utilizator</a></li>
                                    <li><a href="cos.php" >Coș de cumpărături</a></li>
                                    <li><a href="contact.php" >Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        <section id="page-title" data-bg-parallax="images/slider/4.jpg">
            <div class="container">
                <div class="page-title">
                    <h1>Contactează-ne</h1>
                </div>
                <div class="breadcrumb">
                    <ul>
                        <li><a href="index.php">Prima pagină</a></li>
                        <li><a href="contact.php">Contact</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- end: Page title -->
        <!-- CONTENT -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h3 class="text-uppercase">Păstrăm legătura !</h3>
                        <span>Completați formularul de mai jos pentru a ne contacta.</span>
                        <div class="m-t-30">
                            <form class="widget-contact-form" novalidate action="include/contact-form.php" role="form" method="post">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="nume">Nume</label>
                                        <input type="text" aria-required="true" name="widget-contact-form-name" required class="form-control required name" placeholder="Introduceți numele">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="prenume">Prenume</label>
                                        <input type="text" aria-required="true" name="widget-contact-form-name" required class="form-control required name" placeholder="Introduceți prenumele">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="email">Email</label>
                                        <input type="email" aria-required="true" name="widget-contact-form-email" required class="form-control required email" placeholder="Introduceți adresa de mail">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="telefon">Telefon</label>
                                        <input type="text" aria-required="true" name="widget-contact-form-name" required class="form-control required name" placeholder="Introduceți numărul de telefon">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label for="subject">Subiect</label>
                                        <input type="text" name="widget-contact-form-subject" required class="form-control required" placeholder="Subiect...">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="message">Mesaj</label>
                                    <textarea type="text" name="widget-contact-form-message" required rows="5" class="form-control required" placeholder="Introduceți mesajul dumneavoastră"></textarea>
                                </div>
                                <!--    <div class="form-group">
                                    <script src="https://www.google.com/recaptcha/api.js"></script>
                                    <div class="g-recaptcha" data-sitekey="6LddCxAUAAAAAKOg0-U6IprqOZ7vTfiMNSyQT2-M"></div>
                                </div> -->
                                <button class="btn" type="submit" id="form-submit"><i class="fa fa-paper-plane"></i>&nbsp;Trimiteți mesaj</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <footer id="footer">
            <div class="copyright-content">
                <div class="container">
                    <div class="copyright-text text-center">&copy; <?php echo date("Y"); ?> Proiect informatică. Toate drepturile rezervate.</div>
                </div>
            </div>
        </footer>
    </div>

    <a id="scrollTop"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>

    <?php include("components/scripts.php"); ?>
</body>
</html>