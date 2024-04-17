<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        header {
            background-color: #fff; 
            color: #784cfb;
            padding: 10px 0;
        }
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .logo span{
            color: #784cfb;
        }

        .logo a {
            color: #000;
            text-decoration: none;
            font-size: 24px;
        }
        .links ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        .links ul li {
            margin-right: 20px;
        }
        .links ul li a {
            color: #784cfb;
            text-decoration: none;
            font-size: 18px;
        }
        .links ul li a.active {
            font-weight: bold;
        }
        .content {
            text-align: center;
            margin-top: 50px;
            color: #000;
        }
        .content p {
            font-size: 30px;
            margin-bottom: 20px;
        }
        .content p a {
            color: #784cfb;
            text-decoration: none;
        }
        .content p a:hover {
            text-decoration: underline;
        }

        @media screen and (max-width: 768px) {
            .container {
                flex-direction: column;
                align-items: flex-start;
            }
            .links ul {
                margin-top: 10px;
            }
            .links ul li {
                margin-right: 10px;
            }
            .content {
                padding: 0 10px;
            }
        }

        @media screen and (max-width: 500px) {
            .links ul li a {
            color: #784cfb;
            text-decoration: none;
            font-size: 10px;
        }
        .content p {
            font-size: 20px;
            margin-bottom: 20px;
        }
    }

    </style>
</head>
<body>

<header id="header">
    <nav>
        <div class="container">
            <div class="logo">
                <a href="#" class="logo">Easy<span>German.</span></a>
            </div>
            <div class="links">
                <ul>
                    <li><a href="../login/logout.php">Logout</a></li>
                    <li><a href="../index.html" class="active">Home</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<div class="content">
    <?php
    session_start();
    if (!isset($_SESSION['SESSION_EMAIL'])) {
        header("Location: index.php");
        die();
    }

    include 'config.php';

    $query = mysqli_query($conn, "SELECT * FROM users WHERE email='{$_SESSION['SESSION_EMAIL']}'");

    if (mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_assoc($query);
        echo "<p>Welcome , " . $row['name'] . "! <a href='../content/p1.html'>Get started</a></p>";
        echo "<p>Don't forget to <a href='logout.php'>log out</a> when you're done.</p>";
    }
    ?>
</div>

</body>
</html>
