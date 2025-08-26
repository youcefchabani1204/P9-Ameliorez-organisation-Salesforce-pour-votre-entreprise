public without sharing class MyTeamOrdersController {
  @AuraEnabled
    public static Decimal getSumOrdersByAccount(Id accountId) {
        return OrderService.getAccountCA(accountId);
    }
}
// test
