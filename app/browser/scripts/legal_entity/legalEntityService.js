import uuid from 'node-uuid';
import {LegalEntityIdentifier, ContactPerson, ContactAddress, LegalEntity} from './legalEntityModel';

class LegalEntityService {
    constructor($http) {        
        this.$http = $http;
    }

    // return a list of all legal entities
    getLegalEntities() {   
        return this.$http.get('http://localhost:3000/legal_entities');
    }

    /*
    getLegalEntities() {        
        let deferred = this.$q.defer();
        this.legalEntities.find({}, function (err, rows) {
            if (err) deferred.reject(err);
            deferred.resolve(rows);
        });      
        return deferred.promise;  
    }

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
        
    getLegalEntityById(id) {
        let deferred = this.$q.defer();
        this.legalEntities.find({'_id': id }, function (err, result) {
            if (err) deferred.reject(err);
            deferred.resolve(result);
        });       
        return deferred.promise;
    }
    
    getLegalEntityByLEId(leId) {
        let deferred = this.$q.defer();
        this.legalEntities.find({'_identifier': leId }, function (err, result) {
            if (err) deferred.reject(err);
            deferred.resolve(result);
        });       
        return deferred.promise;
    }
        
    getLegalEntityByName(name) {
        let deferred = this.$q.defer();
        var re = new RegExp(name, 'i');
        let condition = { $regex: re };
        this.legalEntities.find({'LEGALENTITY_NAME': condition }, function (err, result) {
            if (err) deferred.reject(err);
            deferred.resolve(result);
        });  
        return deferred.promise;        
    }
    
    createLegalEntity(legalEntity) { 
        let deferred = this.$q.defer();
        this.legalEntities.insert(legalEntity, function (err, result) {
            console.log(err)
            if (err) deferred.reject(err);
            deferred.resolve(result);
        });
        return deferred.promise;
    }
    
    deleteLegalEntity(id) {            
        let deferred = this.$q.defer();
        this.legalEntities.remove({'_id': id}, function (err, res) {
            if (err) deferred.reject(err);
            console.log(res);
            deferred.resolve(res.affectedRows);
        });                
        return deferred.promise;
    }
    
    updateLegalEntity(legalEntity) {
        let deferred = this.$q.defer();
        this.legalEntities.update({_id: legalEntity._id}, legalEntity, {}, function (err, numReplaced) {
            if (err) { 
                deferred.reject(err);
                console.log(err);
            }
            deferred.resolve(numReplaced);
        });
        return deferred.promise;
    }
    
    addContactPerson(contactPerson){
        this.selected.CONTACT_PERSON.push(contactPerson);
        updateLegalEntity(this.selected);
    }

    // the following are demo related methods.  can be moved to a dedicated test class later    
    getLegalEntityGHSTSById(id) {
        // return GHSTS xml from legal entity json. 
        let deferred = this.$q.defer();
        this.legalEntities.find({'_id': id }, function (err, result) {
            if (err) deferred.reject(err);           
            
            // retrieved Json from database
            let leJSON = result[0];
            // create LegalEntity based on leJSON           
            let le = new LegalEntity(leJSON);
            
            // convert to XML
            let builder = new xml2js.Builder({rootName: 'LEGAL_ENTITY', attrkey: 'attr$'});            
            let xml = builder.buildObject(le.toGHSTSJson());    
            deferred.resolve(xml);        
        });       
        return deferred.promise;
    }
    */
}

LegalEntityService.$inject = ['$http'];

export { LegalEntityService }


