import { LightningElement,api } from 'lwc';

export default class Lp2cParentComponentAlert extends LightningElement {
    @api message
    @api cardHeadings
}