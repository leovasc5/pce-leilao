saldo_igor = document.getElementById('saldo_igor');
gastos_igor = document.getElementById('gastos_igor');
    
saldo_leo = document.getElementById('saldo_leo');    
gastos_leo = document.getElementById('gastos_leo');
    
saldo_natan = document.getElementById('saldo_natan');
gastos_natan = document.getElementById('gastos_natan');

saldo_vitor = document.getElementById('saldo_vitor');
gastos_vitor = document.getElementById('gastos_vitor');
    
//Informações dos Jogadores
    
level1 = document.getElementById('level1');    
jogador1 = document.getElementById('nome_j1');

level2 = document.getElementById('level2');
jogador2 = document.getElementById('nome_j2');

level3 = document.getElementById('level3');
jogador3 = document.getElementById('nome_j3');

level4 = document.getElementById('level4');
jogador4 = document.getElementById('nome_j4');
    
//Informações das Propostas
propj1 = document.getElementById('slct_1');
propj2 = document.getElementById('slct_2');
propj3 = document.getElementById('slct_3');
propj4 = document.getElementById('slct_4');

propv1 = document.getElementById('prop1');
propv2 = document.getElementById('prop2');
propv3 = document.getElementById('prop3');
propv4 = document.getElementById('prop4');

//CRIANDO INFORMAÇÕES DOS JOGADORES
igor_time = [];
igor_estrelas = 0;
media_igor = 0;

leo_time = [];
leo_estrelas = 0;
media_leo = 0;

natan_time = [];
natan_estrelas = 0;
media_natan = 0;

vitor_time = [];
vitor_estrelas = 0;
media_vitor = 0;
     
function leiloar(jogador, player, valor, estrelas){
    var lista_igor = document.getElementById('lista_igor');
    var lista_leo = document.getElementById('lista_leo');
    var lista_natan = document.getElementById('lista_natan');
    var lista_vitor = document.getElementById('lista_vitor');

    if(player == 'Igor'){
        saldo_igor_temp = saldo_igor.textContent - valor;
        saldo_igor.innerHTML = saldo_igor_temp;

        gastos_igor_temp = parseInt(gastos_igor.textContent) + parseInt(valor);
        gastos_igor.innerHTML = parseInt(gastos_igor_temp); 
        
        res = jogador.split(": ");
        jogador = res[1];

        igor_time.push(jogador);
        igor_estrelas+=estrelas;
        lista_igor.innerHTML = igor_time.join('<br>');
    }

    if(player == 'Léo'){
        saldo_leo_temp = saldo_leo.textContent - valor;
        saldo_leo.innerHTML = saldo_leo_temp;

        gastos_leo_temp = parseInt(gastos_leo.textContent) + parseInt(valor);
        gastos_leo.innerHTML = parseInt(gastos_leo_temp); 
                   
        res = jogador.split(": ");
        jogador = res[1];

        leo_time.push(jogador);
        leo_estrelas+=estrelas;
        lista_leo.innerHTML = leo_time.join('<br>');
    }

    if(player == 'Natan'){
        saldo_natan_temp = saldo_natan.textContent - valor;
        saldo_natan.innerHTML = saldo_natan_temp;

        gastos_natan_temp = parseInt(gastos_natan.textContent) + parseInt(valor);
        gastos_natan.innerHTML = parseInt(gastos_natan_temp); 
                   
        res = jogador.split(": ");
        jogador = res[1];

        natan_time.push(jogador);
        natan_estrelas+=estrelas;
        lista_natan.innerHTML = natan_time.join('<br>');
    }

    if(player == 'Vitor'){
        saldo_vitor_temp = saldo_vitor.textContent - valor;
        saldo_vitor.innerHTML = saldo_vitor_temp;

        gastos_vitor_temp = parseInt(gastos_vitor.textContent) + parseInt(valor);
        gastos_vitor.innerHTML = parseInt(gastos_vitor_temp); 
                   
        res = jogador.split(": ");
        jogador = res[1];

        vitor_time.push(jogador);
        vitor_estrelas+=estrelas;
        lista_vitor.innerHTML = vitor_time.join('<br>');
    }

    // else{}
}

btn = document.getElementById('btn');
cliques = 0;

function next(){
    cliques +=1;
    if(cliques == 1){
        jogador1.innerHTML = '<b>Jogador: </b>'+gol1;
        jogador2.innerHTML = '<b>Jogador: </b>'+gol2;
        jogador3.innerHTML = '<b>Jogador: </b>'+gol3;
        jogador4.innerHTML = '<b>Jogador: </b>'+gol4;
        swal('1ª Rodada', 'Goleiro');
        document.getElementById('btn').value = 'Próxima rodada';
    }else if(cliques == 2){
        jogador1.innerHTML = '<b>Jogador: </b>'+le1;
        jogador2.innerHTML = '<b>Jogador: </b>'+le2;
        jogador3.innerHTML = '<b>Jogador: </b>'+le3;
        jogador4.innerHTML = '<b>Jogador: </b>'+le4;
        swal('2ª Rodada', 'Lateral Esquerdo');
    }else if(cliques == 3){
        jogador1.innerHTML = '<b>Jogador: </b>'+ze1;
        jogador2.innerHTML = '<b>Jogador: </b>'+ze2;
        jogador3.innerHTML = '<b>Jogador: </b>'+ze3;
        jogador4.innerHTML = '<b>Jogador: </b>'+ze4;
        swal('3ª Rodada', 'Zagueiro');
    }else if(cliques == 4){
        jogador1.innerHTML = '<b>Jogador: </b>'+zd1;
        jogador2.innerHTML = '<b>Jogador: </b>'+zd2;
        jogador3.innerHTML = '<b>Jogador: </b>'+zd3;
        jogador4.innerHTML = '<b>Jogador: </b>'+zd4;
        swal('4ª Rodada', 'Zagueiro');
    }else if(cliques == 5){
        jogador1.innerHTML = '<b>Jogador: </b>'+ld1;
        jogador2.innerHTML = '<b>Jogador: </b>'+ld2;
        jogador3.innerHTML = '<b>Jogador: </b>'+ld3;
        jogador4.innerHTML = '<b>Jogador: </b>'+ld4;
        swal('5ª Rodada', 'Lateral Direito');
    }else if(cliques == 6){
        jogador1.innerHTML = '<b>Jogador: </b>'+me1;
        jogador2.innerHTML = '<b>Jogador: </b>'+me2;
        jogador3.innerHTML = '<b>Jogador: </b>'+me3;
        jogador4.innerHTML = '<b>Jogador: </b>'+me4;
        swal('6ª Rodada', 'Meia Esquerdo');
    }else if(cliques == 7){
        jogador1.innerHTML = '<b>Jogador: </b>'+md1;
        jogador2.innerHTML = '<b>Jogador: </b>'+md2;
        jogador3.innerHTML = '<b>Jogador: </b>'+md3;
        jogador4.innerHTML = '<b>Jogador: </b>'+md4;
        swal('7ª Rodada', 'Meia Direito');
    }else if(cliques == 8){
        jogador1.innerHTML = '<b>Jogador: </b>'+mc1;
        jogador2.innerHTML = '<b>Jogador: </b>'+mc2;
        jogador3.innerHTML = '<b>Jogador: </b>'+mc3;
        jogador4.innerHTML = '<b>Jogador: </b>'+mc4;
        swal('8ª Rodada', 'Meia Central');
    }else if(cliques == 9){
        jogador1.innerHTML = '<b>Jogador: </b>'+pe1;
        jogador2.innerHTML = '<b>Jogador: </b>'+pe2;
        jogador3.innerHTML = '<b>Jogador: </b>'+pe3;
        jogador4.innerHTML = '<b>Jogador: </b>'+pe4;
        swal('9ª Rodada', 'Ponta Esquerda');
    }else if(cliques == 10){
        jogador1.innerHTML = '<b>Jogador: </b>'+ca1;
        jogador2.innerHTML = '<b>Jogador: </b>'+ca2;
        jogador3.innerHTML = '<b>Jogador: </b>'+ca3;
        jogador4.innerHTML = '<b>Jogador: </b>'+ca4;
        swal('10ª Rodada', 'Centroavante');
    }else if(cliques == 11){
        jogador1.innerHTML = '<b>Jogador: </b>'+pd1;
        jogador2.innerHTML = '<b>Jogador: </b>'+pd2;
        jogador3.innerHTML = '<b>Jogador: </b>'+pd3;
        jogador4.innerHTML = '<b>Jogador: </b>'+pd4;
        swal('11ª Rodada', 'Ponta Direita');

    }else if(cliques == 12){
        media_igor = (igor_estrelas/11).toFixed(2);
        media_leo = (leo_estrelas/11).toFixed(2);
        media_natan = (natan_estrelas/11).toFixed(2);
        media_vitor = (vitor_estrelas/11).toFixed(2);
        document.getElementById('btn').value = 'Finalizar a Partida!';
        if(media_igor > media_leo && media_natan && media_vitor){
            swal('Igor Campeão!', 'Média de estrelas: '+ media_igor, 'success');
        }

        if(media_leo > media_igor && media_natan && media_vitor){
            swal('Léo Campeão!', 'Média de estrelas: '+ media_leo, 'success');
        }

        if(media_natan > media_leo && media_igor && media_vitor){
            swal('Natan Campeão!', 'Média de estrelas: '+ media_natan, 'success');
        }

        if(media_vitor > media_leo && media_igor && media_natan){
            swal('Vitor Campeão!', 'Média de estrelas: '+ media_vitor, 'success');
        }
    }else if(cliques == 13){
        document.getElementById('btn').value = 'Fim de Jogo!';
        swal('FIM DE JOGO!', 
        'Média de estrelas do Igor: '+ media_igor +
         ' estrelas.\nMédia de estrelas do Léo: '+ media_leo +
          ' estrelas.\nMédia de estrelas do Natan: '+ media_natan +
           ' estrelas.\nMédia de estrelas do Vitor: '+ media_vitor + ' estrelas.');
    }
}

function limpar(){
    document.getElementById('slct_1').selected = 'Escolha';
    document.getElementById('slct_2').selected = 'Escolha';
    document.getElementById('slct_3').selected = 'Escolha';
    document.getElementById('slct_4').selected = 'Escolha';

    propv1.value=0;
    propv2.value=0;
    propv3.value=0;
    propv4.value=0;
}