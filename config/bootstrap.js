/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

	var dummyUsers = [
	{
		"name": "Brennan",
		"company": "Auctor Ltd",
		"email": "nec.urna.et@turpisNullaaliquet.net"
	},
	{
		"name": "Isadora",
		"company": "Scelerisque Sed Foundation",
		"email": "Donec@pharetranibhAliquam.com"
	},
	{
		"name": "Jael",
		"company": "Libero Dui Nec PC",
		"email": "laoreet.posuere.enim@Etiamgravida.org"
	},
	{
		"name": "Colton",
		"company": "Diam Luctus Consulting",
		"email": "mauris.Morbi.non@CuraePhasellus.edu"
	},
	{
		"name": "Igor",
		"company": "Tempor Corp.",
		"email": "ante.Vivamus@risus.org"
	},
	{
		"name": "Jerry",
		"company": "Nisi Foundation",
		"email": "velit.Quisque@nuncestmollis.com"
	},
	{
		"name": "Myra",
		"company": "Lacus Pede Corporation",
		"email": "diam.vel.arcu@Suspendissetristique.edu"
	},
	{
		"name": "Nomlanga",
		"company": "Malesuada Associates",
		"email": "Suspendisse.sed@lobortis.edu"
	},
	{
		"name": "Imelda",
		"company": "Feugiat Nec Diam Associates",
		"email": "felis@vulputateposuere.co.uk"
	},
	{
		"name": "Vance",
		"company": "Mauris Ut Inc.",
		"email": "faucibus@Donec.edu"
	},
	{
		"name": "Karly",
		"company": "A Mi Fringilla Foundation",
		"email": "convallis.in@amet.org"
	},
	{
		"name": "Lacy",
		"company": "Fermentum Vel Mauris PC",
		"email": "condimentum@nonsollicitudina.co.uk"
	},
	{
		"name": "Elmo",
		"company": "Luctus Vulputate Corporation",
		"email": "Sed.eu@ultrices.co.uk"
	},
	{
		"name": "Latifah",
		"company": "Quisque Ac Libero Foundation",
		"email": "aptent@ipsumdolor.co.uk"
	},
	{
		"name": "Harrison",
		"company": "Sodales Institute",
		"email": "arcu.Vivamus@molestieSedid.com"
	},
	{
		"name": "Idola",
		"company": "Ullamcorper LLC",
		"email": "cursus.purus@quis.org"
	},
	{
		"name": "Rudyard",
		"company": "Odio Semper Cursus Foundation",
		"email": "eget.mollis@et.com"
	},
	{
		"name": "Diana",
		"company": "Eu Elit Corporation",
		"email": "Duis.ac.arcu@quisurna.co.uk"
	},
	{
		"name": "Louis",
		"company": "Maecenas Libero Industries",
		"email": "lobortis.quam.a@mauris.co.uk"
	},
	{
		"name": "Ali",
		"company": "Ut Sagittis LLC",
		"email": "velit@Loremipsum.ca"
	},
	{
		"name": "Garrett",
		"company": "Aenean Sed Pede Limited",
		"email": "velit@pellentesqueafacilisis.com"
	},
	{
		"name": "Amena",
		"company": "Ante Maecenas Mi Consulting",
		"email": "consectetuer.rhoncus@a.com"
	},
	{
		"name": "Joelle",
		"company": "Maecenas Ornare Incorporated",
		"email": "vulputate.risus@consectetueradipiscingelit.com"
	},
	{
		"name": "Anika",
		"company": "Ut Sem PC",
		"email": "augue.id.ante@lorem.org"
	},
	{
		"name": "Kirk",
		"company": "Neque Institute",
		"email": "tellus@fringillaDonecfeugiat.com"
	},
	{
		"name": "Amity",
		"company": "Dui Inc.",
		"email": "velit.Pellentesque.ultricies@acturpis.co.uk"
	},
	{
		"name": "Jerome",
		"company": "Morbi Neque Tellus Foundation",
		"email": "enim.diam.vel@nonhendreritid.com"
	},
	{
		"name": "Amanda",
		"company": "Magna Praesent Interdum Ltd",
		"email": "arcu.ac@Sedeget.co.uk"
	},
	{
		"name": "Brianna",
		"company": "Posuere Enim Nisl LLP",
		"email": "Cras.lorem.lorem@Phasellus.co.uk"
	},
	{
		"name": "Kitra",
		"company": "Phasellus Dapibus Quam Ltd",
		"email": "posuere@nonleo.co.uk"
	},
	{
		"name": "Walter",
		"company": "Faucibus Ut Nulla Corporation",
		"email": "tristique.pharetra.Quisque@sociisnatoquepenatibus.net"
	},
	{
		"name": "Jerome",
		"company": "Enim Nisl LLC",
		"email": "ac.sem.ut@egestasrhoncus.co.uk"
	},
	{
		"name": "Leslie",
		"company": "Aliquam Arcu Limited",
		"email": "volutpat@sagittisplacerat.edu"
	},
	{
		"name": "Laurel",
		"company": "Cursus LLP",
		"email": "lorem.eget.mollis@velvulputateeu.net"
	},
	{
		"name": "Damon",
		"company": "Quis Diam Pellentesque Company",
		"email": "In.condimentum@ligula.ca"
	},
	{
		"name": "Uta",
		"company": "Sed Associates",
		"email": "mauris.sit.amet@nibhAliquamornare.com"
	},
	{
		"name": "Quinn",
		"company": "Tincidunt Donec Vitae Industries",
		"email": "eget.venenatis@velmaurisInteger.net"
	},
	{
		"name": "Stacey",
		"company": "Non Leo Vivamus PC",
		"email": "Quisque@Sednunc.com"
	},
	{
		"name": "Haviva",
		"company": "Iaculis Industries",
		"email": "Mauris@semegestas.co.uk"
	},
	{
		"name": "September",
		"company": "Sit Amet Lorem Company",
		"email": "Vivamus.non@risusvariusorci.ca"
	},
	{
		"name": "Kirsten",
		"company": "Nullam Suscipit Incorporated",
		"email": "interdum@libero.ca"
	},
	{
		"name": "Cara",
		"company": "Mus Aenean Ltd",
		"email": "id.nunc.interdum@pedesagittis.net"
	},
	{
		"name": "Phyllis",
		"company": "Tempus Lorem PC",
		"email": "bibendum@diamloremauctor.co.uk"
	},
	{
		"name": "Zane",
		"company": "Porttitor PC",
		"email": "Quisque.imperdiet.erat@erat.edu"
	},
	{
		"name": "Mollie",
		"company": "Non Inc.",
		"email": "dictum.ultricies@tinciduntnuncac.org"
	},
	{
		"name": "Mariam",
		"company": "Adipiscing Ligula LLP",
		"email": "erat@laoreet.edu"
	},
	{
		"name": "Kellie",
		"company": "Lectus Rutrum Urna Ltd",
		"email": "dolor.dolor.tempus@MaurisnullaInteger.com"
	},
	{
		"name": "Mohammad",
		"company": "Vivamus Euismod Institute",
		"email": "montes@dolorFuscemi.edu"
	},
	{
		"name": "Edward",
		"company": "Vestibulum Massa Institute",
		"email": "mi@convallis.net"
	},
	{
		"name": "Tanner",
		"company": "Dolor Dolor Company",
		"email": "est@Etiamimperdiet.edu"
	},
	{
		"name": "Cameron",
		"company": "Nibh Enim Ltd",
		"email": "non@nuncQuisqueornare.org"
	},
	{
		"name": "Jonas",
		"company": "Lectus Pede Limited",
		"email": "nostra.per.inceptos@nullaIn.com"
	},
	{
		"name": "Brenda",
		"company": "Sed Consequat Auctor Associates",
		"email": "ligula.Aenean.gravida@condimentumDonec.org"
	},
	{
		"name": "Sylvia",
		"company": "A Company",
		"email": "hendrerit.neque@adipiscingenim.ca"
	},
	{
		"name": "Mariko",
		"company": "Praesent Luctus Curabitur Company",
		"email": "euismod@fermentumrisusat.edu"
	},
	{
		"name": "Chandler",
		"company": "Risus A LLP",
		"email": "commodo.auctor@Sed.org"
	},
	{
		"name": "Kendall",
		"company": "Cras Pellentesque Sed Consulting",
		"email": "rutrum.lorem.ac@eratvitaerisus.net"
	},
	{
		"name": "Jemima",
		"company": "Id Corp.",
		"email": "euismod.urna.Nullam@elementumpurus.ca"
	},
	{
		"name": "Skyler",
		"company": "Nullam Feugiat Placerat Company",
		"email": "elit@nisidictumaugue.org"
	},
	{
		"name": "Lev",
		"company": "Elit Sed Consequat Consulting",
		"email": "lacinia@Morbi.org"
	},
	{
		"name": "Ishmael",
		"company": "Molestie Corporation",
		"email": "Cras.dictum.ultricies@Donecelementumlorem.ca"
	},
	{
		"name": "Chandler",
		"company": "Mi Lorem Institute",
		"email": "sed.leo@nulla.ca"
	},
	{
		"name": "Walter",
		"company": "Diam Incorporated",
		"email": "In.lorem.Donec@cursus.edu"
	},
	{
		"name": "Moses",
		"company": "In Magna Phasellus Corp.",
		"email": "penatibus.et@magna.org"
	},
	{
		"name": "Sebastian",
		"company": "Vitae Posuere LLC",
		"email": "cubilia.Curae@sodalesatvelit.edu"
	},
	{
		"name": "Destiny",
		"company": "Augue Porttitor Institute",
		"email": "cubilia.Curae@luctusetultrices.ca"
	},
	{
		"name": "Melvin",
		"company": "Dui Quis Accumsan Associates",
		"email": "sollicitudin.orci@mattis.net"
	},
	{
		"name": "Thomas",
		"company": "Nisl Maecenas Malesuada Incorporated",
		"email": "Integer.eu.lacus@ascelerisque.org"
	},
	{
		"name": "Elvis",
		"company": "Scelerisque Dui Suspendisse LLC",
		"email": "primis@tinciduntnuncac.ca"
	},
	{
		"name": "Kylie",
		"company": "Maecenas Malesuada Fringilla Corporation",
		"email": "blandit.enim@primisin.ca"
	},
	{
		"name": "Alma",
		"company": "Mauris Elit Associates",
		"email": "Fusce.dolor@magnis.net"
	},
	{
		"name": "Alisa",
		"company": "Placerat LLP",
		"email": "amet.ultricies@et.net"
	},
	{
		"name": "Heidi",
		"company": "Sed Consequat Auctor Company",
		"email": "mi@loremipsum.co.uk"
	},
	{
		"name": "MacKensie",
		"company": "Ipsum Inc.",
		"email": "tellus@nequetellus.co.uk"
	},
	{
		"name": "Janna",
		"company": "Magnis Corporation",
		"email": "pede@semmagnanec.org"
	},
	{
		"name": "Martha",
		"company": "Pharetra Quisque Ac Ltd",
		"email": "mollis@ornare.org"
	},
	{
		"name": "Olga",
		"company": "Nullam Scelerisque Neque PC",
		"email": "mauris.Integer@justositamet.edu"
	},
	{
		"name": "Hermione",
		"company": "Nisi LLC",
		"email": "orci.tincidunt@lobortis.ca"
	},
	{
		"name": "Teagan",
		"company": "Aliquam Adipiscing Lobortis Incorporated",
		"email": "sed@semmollis.com"
	},
	{
		"name": "Patience",
		"company": "Id Corp.",
		"email": "penatibus.et.magnis@placeratvelitQuisque.net"
	},
	{
		"name": "Vladimir",
		"company": "Ornare Company",
		"email": "dis.parturient@pede.net"
	},
	{
		"name": "Herrod",
		"company": "Sociis Natoque Penatibus Industries",
		"email": "dictum.Phasellus.in@Phasellus.ca"
	},
	{
		"name": "Chadwick",
		"company": "Justo Eu Arcu LLP",
		"email": "Duis.mi@posuere.edu"
	},
	{
		"name": "Guy",
		"company": "Enim Diam Vel Company",
		"email": "pretium.aliquet@velitin.com"
	},
	{
		"name": "Myles",
		"company": "Luctus Ipsum Leo Ltd",
		"email": "Proin@ut.co.uk"
	},
	{
		"name": "Colton",
		"company": "Phasellus Foundation",
		"email": "eget.metus@ut.ca"
	},
	{
		"name": "Galvin",
		"company": "Ac Eleifend Vitae LLC",
		"email": "Nam@NullamnislMaecenas.net"
	},
	{
		"name": "Ishmael",
		"company": "Donec Felis Orci PC",
		"email": "lobortis.Class@Vivamusnibhdolor.org"
	},
	{
		"name": "Tiger",
		"company": "Augue Eu Tellus Industries",
		"email": "in@Nunc.org"
	},
	{
		"name": "Bernard",
		"company": "Non Sapien Molestie Institute",
		"email": "mollis@sem.ca"
	},
	{
		"name": "Cheryl",
		"company": "Arcu Sed Consulting",
		"email": "urna.Nunc.quis@ligulaeu.edu"
	},
	{
		"name": "Mariam",
		"company": "Donec Nibh Corp.",
		"email": "netus@elitdictumeu.com"
	},
	{
		"name": "Martena",
		"company": "At Company",
		"email": "eu.eros@Nam.org"
	},
	{
		"name": "Kenneth",
		"company": "Aliquet Corp.",
		"email": "enim.commodo@adipiscing.ca"
	},
	{
		"name": "Reed",
		"company": "Est Mollis Non Consulting",
		"email": "Donec.tempor@dui.net"
	},
	{
		"name": "Benjamin",
		"company": "Et LLC",
		"email": "mauris.eu.elit@scelerisqueneque.ca"
	},
	{
		"name": "Matthew",
		"company": "Natoque Company",
		"email": "Donec.elementum.lorem@nonummy.com"
	},
	{
		"name": "Nehru",
		"company": "Nulla Ante Iaculis Inc.",
		"email": "nisl.sem.consequat@diam.ca"
	},
	{
		"name": "Risa",
		"company": "Sapien Nunc Limited",
		"email": "mollis.vitae.posuere@Sednunc.edu"
	},
	{
		"name": "Quinlan",
		"company": "Lobortis Quis Incorporated",
		"email": "enim@semperetlacinia.net"
	}
]

	User.count().exec(function(err, count) {
    if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }
    if(count > 0) return cb();

		User.create(dummyUsers).exec(cb);
	});

  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};