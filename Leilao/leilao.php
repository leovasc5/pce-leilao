<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/teste.css" rel="stylesheet">
    <link href="css/alert.css" rel="stylesheet">
    <link href="css/select.css" rel="stylesheet">
    <link href="css/number.css" rel="stylesheet">
    <link href="css/button.css" rel="stylesheet">
    <link rel="shortcut icon" href="img/ico.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <title>Leilão</title>
</head>
<body>

<?php

if(
//Goleiros    
isset($_POST['gol1']) and
isset($_POST['gol2']) and
isset($_POST['gol3']) and
isset($_POST['gol4']) and

//Laterais Esquerdos
isset($_POST['le1']) and
isset($_POST['le2']) and
isset($_POST['le3']) and
isset($_POST['le4']) and

//Zagueiros Esquerdos
isset($_POST['ze1']) and
isset($_POST['ze2']) and
isset($_POST['ze3']) and
isset($_POST['ze4']) and

//Zagueiros Direitos
isset($_POST['zd1']) and
isset($_POST['zd2']) and
isset($_POST['ze3']) and
isset($_POST['ze4']) and

//Laterais Direitos
isset($_POST['ld1']) and
isset($_POST['ld2']) and
isset($_POST['ld3']) and
isset($_POST['ld4']) and

//Meias Esquerdas
isset($_POST['me1']) and
isset($_POST['me2']) and
isset($_POST['me3']) and
isset($_POST['me4']) and

//Meias Direitas
isset($_POST['md1']) and
isset($_POST['md2']) and
isset($_POST['md3']) and
isset($_POST['md4']) and

//Meias Centrais
isset($_POST['mc1']) and
isset($_POST['mc2']) and
isset($_POST['mc3']) and
isset($_POST['mc4']) and

//Pontas Esquerdas
isset($_POST['pe1']) and
isset($_POST['pe2']) and
isset($_POST['pe3']) and
isset($_POST['pe4']) and

//Centroavantes
isset($_POST['ca1']) and
isset($_POST['ca2']) and
isset($_POST['ca3']) and
isset($_POST['ca4']) and

//Pontas Direitas
isset($_POST['pd1']) and
isset($_POST['pd2']) and
isset($_POST['pd3']) and
isset($_POST['pd4']) 

){

    echo "
    <script>
    
    var gol1 = '".$_POST['gol1']."';
    var gol2 = '".$_POST['gol2']."';
    var gol3 = '".$_POST['gol3']."';
    var gol4 = '".$_POST['gol4']."';
    
    var le1 = '".$_POST['le1']."';
    var le2 = '".$_POST['le2']."';
    var le3 = '".$_POST['le3']."';
    var le4 = '".$_POST['le4']."';

    var ze1 = '".$_POST['ze1']."';
    var ze2 = '".$_POST['ze2']."';
    var ze3 = '".$_POST['ze3']."';
    var ze4 = '".$_POST['ze4']."';

    var zd1 = '".$_POST['zd1']."';
    var zd2 = '".$_POST['zd2']."';
    var zd3 = '".$_POST['zd3']."';
    var zd4 = '".$_POST['zd4']."';

    var ld1 = '".$_POST['ld1']."';
    var ld2 = '".$_POST['ld2']."';
    var ld3 = '".$_POST['ld3']."';
    var ld4 = '".$_POST['ld4']."';

    var me1 = '".$_POST['me1']."';
    var me2 = '".$_POST['me2']."';
    var me3 = '".$_POST['me3']."';
    var me4 = '".$_POST['me4']."';

    var md1 = '".$_POST['md1']."';
    var md2 = '".$_POST['md2']."';
    var md3 = '".$_POST['md3']."';
    var md4 = '".$_POST['md4']."';

    var mc1 = '".$_POST['mc1']."';
    var mc2 = '".$_POST['mc2']."';
    var mc3 = '".$_POST['mc3']."';
    var mc4 = '".$_POST['mc4']."';

    var pe1 = '".$_POST['pe1']."';
    var pe2 = '".$_POST['pe2']."';
    var pe3 = '".$_POST['pe3']."';
    var pe4 = '".$_POST['pe4']."';

    var ca1 = '".$_POST['ca1']."';
    var ca2 = '".$_POST['ca2']."';
    var ca3 = '".$_POST['ca3']."';
    var ca4 = '".$_POST['ca4']."';

    var pd1 = '".$_POST['pd1']."';
    var pd2 = '".$_POST['pd2']."';
    var pd3 = '".$_POST['pd3']."';
    var pd4 = '".$_POST['pd4']."';

    </script>
    ";
}
    ?>
    <container class='container'>
    <div><img src='img/logo.png' id='logo'></div>

    </div>
    <div class='player' id='player1'>
        <p><b>Nome: </b>Igor</p>
        <b> Saldo: </b><label id='saldo_igor'>110</label><br>
        <b>Gastos: </b><label id='gastos_igor'>0</label>
    </div>
    <div class='player' id='player2'>
        <p><b>Nome: </b>Léo</p>
        <b>Saldo: </b><label id='saldo_leo'>110</label><br>
        <b>Gastos: </b><label id='gastos_leo'>0</label>
    </div>
    <div class='player' id='player3'>
        <p><b>Nome: </b>Natan</p>
        <b>Saldo: </b><label id='saldo_natan'>110</label><br>
        <b>Gastos: </b><label id='gastos_natan'>0</label>
    </div>
    <div class='player' id='player4'>
        <p><b>Nome: </b>Vitor</p>
        <b>Saldo: </b><label id='saldo_vitor'>110</label><br>
        <b>Gastos: </b><label id='gastos_vitor'>0</label>
    </div>
    </container>
    <br><br><br><br><br><br><br>
   
    <div class='leilao'>
        <p id='level4'><b>Estrelas: ★★★★</b></p>
        <p id='nome_j4'><b>Jogador: </b></p>
        <input placeholder='Proposta' min='3' id='prop4' type='number'>
        <button onclick='menos_4()' class='a'>-</button><button onclick='mais_4()' class='b'>+</button><br><br>
        <div class='select'>
        <select id='slct_4'>
            <option disabled selected>Escolha</option>
            <option>Igor</option>
            <option>Léo</option>
            <option>Natan</option>
            <option>Vitor</option>
        </select>
        </div><br>
        <input class='proposta' type='submit' onclick='leiloar(jogador4.textContent, propj4.value, propv4.value, 4)' value='Leiloar'></input>
    </div>
    <div class='leilao'>
        <p id='level3'><b>Estrelas: ★★★☆</b></p>
        <p id='nome_j3'><b>Jogador: </b></p>
        <input placeholder='Proposta' min='3'  id='prop3' type='number'>
        <button onclick='menos_3()' class='a'>-</button><button onclick='mais_3()' class='b'>+</button><br><br>
        <div class='select'>
        <select id='slct_3'>
            <option disabled selected>Escolha</option>
            <option>Igor</option>
            <option>Léo</option>
            <option>Natan</option>
            <option>Vitor</option>
        </select>
        </div><br>
        <input class='proposta' type='submit' onclick='leiloar(jogador3.textContent, propj3.value, propv3.value, 3)' value='Leiloar'></input>
    </div>
    <div class='leilao'>
        <p id='level2'><b>Estrelas: ★★☆☆</b></p>
        <p id='nome_j2'><b>Jogador: </b></p>
        <input placeholder='Proposta' min='3'  id='prop2' type='number'>
        <button onclick='menos_2()' class='a'>-</button><button onclick='mais_2()' class='b'>+</button><br><br>
        <div class='select'>
        <select id='slct_2'>
            <option disabled selected>Escolha</option>
            <option>Igor</option>
            <option>Léo</option>
            <option>Natan</option>
            <option>Vitor</option>
        </select>
        </div><br>
        <input class='proposta' type='submit' onclick='leiloar(jogador2.textContent, propj2.value, propv2.value, 2)' value='Leiloar'></input>
        
    </div>
    <div class='leilao'>
        <p id='level1'><b>Estrelas: ★☆☆☆</b></p>
        <p id='nome_j1'><b>Jogador: </b></p>
        <input placeholder='Proposta' min='3'  id='prop1' type='number'>
        <button onclick='menos_1()' class='a'>-</button><button onclick='mais_1()' class='b'>+</button><br><br>
        <div class='select'>
        <select id='slct_1'>
            <option disabled selected>Escolha</option>
            <option>Igor</option>
            <option>Léo</option>
            <option>Natan</option>
            <option>Vitor</option>
        </select></div><br>
        <input class='proposta' type='submit' onclick='leiloar(jogador1.textContent, propj1.value, propv1.value, 1)'
         value='Leiloar'></input>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <center>
    <input class='botao' type='submit' id='btn' value='Iniciar' onclick='next()' ></input><br>
    <input class='botao' id='limpar' type='submit' id='btn_limpar' onclick='limpar()' value='Limpar'></input>
    </center>

<!-- 
★☆☆☆    Ruim
★★☆☆    Mediano
★★★☆    Bom
★★★★    Ótimo
-->

    <div class='time'>
        <h2 class='center'>Time do Vitor</h2>
        <p id='lista_vitor'></p>
    </div>
    <div class='time'>
        <h2 class='center'>Time do Natan</h2>
        <p id='lista_natan'></p>
    </div>
    <div class='time'>
        <h2 class='center'>Time do Léo</h2>
        <p id='lista_leo'></p>
    </div>

    <div class='time'>
        <h2 class='center'>Time do Igor</h2>
        <p id='lista_igor'></p>
    </div>
    
    <br><br><br><br><br><br><br><br><br>


<script src='js/teste.js'></script>
<script src='js/alert.js'></script>
<script src='js/number.js'></script>
</body>
</html>



