<?php

include "../db.php";

$method = $_REQUEST["method"];

function requireParam($name) {
    $param = $_REQUEST[$name];
    if (!isset($param)) die(json_encode(array("error"=>true,"message"=>"parameter $name is required")));
    return $param;
}


switch ($method) {
    case "loginUser":
        $userName = requireParam("userName");
        $userIdResult = SELECT_ONE("select id from user where name='$userName'");
        if ($userIdResult!==null) {
            renderJSON(array("userId"=>$userIdResult["id"]));
        } else {
            INSERT("insert into user (name) values ('$userName')");
            $userIdResult = SELECT_ONE("select id from user where name='$userName'");
            renderJSON(array("userId"=>$userIdResult["id"]));
        }
        break;
    case "getMeasures":
        renderJSON(SELECT("select * from measure"));
        break;
    case "getProducts":
        renderJSON(SELECT("select * from product"));
        break;
    case "getRecordsForDate":
        $year = requireParam("year");
        $month = requireParam("month");
        $day = requireParam("day");
        $userId = requireParam("userId");
        renderJSON(SELECT("SELECT id, userId, productId, quantity, proteins, TIME(date) as time, DATE(date) as date FROM record  where DATE(date) = '$year-$month-$day' and userId=$userId"));
        break;
    case "addRecord":
        $userId = requireParam("userId");
        $productId = requireParam("productId");
        $quantity = requireParam("quantity");
        $proteins = requireParam("proteins");
        renderJSON(INSERT("INSERT INTO record (userId,productId,quantity,proteins) VALUES ($userId,$productId,$quantity,$proteins)"));
        break;
    default:
        die(json_encode(array("error"=>true,"message"=>"no such method: $method")));
};



//