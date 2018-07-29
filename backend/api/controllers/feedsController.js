const Feed = require('../models/feedsModel.js');
const Post = require('../models/postsModel.js');

exports.init = (req, res) => {
  var feed1 = new Feed({ 
	name: 'O sentido das coisas', 
	url: 'http://www.exemplo.com', 
  });

  feed1.save(function (err) {
    if(err) return console.error(err.stack)
	
	console.log("Feed1 Adicionado!")
	

    var post1 = new Post({
	  title: "Como funciona a geladeira?",
	  text: "As geladeiras Frost Free possuem um temporizador que ativa uma resistência elétrica de aquecimento ou uma bomba de calor. Um destes equipamentos derrete os cristais que se formam impossibilitando o acúmulo de gelo no interior do freezer.",
      url: "https://www.zoom.com.br/geladeira/deumzoom/como-funciona-a-tecnologia-frost-free",
      read: true,
	  feed: feed1._id
    });

    post1.save(function (err) {
	  if(err) return console.error(err.stack)
	  
	  console.log("post1 foi adicionado")
    });
	
	var post2 = new Post({
        title: "Como funciona o Ferro de Passar?",
        text: "Dentro do ferro elétrico tem um componente chamado de resistor, cuja uma de suas funções nos circuitos elétricos é de se opor à passagem da corrente elétrica. Tal componente também existe nos chuveiros elétricos, secadores de cabelo, churrasqueiras elétricas, ou seja, em todos os equipamentos que precisam gerar calor como razão princípal para o funcionamento. Os resistores elétricos são formados por ligas ou fios metálicos com resistência baixa. Ao serem submetidos a uma diferença de potencial, são percorridos por uma corrente elétrica e, dessa forma, dissipam potência gerando calor.",
        url: "http://omundodafisicaedamatematica.blogspot.com/2015/02/como-funciona-o-ferro-de-passar-roupas.html",
        read: false,
        feed: feed1._id
	});
	
	post2.save(function(err){
		if(err) return console.error(err.stack)
		
		console.log("post2 Foi adicionado");
	});
	
  });
  
  
  var feed2 = new Feed({ 
        name: 'Que animal é este?', 
        url: 'http://www.test2.com.br'
	});
  
  feed2.save(function(err){
	if(err) return console.error(err.stack)
	
	console.log("feed2 foi adicionado.")
	
	var post1 = new Post({
        title: "Leão",
        text: "O leão [feminino: leoa] é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae.",
        url: "https://pt.wikipedia.org/wiki/Le%C3%A3o",
        read: false,
        feed: feed2._id
	});
	
	post1.save(function(err){
		if(err) return console.error(err.stack)
		console.log("post1 Adicionado")
	});
	
	var post2 = new Post({
        title: "Guepardo",
        text: "O guepardo ou chita é um animal da família dos felídeos, ainda que de comportamento atípico, se comparado com outros da mesma família. É a única espécie vivente do gênero Acinonyx.",
        url: "https://pt.wikipedia.org/wiki/Acinonyx_jubatus",
        read: false,
        feed: feed2._id
	});
	
	post2.save(function(err){
		if(err) return console.error(err.stack)
		console.log("post2 Adicionado")
    });
    

    var post3 = new Post({
        title: "Cão",
        text: "O cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano.",
        url: "https://pt.wikipedia.org/wiki/C%C3%A3o",
        read: true,
        feed: feed2._id
	});
	
	post3.save(function(err){
		if(err) return console.error(err.stack)
		console.log("post3 Adicionado")
	})
  });
  
  res.send("Done Initial Data!");
}

exports.findAll = (req, res) => {
	Feed.find()
    .then(posts => {
        res.send(posts);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};