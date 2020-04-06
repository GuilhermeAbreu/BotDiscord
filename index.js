const Discord = require('discord.js');
const client = new Discord.Client();
//Arquivo de configuração
const config = require("./config.json")

//iniciando bot
client.on('ready', () => {
  console.log(`Logado como ${client.user.tag}!`);
  lembrete();
});

// json caminho *-* msg.channel.id e mensagem msg.content
// id Channel suporte: 689484609536393259
// monitoramento de conversa
client.on('message', msg => {

  if (msg.content === 'alertas' && msg.channel.id == '689484609536393259') {
        msg.reply("Os alertas são especialmente para o #suporte, essa mensagem não deve aparecer em outro Channel")
    }

});

//função para enviar mensagem deve ser passado um **texto** e o **id do canal***
function sendMessageDiscord(message, channelID){

    try {
        var generalChannel = client.channels.cache.get(channelID) // Replace with known channel ID
        generalChannel.send(message)

        console.log("Mensagem enviada para: " + channelID)

      } catch (error) {

          console.error("Falha ao enviar mensagem" + channelID)

      }

}

//função para pegar data e hora
function getData(){
    return now = new Date;
}


// função lembrete nela contem as mensagem executada
function lembrete(){
    let Chat = true;
    let chamadosAtrasados = true;
    //let alertaTeste = true;

    // a cada 5 minutos ela e executada e verifica a hora caso se de acordo com a condição a mesma e executada
    setInterval(function(){

        horas = getData()

        //if(horas.getHours() >= 16 && horas.getHours() < 17 && alertaTeste){
            //sendMessageDiscord("Olá pessoal agora estou online!, os alertas serão disparados em horarios programados. Para melhorias falar com @Guilherme Abreu", "689484609536393259")
            //alertaTeste = false;
        //}

        if(horas.getHours() >= 8 && horas.getHours() < 9 && Chat){
            sendMessageDiscord("Lembrar se de conectar no Chat-On Line..", "689484609536393259")
            Chat = false;
        }

        if(horas.getHours() >= 17 && horas.getHours() < 18 && chamadosAtrasados){
            sendMessageDiscord("Equipe, não esquecerem de tratar os chamados que encerram hoje e registrar as horas de atendimento corretamente. :man_office_worker:", "689484609536393259")
            chamadosAtrasados = false;
        }

        if(horas.getHours() >= 18 && horas.getHours() <= 19){
            Chat = true;
            chamadosAtrasados = true;
        }

    }, 300000)

}

//ejetando o token que fica na pasta config.js
client.login(config.token);