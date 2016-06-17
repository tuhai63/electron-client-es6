import uuid from 'node-uuid';
import {LegalEntityIdentifier, ContactPerson, ContactAddress, LegalEntity} from './legalEntityModel';

class LegalEntityService {
    constructor($http) {        
        this.$http = $http;
    }

    // return a list of all legal entities
    getLegalEntities() {   
        return this.$http.get('http://localhost:3000/api/legal_entities');
    }

    getLegalEntityByName(name) {
        return this.$http.get('http://localhost:3000/api/legal_entities/name/' + name);
    }
    
    getLegalEntityById(id) {
        // get le by nedb _id
        return this.$http.get('http://localhost:3000/api/legal_entities/' + id );
    }

    getLegalEntityByLEId(leId) {
        // get le by le identifier
        return this.$http.get('http://localhost:3000/api/legal_entities/identifier/' + identifier );
    }

    updateLegalEntity(legalEntity) {
        return this.$http.put('http://localhost:3000/api/legal_entities', legalEntity );

        /*
        // $http returns a promise, which has a then function, which also returns a promise
        let promise = this.$http.put('http://localhost:3000/api/legal_entities', legalEntity ).then(function (response) {
            // The then function here is an opportunity to modify the response
            console.log(response);
            // The return value gets picked up by the then in the controller.
            return response.data;
        });
        // Return the promise to the controller
        return promise;
        */
    }

    createLegalEntity(legalEntity) { 
        return this.$http.post('http://localhost:3000/api/legal_entities', legalEntity );
    }

    deleteLegalEntity(id) {            
        return this.$http.delete('http://localhost:3000/api/legal_entities/' + id );
    }

    /*
    // return a list of legal entities in role of 'Regulatory Authority'
    getRegulatoryAuthorities() {        
        let deferred = this.$q.defer();
        this.legalEntities.find({'LEGALENTITY_TYPE.VALUE': 'Regulatory Authority'}, function (err, rows) {
            if (err) deferred.reject(err);
            deferred.resolve(rows);
        });      
        return deferred.promise;  
    }
    
    // return a list of legal entities NOT in role of 'Regulatory Authority'
    getNonRALegalEntities() {        
        let deferred = this.$q.defer();
        this.legalEntities.find({'LEGALENTITY_TYPE.VALUE': {$ne : 'Regulatory Authority'}}, function (err, rows) {
            if (err) deferred.reject(err);
            deferred.resolve(rows);
        });      
        return deferred.promise;  
    }
    */
}

LegalEntityService.$inject = ['$http'];

export { LegalEntityService }


