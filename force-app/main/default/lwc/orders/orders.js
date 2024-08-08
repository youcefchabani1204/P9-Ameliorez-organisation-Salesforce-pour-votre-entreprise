import { LightningElement, api } from 'lwc';

export default class Orders extends LightningElement {

    sumOrdersOfCurrentAccount;
    @api recordId;

    connectedCallback() {
        this.fetchSumOrders();
    }

    fetchSumOrders() {
        // TODO - récupérer le montant total des Orders sur le compte
    }
}