function mostraData(){
    const h1 = document.querySelector('.container h1');
    const data = new Date();

    function zeroAEsquerda (num){
        return num >= 10 ? num : `0${num}`
    }

    function getWeekDay(semana){
        let diaSemana;
        switch(semana){
            case 0:
                diaSemana = 'Domingo'
                return diaSemana;
            case 1:
                diaSemana = 'Segunda-feira'
                return diaSemana;
            case 2:
                diaSemana = 'Terça-feira'
                return diaSemana;
            case 3:
                diaSemana = 'Quarta-feira'
                return diaSemana;
            case 4:
                diaSemana = 'Quinta-feira'
                return diaSemana;
            case 5:
                diaSemana = 'Sexta-feira'
                return diaSemana;
            case 6:
                diaSemana = 'Sábado'
                return diaSemana;
        }
    }

    function getMesDoAno(mesAno){
        let mes;
        switch(mesAno){
            case 1:
                mes = 'Janeiro'
                return mes;
            case 2:
                mes = 'Fevereiro'
                return mes;
            case 3:
                mes = 'Março'
                return mes;
            case 4:
                mes = 'Abril'
                return mes;
            case 5:
                mes = 'Maio'
                return mes;
            case 6:
                mes = 'Junho'
                return mes;
            case 7:
                mes = 'Julho'
                return mes;
            case 8:
                mes = 'Agosto'
                return mes;
            case 9:
                mes = 'Setembro'
                return mes;
            case 10:
                mes = 'Outubro'
                return mes;
            case 11:
                mes = 'Novembro'
                return diaSemana;
            case 12:
                mes = 'Dezembro'
                return mes;
        }
    }

    function formataData(data){
        const dia = data.getDate();
        const mes = getMesDoAno(data.getMonth() + 1);
        const ano = data.getFullYear();
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const seg = data.getSeconds();
        const diaSemana = getWeekDay(data.getDay());

        return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`
    }

    function exibirData(formato){
        h1.innerHTML = formato;
    }

    const formata = formataData(data);
    console.log(formata);
    exibirData(formata);
}

mostraData();