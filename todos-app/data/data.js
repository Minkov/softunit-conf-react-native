import { AsyncStorage } from "react-native"

class Data {
    constructor(name) {
        this.name = name;
    }

    async _getData() {
        const dataString = await AsyncStorage.getItem(this.name);
        return JSON.parse(dataString || '[]');
    }

    async _saveData(data) {
        return AsyncStorage.setItem(this.name, JSON.stringify(data));
    }

    async getAll() {
        return this._getData();
    }

    async add(item) {
        const data = await this._getData();
        const lastId = Math.max(0, ...data.map(value => value.id));
        item.id = lastId + 1;
        data.push(item);
        await this._saveData(data);
        return item;
    }

    async update(item) {
        const data = await this._getData();
        const index = data.findIndex(dataItem => dataItem.id === item.id);
        data[index] = item;
        return this._saveData(data);
    }
}

export default Data;