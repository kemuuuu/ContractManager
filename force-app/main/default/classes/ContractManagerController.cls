public with sharing class ContractManagerController {
    
    @AuraEnabled
    public static List<Contract> fetchTodayContracts(){
      return [SELECT Id, 
                     Name, 
                     Account.Name, 
                     StartDate, 
                     ContractTerm, 
                     Status, 
                     OwnerExpirationNotice 
              FROM Contract
              WHERE EndDate = TODAY];
    }

    @AuraEnabled
    public static List<Contract> fetchTomorrowContracts(){
      return [SELECT Id, 
                     Name, 
                     Account.Name, 
                     StartDate, 
                     ContractTerm, 
                     Status, 
                     OwnerExpirationNotice 
              FROM Contract];
              // WHERE EndDate = TOMMOROW];
    }
}
