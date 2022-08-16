<?php

    include($_SERVER['DOCUMENT_ROOT'] . "/server/db.inc.php");

    $SQL = "SELECT * FROM products";

    $result = $conn->query($SQL);

    echo json_encode($result->fetch_all(MYSQLI_ASSOC));