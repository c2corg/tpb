myApp.factory('User', function($http, $q){
    var factory = {
	user : -1,
        
	// On vérifie si le couple utilisateur + mot de passe est correct
	login : function(userId, pass){
	    var deferred = $q.defer();
	    $http.get(bootstrap + "?controller=Users&action=validerUser&userLogin="+userId+"&mdp="+pass)
            
	    // Si le couple est correct, on renvoie le user entier
	    .success(function(data, status){
		factory.user = data;
		console.log("Data : " + data);
		console.log("Status : " + status);
		console.log("Authentifié en tant que : " + data);
		deferred.resolve(factory.user);
	    })
                    
	    // Sinon on renvoie un message d'erreur
	    .error(function(){
		console.log("Echec d'authentification");
		deferred.reject("Factory Users : Erreur lors du login");
	    });
	    return deferred.promise;
	}
        
    /*validerUser : function(){
	    var bar = {};
	    angular.forEach(factory.bars, function(value, key){
		if(value.id == key){
		    bar = value;
		}
	    });
	    return bar;
	}*/
        
        
    };
    return factory;
});