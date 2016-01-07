angular.module('app').controller("MainController", function() {
	var vm = this ;
	vm.title = 'Favorite TV Shows' ;
	vm.searchInput = '' ;
	vm.shows = [
	{
		title: 'Game of Thrones',
		year: 2011,
		favorite: true
	},
	{
		title: 'Marvel\'s Agents of S.H.I.E.L.D.',
		year: 2013,
		favorite: false
	},
	{
		title: 'Grey\'s Anatomy',
		year: 2005,
		favorite: false
	},
	{
		title: 'Coronation Street',
		year: 1960,
		favorite: true
	},
	{
		title: 'The Vampire Diaries',
		year: 2009,
		favorite: false
	},
	{
		title: 'The Big Bang Theory',
		year: 2007,
		favorite: true
	},
	{
		title: 'Supernatural',
		year: 2005,
		favorite: true
	},
	{
		title: 'How I Met Your Mother',
		year: 2005,
		favorite: false
	},
	{
		title: 'Once Upon a Time',
		year: 2011,
		favorite: true
	},
	{
		title: 'Criminal Minds',
		year: 2005,
		favorite: false
	},
	]; 

	vm.orders = [
	{
		id: 1,
		title: 'Year Ascending',
		key: 'year',
		reverse: false
	},
	{
		id: 2,
		title: 'Year Descending',
		key: 'year',
		reverse: true
	},
	{
		id: 3,
		title: 'Title Ascending',
		key: 'title',
		reverse: false
	},
	{
		id: 4,
		title: 'Title Descending',
		key: 'title',
		reverse: true
	}
	];
	vm.order = vm.orders[0];

	vm.new = {} ;
	vm.addShow = function() {
		vm.shows.push(vm.new) ;
		vm.new = {} ;
	} ;
}) ;