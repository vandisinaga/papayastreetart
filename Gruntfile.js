module.exports =function(grunt){
	grunt.initConfig({
	  concat: {
	    controller: 
		    {
		        src: ['scripts/controllers/homeCtrl.js', 'scripts/controllers/apparelCtrl.js', 'scripts/controllers/singleApparel.js', 'scripts/controllers/artworksCtrl.js','scripts/controllers/artworksCtrl.js', 'scripts/controllers/singleArtworks.js', 'scripts/controllers/singleArtworks.js', 'scripts/controllers/commissionsArtworkCtrl.js','scripts/controllers/contactCtrl.js'], 
		        dest: 'dist/controller.js'
	    	},
    	directives: 
		    {
		        src: ['scripts/directives/apparel.js', 'scripts/directives/artworks.js', 'scripts/directives/commissionArtworks.js'], 
		        dest: 'dist/directives.js'
	    	},
    	factory: 
		    {
		        src: ['scripts/services/itemFactory.js', 'scripts/services/info.js'], 
		        dest: 'dist/factory.js'
	    	},
	    },
	    watch: {
		  scripts: {
		    files: ['scripts/**/*.js'],
		    tasks: ['concat'],
		  },
		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat','watch']);
};


