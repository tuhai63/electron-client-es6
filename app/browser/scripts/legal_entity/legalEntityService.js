class LegalEntityService {

    constructor($http) {        
        this.$http = $http;
        this.host = 'localhost';     
        this.port = 3000; //49160;
    }
    
    getLegalEntities() {
        // return a list of all legal entities   
        return this.$http.get('http://' + this.host + ':' + this.port + '/api/legal_entities');
    }

    getLegalEntityByName(name) {
        // return a list of legal entities by name query
        return this.$http.get('http://' + this.host + ':' + this.port + '/api/legal_entities/name/' + name);
    }
    
    getLegalEntityById(id) {
        // get le by nedb _id
        return this.$http.get('http://' + this.host + ':' + this.port + '/api/legal_entities/' + id );
    }

    getLegalEntityByLEId(leId) {
        // get le by le identifier
        return this.$http.get('http://' + this.host + ':' + this.port + '/api/legal_entities/identifier/' + identifier );
    }

    updateLegalEntity(legalEntity) {
        // update le by replacing entire legalEntity
        return this.$http.put('http://' + this.host + ':' + this.port + '/api/legal_entities', legalEntity );
    }

    createLegalEntity(legalEntity) { 
        // create a new legal entity
        return this.$http.post('http://' + this.host + ':' + this.port + '/api/legal_entities', legalEntity );
    }

    deleteLegalEntity(id) {  
        // delete a legal entity by database id          
        return this.$http.delete('http://' + this.host + ':' + this.port + '/api/legal_entities/' + id );
    }
}

LegalEntityService.$inject = ['$http'];

export { LegalEntityService }


