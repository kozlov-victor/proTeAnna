<?php

$host = 'localhost';
$user = 'SecretUser1';
$password = '17zxspectrumAY17';
$database = 'victorzx';

header('Content-Type: application/json');
header('Content-Type: text/json; charset=utf-8');

function connect(){
    global $host, $user, $password, $database;

    $db = mysqli_connect($host,$user,$password,$database)
        or die(json_encode(array("error"=>true,"message"=>"db connection error")));
    return $db;
}

function SELECT($query){

    $db = connect();

    $result = mysqli_query($db, $query) or die(json_encode(array("error"=>true,"message"=>"query error")));

    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    return $rows;
}

function SELECT_ONE($query){
    $db = connect();

    $result = mysqli_query($db, $query) or die(json_encode(array("error"=>true,"message"=>"query error")));

    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    if (count($rows)>0) return $rows[0];
    else return null;
}

function INSERT($query){

    $db = connect();

    mysqli_query($db, $query) or die(json_encode(array("error"=>true,"message"=>"query error")));

    $rows = array("success"=>true);

    return $rows;
}

function renderJSON($result){
    print json_encode($result, JSON_UNESCAPED_UNICODE);
}
