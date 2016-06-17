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
        return this.$http.get('http://localhost:3000/api/legal_entities/names/' + name);
    }
    
    getLegalEntityById(id) {
        // get le by nedb _id
        return this.$http.get('http://localhost:3000/api/legal_entities/ids/' + id );
    }

    getLegalEntityByLEId(leId) {
        // get le by le identifier
        return this.$http.get('http://localhost:3000/api/legal_entities/identifiers/' + identifier );
    }

    updateLegalEntity(legalEntity) {
        return this.$http.put('http://localhost:3000/api/legal_entities', legalEntity );
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


