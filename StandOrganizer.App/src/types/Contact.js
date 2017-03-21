export default class Contact {
    constructor(name, surname, phone) {
        this.name = `${name || ''} ${surname || ''}`;
        this.phone = phone;
    }

    filter(text) {
        if (this.name) {
            return this.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        }
    }
}