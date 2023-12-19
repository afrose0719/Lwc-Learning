import { LightningElement,api } from 'lwc';

export default class P2cParentComponentAlert extends LightningElement {
    @api message
    @api cardHeading
}