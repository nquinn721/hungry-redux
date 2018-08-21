export default class Settings {
    mile = 1609.34;
    static miles(miles){
        return Math.round(miles * this.mile);
    }
}