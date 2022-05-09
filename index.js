const Discord = require("discord.js")
const client = new Discord.Client()





const date = new Date();

min = date.getMinutes()
hour = date.getHours() + 1

day = date.getDate()
month = date.getMonth() + 1
year = date.getFullYear()


//daily
const today = date.toLocaleDateString()
var lastDaily = 69

//monthly
let thisMonth = month + "/" + year
var lastMonthly = 420





//prefix
const Prefix = process.env['Prefix']





client.on('message', (message) => {
  // if message not in a server
  if (!message.guild) return
  let args = message.content.slice(Prefix.length).split(' ')



  
  // Any command that doesn't start with ##



  //hello
  
  if (message.content.toLowerCase() === 'hello'|| message.content.toLowerCase() === 'hi') {
	  return message.channel.send("hello to you, " + message.author.username)
	}



  

  //cya
  
  if (message.content.toLowerCase() === 'goodbye' || message.content.toLowerCase() === 'bye' || message.content.toLowerCase() === 'cya') {
	  return message.channel.send("Cya, " + message.author.username)
	}




  

  // hi hungry im dad
  
  if (message.content.startsWith("I'm ") || message.content.startsWith("i'm ")) {
    var hihungry = message.content.substring(4)
    return message.channel.send("Hi " + hihungry + ", I'm dad")
  } else if (message.content.startsWith("im ")) {
    var hihungry = message.content.substring(3)
    return message.channel.send("Hi " + hihungry + ", I'm dad")
  }





  //-------------------------------------------------------------------//

  
  // Any command that starts with ##
  if (!message.content.startsWith(Prefix)) return;



  //help
  
  if (args[0].toLowerCase() === 'help') {
    return message.channel.send('General commands:\r\n `##ping` - ping \r\n `##copy` - copies your messages\r\n `##bruh` - just... bruh \r\n Card game commands:\r\n `##deck` - show deck \r\n `##index` - see card index \r\n `##shop` - shop exclusive card crates \r\n `##buy` - buy card crates \r\n `##balance` - see balance \r\n Rewards: \r\n `##daily` - receive your daily reward \r\n `##monthly` - receive your monthly reward')
  }




  //breh
  
  if (args[0].toLowerCase() === 'bruh') {
    return message.channel.send('That right there is a BRUH MOMENT')
  }




  //ping
  
  if (args[0].toLowerCase() === 'ping') {
    return message.reply('pong!')
  }


  
  
  

  //copy

  var copycount = 3
  if (args[0].toLowerCase() === 'copy') {
    message.channel.send("Type something, I'm copying...")

    client.on('message', (message) => {
      if (message.author.bot) return

      if (copycount >= 1) {
        message.channel.send(message.content)

        copycount -= 1
      }
      else {
        return
      }
    })
  }




  //-------------------------------------------------------------------//
  
  // card game commands



  
  //deck
  
  if (args[0].toLowerCase() === 'deck') {
    return message.channel.send('You currently have no cards in your deck.')
  }
  




  //index

  if (args[0].toLowerCase() === 'index') {
    return message.channel.send('We have no cards at the moment.')
  }


  

  //shop

  if (args[0].toLowerCase() === 'shop') {
    message.channel.send("~~Gimme the drugz~~  shop not implemented yet :(")
  }




  
  //buy
  
  if (message.content.startsWith(Prefix + 'buy')) {
    if (message.content === Prefix + 'buy') {
      message.channel.send('Ayo, you gotta buy something. *shake my head')
    } else {
      let item = message.content.substring(Prefix.length + 3)
      message.channel.send(item + " isn't even in the shop. Bruh")
    }
  }


  

  // balance

  if (args[0].toLowerCase() === 'bal' || args[0].toLowerCase() === 'balance') {
    return message.channel.send(`You have no cash cos ur broke lamo imagine`)
  }



  
  

  // daily

  if (args[0].toLowerCase() === 'daily') {
    if (today != lastDaily) {
      lastDaily = today
      
      message.channel.send('You claimed your daily rewards.')
    } else {
      message.channel.send('You have already claimed your daily rewards today. *facepalm')
    }
  }



  //monthly
  
  if (args[0].toLowerCase() === 'monthly') {
    thisMonth = month + "/" + year
    
    if (thisMonth != lastMonthly) {
      lastMonthly = thisMonth
      
      message.channel.send('You claimed your monthly rewards.')
    } else {
      message.channel.send('You have already claimed your monthly rewards. *facepalm')
    }
  }
  
})

client.on("ready", () => {
	console.log('LolBot online bois - ' + hour + ':' + min)
})

client.login(process.env['TOKEN'])
